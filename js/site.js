/* Oak Cliff Pilates — site behaviour
   Marquee · mobile drawer · FAQ accordion · intro-offer popup · signup ·
   deferred third-party review widget. No dependencies, no build step. */
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

  /* Delay before the intro-offer popup opens, and how long a dismissal
     is remembered so returning visitors are not nagged every visit. */
  var POPUP_DELAY_MS = 5000;
  var POPUP_SNOOZE_DAYS = 7;

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
      show(0);
    }

    function close() {
      if (pop.hidden) return;
      pop.hidden = true;
      document.body.classList.remove("is-locked");
      snooze();
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    /* Remember a dismissal so the popup does not reopen every visit. */
    function snooze() {
      try {
        localStorage.setItem("ocp:popup-seen", String(Date.now()));
      } catch (e) { /* private mode — fall back to per-session only */ }
    }
    function snoozed() {
      try {
        var t = Number(localStorage.getItem("ocp:popup-seen"));
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

    /* Step 1 — hand-off. Following the link opens the Arketa form in a
       new tab; we advance to the offers so the popup is somewhere useful
       when they come back to this one. "Skip" jumps straight there. */
    $$("[data-lead-form]", pop).forEach(function (a) {
      a.addEventListener("click", function () { show(2); });
    });
    $$("[data-step-to]", pop).forEach(function (b) {
      b.addEventListener("click", function () { show(Number(b.dataset.stepTo)); });
    });

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
      /* Same hand-off as the popup: the intake form is a hosted page, so
         send them there rather than pretending we stored the address. */
      var link = $("[data-lead-form]");
      say("Opening our new-client form — finish there and you're on the list.");
      window.open((link && link.href) || LEAD_FORM_URL, "_blank", "noopener");
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
