/* =========================================================
   Kiara Kruger — Portfolio interactions
   Vanilla JS: reveals, marquee, tilt, cursor, clock, nav.
========================================================= */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- Render skills marquee ---------------- */
  function renderMarquee() {
    const track = document.getElementById("marqueeTrack");
    if (!track || typeof SKILLS === "undefined") return;
    const build = () =>
      SKILLS.map(
        (s) => `<span class="marquee-item">${s}<span class="dot" aria-hidden="true"></span></span>`
      ).join("");
    // duplicate list once for a seamless 50%-translate loop
    track.innerHTML = build() + build();
  }

  /* ---------------- Render project cards ---------------- */
  function mockupMarkup(kind) {
    if (kind === "phone") {
      return `
        <div class="mockup-phone">
          <div class="mockup-phone-screen">
            <div class="mockup-notch"></div>
            <div class="block block-line1" style="margin-top:14px;"></div>
            <div class="block block-line2"></div>
            <div class="block block-card" style="height:70px;"></div>
            <div class="block block-card" style="height:70px;"></div>
            <div class="block block-card" style="height:44px;"></div>
          </div>
        </div>`;
    }
    return `
      <div class="mockup-browser">
        <div class="mockup-bar"><i></i><i></i><i></i></div>
        <div class="mockup-body">
          <div class="block block-line1"></div>
          <div class="block block-line2"></div>
          <div class="block-row">
            <div class="block block-card"></div>
            <div class="block block-card"></div>
            <div class="block block-card"></div>
          </div>
        </div>
      </div>`;
  }

  function renderProjects() {
    const list = document.getElementById("workList");
    if (!list || typeof PROJECTS === "undefined") return;

    list.innerHTML = PROJECTS.map(
      (p, i) => `
      <article class="project-card" data-accent="${p.accent}" data-reveal>
        <div class="project-info">
          <span class="project-tag">${p.tag}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.description}</p>
          <div class="project-meta">
            <span class="project-period">${p.period}</span>
            <a href="#" class="project-link" data-cursor="link">
              View case study
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 12L12 4M12 4H5M12 4v7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
            </a>
          </div>
        </div>
        <div class="project-visual" data-tilt>
          ${mockupMarkup(p.kind)}
        </div>
      </article>`
    ).join("");
  }

  /* ---------------- Scroll reveal (IntersectionObserver) ---------------- */
  function initReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    if (!els.length) return;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    els.forEach((el) => io.observe(el));
  }

  /* ---------------- Animated stat counters ---------------- */
  function initCounters() {
    const nums = document.querySelectorAll(".stat-num");
    if (!nums.length) return;

    const animate = (el) => {
      const target = parseInt(el.dataset.count, 10) || 0;
      if (reduceMotion) { el.textContent = target; return; }
      const dur = 1400;
      const start = performance.now();
      function tick(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target);
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );
    nums.forEach((el) => io.observe(el));
  }

  /* ---------------- Header scroll state + progress bar ---------------- */
  function initHeaderScroll() {
    const header = document.getElementById("siteHeader");
    const bar = document.getElementById("scrollProgressBar");

    function onScroll() {
      const y = window.scrollY;
      if (header) header.classList.toggle("is-scrolled", y > 8);
      if (bar) {
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        bar.style.width = max > 0 ? `${(y / max) * 100}%` : "0%";
      }
    }
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- Active nav link on scroll ---------------- */
  function initActiveNav() {
    const links = document.querySelectorAll("[data-nav-link]");
    const sections = Array.from(links)
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = "#" + entry.target.id;
          const link = document.querySelector(`[data-nav-link][href="${id}"]`);
          if (!link) return;
          if (entry.isIntersecting) {
            links.forEach((l) => l.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => io.observe(s));
  }

  /* ---------------- Mobile nav ---------------- */
  function initMobileNav() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("navMobile");
    if (!toggle || !nav) return;

    function close() {
      toggle.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.style.overflow = "";
    }
    function open() {
      toggle.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      nav.classList.add("is-open");
      document.body.style.overflow = "hidden";
    }
    toggle.addEventListener("click", () => {
      toggle.classList.contains("is-open") ? close() : open();
    });
    nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  }

  /* ---------------- Live local clock ---------------- */
  function initClock() {
    const timeEl = document.getElementById("clockTime");
    if (!timeEl) return;
    function tick() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, "0");
      const m = String(now.getMinutes()).padStart(2, "0");
      timeEl.textContent = `${h}:${m}`;
    }
    tick();
    setInterval(tick, 15000);
  }

  /* ---------------- Back to top ---------------- */
  function initBackToTop() {
    const btn = document.getElementById("backToTop");
    if (!btn) return;
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------------- Footer year ---------------- */
  function initYear() {
    const el = document.getElementById("year");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* ---------------- Project card tilt ---------------- */
  function initTilt() {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const cards = document.querySelectorAll(".project-visual[data-tilt]");
    cards.forEach((card) => {
      const parent = card.closest(".project-card");
      if (!parent) return;
      parent.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        card.style.setProperty("--tilt-y", `${px * 10}deg`);
        card.style.setProperty("--tilt-x", `${py * -10}deg`);
      });
      parent.addEventListener("mouseleave", () => {
        card.style.setProperty("--tilt-x", `0deg`);
        card.style.setProperty("--tilt-y", `0deg`);
      });
    });
  }

  /* ---------------- Custom cursor ---------------- */
  function initCursor() {
    if (reduceMotion || window.matchMedia("(pointer: coarse)").matches) return;
    const cursor = document.getElementById("cursor");
    if (!cursor) return;
    const dot = cursor.querySelector(".cursor-dot");
    const ring = cursor.querySelector(".cursor-ring");

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    window.addEventListener("mousemove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      cursor.classList.remove("is-hidden");
    });
    window.addEventListener("mouseleave", () => cursor.classList.add("is-hidden"));

    function raf() {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    document.addEventListener("mouseover", (e) => {
      const target = e.target.closest('[data-cursor="link"], a, button');
      cursor.classList.toggle("is-link", !!target);
    });
  }

  /* ---------------- Init ---------------- */
  function init() {
    renderMarquee();
    renderProjects();
    initReveal();
    initCounters();
    initHeaderScroll();
    initActiveNav();
    initMobileNav();
    initClock();
    initBackToTop();
    initYear();
    initTilt();
    initCursor();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
