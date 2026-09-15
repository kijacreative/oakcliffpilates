/* Oak Cliff Pilates — site behaviour
   Marquee · mobile drawer · FAQ accordion · intro-offer popup · new-client
   form · signup · video facade. No dependencies, no build step. */
(function () {
  "use strict";

  /* ── Configuration ────────────────────────────────────────────────
     Leads go to the Arketa new-client intake form. That URL is a hosted
     HTML page, not an API — posting JSON at it would fail CORS and drop
     the lead silently — so the popup and the footer signup hand the
     visitor over to it instead of collecting the same fields twice.
     The popup's own link carries this URL in the markup so it still
     works with JavaScript off; this constant is the fallback.        */
  var LEAD_FORM_URL = "https://app.arketa.co/oakcliffpilates/intake-form/84hxQjyQ8Va2RFHvUgxE";

  /* Delay before the intro-offer popup opens, and how long a first visit is
     remembered so returning visitors are not nagged every time. */
  var POPUP_DELAY_MS = 3000;
  var POPUP_SNOOZE_DAYS = 30;

  var MARQUEE = [
    "Energy Elevated™",
    "Are you down with OCP?",
    "Classical AF",
    "OG Reformer",
    "Arms, Ass & Abs",
    "Pilates in the Park"
  ];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  /* ── Marquee ──────────────────────────────────────────────────────
     Rendered twice so the -50% keyframe loops seamlessly. */
  (function () {
    var track = $("#marquee");
    if (!track) return;
    var html = MARQUEE.map(function (m) {
      return '<span>' + m + ' <span style="color:var(--ocp-gold-deep)">·</span></span>';
    }).join("");
    track.innerHTML = html + html;
  })();

  /* ── Footer year ──────────────────────────────────────────────── */
  (function () {
    var y = $("#year");
    if (y) y.textContent = String(new Date().getFullYear());
  })();

  /* ── Mobile drawer ────────────────────────────────────────────── */
  (function () {
    var burger = $("#burger");
    var drawer = $("#drawer");
    if (!burger || !drawer) return;

    function set(open) {
      burger.setAttribute("aria-expanded", String(open));
      drawer.setAttribute("data-open", String(open));
    }
    burger.addEventListener("click", function () {
      set(burger.getAttribute("aria-expanded") !== "true");
    });
    drawer.addEventListener("click", function (e) {
      if (e.target.closest("a")) set(false);
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") set(false);
    });
  })();

  /* ── FAQ accordion ────────────────────────────────────────────────
     One panel open at a time; the first is open on load. */
  (function () {
    var qs = $$(".faq-q");
    qs.forEach(function (q) {
      q.addEventListener("click", function () {
        var open = q.getAttribute("aria-expanded") === "true";
        qs.forEach(function (o) { o.setAttribute("aria-expanded", "false"); });
        q.setAttribute("aria-expanded", open ? "false" : "true");
      });
    });
  })();


  /* ── Carousels ────────────────────────────────────────────────────
     Numbered slide decks ("1 2 3 4 / 4"). Progressive enhancement: with
     JS off every slide is still in the DOM and readable. */
  (function () {
    $$("[data-carousel]").forEach(function (root) {
      var track = $(".carousel__track", root);
      var slides = $$(".carousel__slide", root);
      var nums = $$("[data-go]", root);
      if (!track || slides.length < 2) return;

      var index = 0;

      function show(next) {
        index = (next + slides.length) % slides.length;
        track.style.transform = "translateX(" + index * -100 + "%)";
        nums.forEach(function (b, i) {
          b.setAttribute("aria-selected", String(i === index));
        });
        slides.forEach(function (s, i) {
          // Keep off-screen slides out of the tab order and the a11y tree.
          s.setAttribute("aria-hidden", String(i !== index));
          $$("a,button,input", s).forEach(function (el) {
            if (i === index) el.removeAttribute("tabindex");
            else el.setAttribute("tabindex", "-1");
          });
        });
      }

      nums.forEach(function (b) {
        b.addEventListener("click", function () { show(Number(b.dataset.go)); });
      });
      var prev = $("[data-prev]", root);
      var next = $("[data-next]", root);
      if (prev) prev.addEventListener("click", function () { show(index - 1); });
      if (next) next.addEventListener("click", function () { show(index + 1); });

      root.addEventListener("keydown", function (e) {
        if (e.key === "ArrowLeft") { show(index - 1); e.preventDefault(); }
        if (e.key === "ArrowRight") { show(index + 1); e.preventDefault(); }
      });

      /* Touch swipe — horizontal drags only, so vertical scrolling still works. */
      var x0 = null, y0 = null;
      root.addEventListener("touchstart", function (e) {
        x0 = e.touches[0].clientX; y0 = e.touches[0].clientY;
      }, { passive: true });
      root.addEventListener("touchend", function (e) {
        if (x0 === null) return;
        var dx = e.changedTouches[0].clientX - x0;
        var dy = e.changedTouches[0].clientY - y0;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) show(index + (dx < 0 ? 1 : -1));
        x0 = y0 = null;
      }, { passive: true });

      show(0);
    });
  })();

  /* ── Intro-offer popup ────────────────────────────────────────── */
  (function () {
    var pop = $("#popup");
    if (!pop) return;

    var steps = $$(".pop-step", pop);
    var dots = $$(".pop-dot", pop);
    var lastFocus = null;
    var reason = "";

    function show(n) {
      steps.forEach(function (s) { s.hidden = Number(s.dataset.step) !== n; });
      dots.forEach(function (d, i) { d.classList.toggle("on", i <= n); });
      var focusable = $("button, a, input", steps[n]);
      if (focusable) focusable.focus();
    }

    function open() {
      if (!pop.hidden) return;
      lastFocus = document.activeElement;
      pop.hidden = false;
      document.body.classList.add("is-locked");
      snooze();
      show(0);
    }

    function close() {
      if (pop.hidden) return;
      pop.hidden = true;
      document.body.classList.remove("is-locked");
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    /* Remember the visit so the popup shows once and then stays quiet for a
       month. Written as a cookie, with localStorage alongside it: a cookie is
       what the 30 days is actually keyed to, and localStorage covers the case
       where cookies are blocked but storage is not. Either one counts as seen,
       so a visitor is never shown it twice because one of the two was cleared.

       Recorded on open, not on close — someone who opens the popup and walks
       away has still been shown the offer. */
    var SEEN = "ocp_popup_seen";

    function snooze() {
      var expires = new Date(Date.now() + POPUP_SNOOZE_DAYS * 864e5).toUTCString();
      try {
        document.cookie = SEEN + "=1; expires=" + expires +
          "; path=/; SameSite=Lax" + (location.protocol === "https:" ? "; Secure" : "");
      } catch (e) { /* cookies blocked — localStorage below may still work */ }
      try {
        localStorage.setItem(SEEN, String(Date.now()));
      } catch (e) { /* private mode — this visit only */ }
    }

    function snoozed() {
      if (document.cookie.indexOf(SEEN + "=1") !== -1) return true;
      try {
        var t = Number(localStorage.getItem(SEEN));
        return !!t && Date.now() - t < POPUP_SNOOZE_DAYS * 864e5;
      } catch (e) { return false; }
    }

    $$("[data-open-popup]").forEach(function (b) {
      b.addEventListener("click", open);
    });
    $$("[data-close-popup]", pop).forEach(function (b) {
      b.addEventListener("click", close);
    });
    pop.addEventListener("click", function (e) {
      if (e.target === pop) close();
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !pop.hidden) close();
    });

    /* Step 0 — reason */
    $$("[data-reason]", pop).forEach(function (b) {
      b.addEventListener("click", function () {
        reason = b.textContent.trim();
        var slot = $("[data-picked]", pop);
        if (slot) slot.textContent = "“" + reason + "”";
        show(1);
      });
    });

    /* Back links */
    $$("[data-back]", pop).forEach(function (b) {
      b.addEventListener("click", function () { show(Number(b.dataset.back)); });
    });

    $$("[data-step-to]", pop).forEach(function (b) {
      b.addEventListener("click", function () { show(Number(b.dataset.stepTo)); });
    });

    /* Step 1 — the new-client form. Posts to /api/lead, which forwards to
       Arketa. Three outcomes and each is told the truth:

         saved    → step 2, greeted by name
         no route → the endpoint is not wired up, or it failed. We open
                    Arketa's own hosted form rather than claim we stored it.
         invalid  → the message says which field, nothing is sent

       With JavaScript off none of this runs and the form's own action posts
       to the Arketa page, which is the same destination by a slower road. */
    (function () {
      var form = $("#lead-form", pop);
      if (!form) return;
      var msg = $("[data-lead-msg]", form);
      var button = $("button[type=submit]", form);
      var sending = false;

      function say(text) {
        if (!msg) return;
        msg.textContent = text;
        msg.hidden = !text;
      }

      function handOff(url, lead) {
        say("Opening our new-client form — finish there and you're on the list.");
        window.open(url || LEAD_FORM_URL, "_blank", "noopener");
        greet(lead, "handoff");
      }

      function greet(lead, state) {
        $$("[data-firstname]", pop).forEach(function (slot) {
          slot.textContent = lead.firstName ? ", " + lead.firstName : "";
        });
        $$("[data-lead-state]", pop).forEach(function (block) {
          block.hidden = block.dataset.leadState !== (state || "saved");
        });
        show(2);
      }

      form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (sending) return;

        var data = new FormData(form);
        var lead = {
          firstName: String(data.get("firstName") || "").trim(),
          lastName: String(data.get("lastName") || "").trim(),
          email: String(data.get("email") || "").trim(),
          phone: String(data.get("phone") || "").trim(),
          company: String(data.get("company") || ""),
          emailOptIn: data.get("emailOptIn") !== null,
          smsOptIn: data.get("smsOptIn") !== null,
          reason: reason,
          source: "popup"
        };

        var blank = ["firstName", "lastName", "email"].filter(function (k) {
          return !lead[k];
        })[0];
        if (blank) {
          say("We need your name and email to hold the offer.");
          var field = $("[name=" + blank + "]", form);
          if (field) field.focus();
          return;
        }
        if (!/.+@.+\..+/.test(lead.email)) {
          say("That email doesn't look right — mind checking it?");
          $("[name=email]", form).focus();
          return;
        }

        sending = true;
        if (button) button.disabled = true;
        say("Saving\u2026");

        fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead)
        }).then(function (r) {
          return r.json().catch(function () { return {}; });
        }).then(function (body) {
          if (body && body.ok) { form.reset(); return greet(lead, "saved"); }
          handOff(body && body.fallback, lead);
        }).catch(function () {
          handOff(null, lead);
        }).then(function () {
          sending = false;
          if (button) button.disabled = false;
        });
      });
    })();

    /* Auto-open once the delay has elapsed. If the page was loaded into a
       background tab, wait for it to actually be looked at first. */
    if (!snoozed()) {
      setTimeout(function () {
        if (document.visibilityState === "visible") return open();
        document.addEventListener("visibilitychange", function once() {
          if (document.visibilityState !== "visible") return;
          document.removeEventListener("visibilitychange", once);
          open();
        });
      }, POPUP_DELAY_MS);
    }
  })();

  /* ── Newsletter signup ────────────────────────────────────────── */
  (function () {
    var form = $("#signup");
    if (!form) return;
    var input = $("input", form);
    var msg = $("[data-signup-msg]", form);

    function say(text) {
      if (!msg) return;
      msg.textContent = text;
      msg.hidden = false;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var email = input.value.trim();
      if (!/.+@.+\..+/.test(email)) {
        say("That email doesn't look right — mind checking it?");
        input.focus();
        return;
      }
      /* Only an email here, and Arketa needs a name to create a client, so
         this stays a hand-off: send them to the real form rather than
         pretending we stored the address. */
      say("Opening our new-client form — finish there and you're on the list.");
      window.open(LEAD_FORM_URL, "_blank", "noopener");
      form.reset();
    });
  })();

  /* ── Reviews widget ───────────────────────────────────────────────
     EmbedSocial is a third-party script; load it only when the reviews
     section is close to the viewport so it never blocks first paint. */
  (function () {
    var holder = $("[data-embedsocial]");
    if (!holder) return;

    function load() {
      if (document.getElementById("EmbedSocialHashtagScript")) return;
      var js = document.createElement("script");
      js.id = "EmbedSocialHashtagScript";
      js.src = "https://embedsocial.com/cdn/ht.js";
      document.head.appendChild(js);
    }

    if (!("IntersectionObserver" in window)) { load(); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) {
        load();
        io.disconnect();
      }
    }, { rootMargin: "600px" });
    io.observe(holder);
  })();
})();

/* ── YouTube facade ────────────────────────────────────────────────────────
   Posts ship a poster image and a play button; the real iframe is injected
   only when someone asks for it. Keeps the player's ~1 MB of JS and its
   cookies off every page view. Without JS the noscript link still works. */
(function () {
  var frames = document.querySelectorAll(".video[data-video]");
  for (var i = 0; i < frames.length; i++) {
    (function (frame) {
      var btn = frame.querySelector(".video__play");
      if (!btn) return;
      btn.addEventListener("click", function () {
        var id = frame.getAttribute("data-video");
        var f = document.createElement("iframe");
        f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
        f.title = btn.getAttribute("aria-label") || "Video";
        f.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
        f.allowFullscreen = true;
        f.referrerPolicy = "strict-origin-when-cross-origin";
        frame.innerHTML = "";
        frame.appendChild(f);
      });
    })(frames[i]);
  }
})();
