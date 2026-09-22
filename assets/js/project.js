/* =========================================================
   Kiara Kruger — Case study template (project.html)
   Reads ?slug=... and renders the matching entry from PROJECTS
   (assets/js/content.js). Add a new project there and its
   detail page works immediately — no HTML edits needed.
========================================================= */
(function () {
  "use strict";

  function mockupMarkup(kind) {
    if (kind === "phone") {
      return `
        <div class="mockup-phone">
          <div class="mockup-phone-screen">
            <div class="mockup-notch"></div>
            <div class="block block-line1" style="margin-top:14px;"></div>
            <div class="block block-line2"></div>
            <div class="block block-card" style="height:90px;"></div>
            <div class="block block-card" style="height:90px;"></div>
            <div class="block block-card" style="height:54px;"></div>
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

  function renderNotFound() {
    const main = document.getElementById("top");
    if (!main) return;
    const hero = document.getElementById("caseHero");
    if (hero) {
      hero.querySelector(".container").innerHTML = `
        <a href="index.html#work" class="back-link" data-cursor="link">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 12H11M4 12V5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
          All work
        </a>
        <h1 class="case-title">Project not found</h1>
        <p class="case-summary">This case study doesn't exist yet — head back to see the full list of work.</p>`;
    }
    ["caseVisual", "resultsGrid", "caseResultsWrap"].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.style.display = "none";
    });
    const content = document.querySelector(".case-content-main");
    if (content) content.innerHTML = "";
    const next = document.getElementById("nextProjectLink");
    if (next) next.style.display = "none";
  }

  function init() {
    if (typeof PROJECTS === "undefined") return;

    const slug = new URLSearchParams(window.location.search).get("slug");
    const index = PROJECTS.findIndex((p) => p.slug === slug);
    if (index === -1) { renderNotFound(); return; }
    const project = PROJECTS[index];

    document.title = `${project.title} — Kiara Kruger`;

    const tag = document.getElementById("caseTag");
    if (tag) tag.textContent = project.tag;

    const title = document.getElementById("caseTitle");
    if (title) title.textContent = project.title;

    const summary = document.getElementById("caseSummary");
    if (summary) summary.textContent = project.description;

    const meta = document.getElementById("caseMeta");
    if (meta) {
      meta.innerHTML = `
        <div class="case-meta-item"><span>Role</span><strong>${project.role || "—"}</strong></div>
        <div class="case-meta-item"><span>Company</span><strong>${project.company || "—"}</strong></div>
        <div class="case-meta-item"><span>Timeline</span><strong>${project.period}</strong></div>`;
    }

    const visual = document.getElementById("caseVisual");
    if (visual) {
      visual.dataset.accent = project.accent;
      visual.innerHTML = mockupMarkup(project.kind);
    }

    const challenge = document.getElementById("caseChallenge");
    if (challenge) challenge.textContent = project.challenge || project.description;

    const approach = document.getElementById("caseApproach");
    if (approach && Array.isArray(project.approach)) {
      approach.innerHTML = project.approach.map((line) => `<li>${line}</li>`).join("");
    }

    const results = document.getElementById("resultsGrid");
    if (results && Array.isArray(project.results)) {
      results.innerHTML = project.results
        .map((r) => `
          <div class="result-tile">
            <span class="result-value">${r.value}</span>
            <span class="result-label">${r.label}</span>
          </div>`)
        .join("");
    }

    const nextProject = PROJECTS[(index + 1) % PROJECTS.length];
    const nextLink = document.getElementById("nextProjectLink");
    const nextTitle = document.getElementById("nextProjectTitle");
    if (nextLink && nextProject) nextLink.href = `project.html?slug=${nextProject.slug}`;
    if (nextTitle && nextProject) nextTitle.textContent = nextProject.title;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
