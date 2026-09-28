/* =========================================================
   Long-form case study pages (case-*.html):
   image lightbox + hero video pause control.
========================================================= */
(function () {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function initLightbox() {
    const box = document.getElementById("lightbox");
    const boxImg = document.getElementById("lightboxImg");
    const closeBtn = document.getElementById("lightboxClose");
    if (!box || !boxImg) return;
    let lastFocus = null;

    function open(img) {
      lastFocus = document.activeElement;
      boxImg.src = img.currentSrc || img.src;
      boxImg.alt = img.alt;
      box.hidden = false;
      document.body.style.overflow = "hidden";
      closeBtn.focus();
    }
    function close() {
      box.hidden = true;
      boxImg.removeAttribute("src");
      document.body.style.overflow = "";
      if (lastFocus) lastFocus.focus();
    }

    document.querySelectorAll(".cs-media:not(.cs-media--small) img").forEach((img) => {
      img.tabIndex = 0;
      img.setAttribute("role", "button");
      img.addEventListener("click", () => open(img));
      img.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(img); }
      });
    });
    box.addEventListener("click", close);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !box.hidden) close(); });
  }

  function initVideo() {
    document.querySelectorAll(".cs-video").forEach((wrap) => {
      const video = wrap.querySelector("video");
      const btn = wrap.querySelector(".cs-video-toggle");
      if (!video || !btn) return;

      function sync() {
        btn.textContent = video.paused ? "Play" : "Pause";
        btn.setAttribute("aria-label", video.paused ? "Play video" : "Pause video");
      }
      if (reduceMotion) { video.removeAttribute("autoplay"); video.pause(); }
      btn.addEventListener("click", () => { video.paused ? video.play() : video.pause(); });
      video.addEventListener("play", sync);
      video.addEventListener("pause", sync);
      sync();
    });
  }

  function init() { initLightbox(); initVideo(); }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
