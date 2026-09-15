'use strict';
/* New-client leads from the popup and the footer signup.
 *
 * Why this exists rather than posting the form straight at Arketa: the intake
 * form at app.arketa.co is a hosted HTML page, not an API. A cross-origin POST
 * at it fails CORS and the lead disappears silently — worse than no form at
 * all, because the visitor is told it worked.
 *
 * So the branded form posts here, and this forwards to a Zapier catch hook
 * wired to Arketa's "Add New Client" action. Two reasons the hook sits behind
 * this endpoint instead of in the page:
 *
 *   1. A catch-hook URL in client JavaScript is a public write endpoint into
 *      the client list. Anyone who views source can fill it with junk.
 *   2. It lets us drop the obvious bots (honeypot, absurd payloads) before
 *      anything reaches the CRM.
 *
 * If LEAD_WEBHOOK_URL is not set the endpoint says so plainly and the page
 * falls back to sending people to the hosted Arketa form. It never reports
 * success for a lead it did not deliver. */
/* Deliberately self-contained — no shared helper — so this endpoint stands
 * on its own and a change elsewhere in api/ cannot take leads down. */
function json(res, status, body) {
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'private, no-store');
  res.setHeader('X-Robots-Tag', 'noindex, nofollow');
  res.status(status).send(JSON.stringify(body));
}

const ARKETA_FORM =
  'https://app.arketa.co/oakcliffpilates/intake-form/84hxQjyQ8Va2RFHvUgxE';

const MAX_FIELD = 200;

function clean(value) {
  return String(value == null ? '' : value).trim().slice(0, MAX_FIELD);
}

function readBody(req) {
  if (req.body && typeof req.body === 'object') return Promise.resolve(req.body);
  return new Promise(function (resolve) {
    let raw = '';
    req.on('data', function (chunk) {
      raw += chunk;
      if (raw.length > 8192) req.destroy();          // nobody needs 8 KB of name
    });
    req.on('end', function () {
      try { resolve(JSON.parse(raw || '{}')); } catch (e) { resolve({}); }
    });
    req.on('error', function () { resolve({}); });
  });
}

module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return json(res, 405, { ok: false, error: 'Use POST.' });
  }

  const body = await readBody(req);

  /* Honeypot. A real person never fills a field they cannot see, so anything
   * in it is a bot — answered with a plain 200 so it learns nothing. */
  if (clean(body.company)) return json(res, 200, { ok: true });

  const lead = {
    firstName: clean(body.firstName),
    lastName: clean(body.lastName),
    email: clean(body.email).toLowerCase(),
    phone: clean(body.phone),
    emailOptIn: body.emailOptIn === true,
    smsOptIn: body.smsOptIn === true,
    reason: clean(body.reason),
    source: clean(body.source) || 'oakcliffpilates.com',
    submittedAt: new Date().toISOString(),
  };

  const missing = ['firstName', 'lastName', 'email'].filter(function (k) {
    return !lead[k];
  });
  if (missing.length) {
    return json(res, 400, { ok: false, error: 'Please fill in every field.', missing });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return json(res, 400, { ok: false, error: "That email doesn't look right.", missing: ['email'] });
  }

  const hook = process.env.LEAD_WEBHOOK_URL;
  if (!hook) {
    /* Not wired up yet. Say so, and hand the page the hosted form to fall
     * back to — never a cheerful "you're on the list" for a lead that went
     * nowhere. */
    return json(res, 503, {
      ok: false,
      fallback: ARKETA_FORM,
      error: 'Lead forwarding is not configured yet.',
    });
  }

  try {
    const upstream = await fetch(hook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(lead),
      signal: AbortSignal.timeout(8000),
    });
    if (!upstream.ok) throw new Error(`webhook responded ${upstream.status}`);
  } catch (err) {
    console.error('lead forwarding failed:', err && err.message);
    return json(res, 502, {
      ok: false,
      fallback: ARKETA_FORM,
      error: "We couldn't save that just now.",
    });
  }

  return json(res, 200, { ok: true });
};
