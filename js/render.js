import { profile } from "../data/profile.js";
import { experiences } from "../data/experience.js";
import { capabilities } from "../data/skills.js";
import { education } from "../data/education.js";
import { projects, projectCategories } from "../data/projects.js";

const tags = (items) => items.map((item) => `<span>${item}</span>`).join("");

export function renderProfile() {
  document.querySelector("[data-profile-bio]").textContent = profile.bio;
  document.querySelector("[data-hero-meta]").innerHTML = `
    <div><span>Currently</span><strong>Junior Telescope Engineer, NRC</strong></div>
    <div><span>Based in</span><strong>${profile.location}</strong></div>
  `;
  document.querySelector("[data-proof-points]").innerHTML = profile.proofPoints.map((point) => `
    <div class="proof-item reveal">
      <strong>${point.value}</strong>
      <span>${point.label}</span>
    </div>
  `).join("");
  document.querySelector("[data-hero-links]").innerHTML = profile.links.map((link) => `
    <a href="${link.url}"${link.external ? ' target="_blank" rel="noreferrer"' : ""}>
      ${link.display} <span aria-hidden="true">${link.external ? "↗" : "→"}</span>
    </a>
  `).join("");
  document.querySelector("[data-contact-links]").innerHTML = profile.links.map((link) => `
    <a href="${link.url}"${link.external ? ' target="_blank" rel="noreferrer"' : ""}>${link.label} <span aria-hidden="true">${link.external ? "↗" : "→"}</span></a>
  `).join("");
}

export function renderProjects() {
  const featured = projects.filter((project) => project.featured);
  const archive = projects.filter((project) => !project.featured);

  document.querySelector("[data-featured-projects]").innerHTML = featured.map((project) => `
    <article class="featured-card tone-${project.tone} reveal">
      <div class="featured-content">
        <div class="project-topline"><span>${project.eyebrow}</span><span>${project.period}</span></div>
        <span class="featured-number" aria-hidden="true">${project.number}</span>
        <h3>${project.title}</h3>
        <p class="featured-summary">${project.summary}</p>
        <p class="project-result"><span>Result</span><strong>${project.result}</strong></p>
        <div class="tag-list">${tags(project.tags)}</div>
        ${project.caseStudy
          ? `<a class="project-link" href="${project.caseStudy}">${project.linkLabel} <span aria-hidden="true">→</span></a>`
          : project.link
            ? `<a class="project-link" href="${project.link}" target="_blank" rel="noreferrer">${project.linkLabel} <span aria-hidden="true">↗</span></a>`
            : `<span class="project-note">Case study media coming soon</span>`}
      </div>
    </article>
  `).join("");

  document.querySelector("[data-project-filters]").innerHTML = projectCategories.map((category, index) => `
    <button type="button" class="filter-button${index === 0 ? " active" : ""}" data-filter="${category}" aria-pressed="${index === 0}">${category}</button>
  `).join("");

  const archiveElement = document.querySelector("[data-project-archive]");
  const drawArchive = (filter = "All") => {
    const visible = filter === "All" ? archive : archive.filter((project) => project.category === filter);
    archiveElement.innerHTML = visible.map((project) => `
      <article class="archive-card">
        <div class="archive-meta"><span>${project.category}</span><span>${project.period}</span></div>
        <h4>${project.title}</h4>
        <p>${project.summary}</p>
        <div class="tag-list small">${tags(project.tags)}</div>
        ${project.caseStudy
          ? `<a href="${project.caseStudy}" aria-label="View ${project.title} case study">Case study →</a>`
          : project.link
            ? `<a href="${project.link}" target="_blank" rel="noreferrer" aria-label="View ${project.title} repository">Repository ↗</a>`
            : `<span class="private-label">Project details available</span>`}
      </article>
    `).join("");
  };
  drawArchive();

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-filter]").forEach((item) => {
        item.classList.remove("active");
        item.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");
      drawArchive(button.dataset.filter);
    });
  });
}

export function renderExperience() {
  document.querySelector("[data-experience]").innerHTML = experiences.map((experience, index) => `
    <article class="experience-item reveal">
      <div class="experience-period"><span>0${index + 1}</span><p>${experience.period}</p></div>
      <div class="experience-main">
        <div class="experience-title-row">
          <div><h3>${experience.caseStudy ? `<a href="${experience.caseStudy}">${experience.title}</a>` : experience.title}</h3><p>${experience.company}</p></div>
          <div><p>${experience.group}</p><span>${experience.location}</span></div>
        </div>
        <p class="experience-summary">${experience.summary}</p>
        <ul>${experience.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}</ul>
        <div class="tag-list">${tags(experience.tools)}</div>
        ${experience.caseStudy ? `<a class="experience-case-link" href="${experience.caseStudy}">Explore the full co-op case study <span aria-hidden="true">↗</span></a>` : ""}
      </div>
    </article>
  `).join("");
}

export function renderCapabilities() {
  document.querySelector("[data-capabilities]").innerHTML = capabilities.map((capability) => `
    <article class="capability-card reveal">
      <span class="capability-number">${capability.number}</span>
      <h3>${capability.title}</h3>
      <p>${capability.description}</p>
      <div class="capability-skills">${tags(capability.skills)}</div>
    </article>
  `).join("");
}

export function renderEducation() {
  document.querySelector("[data-education]").innerHTML = education.map((item) => `
    <article class="education-card reveal">
      <div class="education-meta"><span>${item.type}</span><span>${item.period}</span></div>
      <h3>${item.title}</h3>
      <strong>${item.organization}</strong>
      <p>${item.note}</p>
    </article>
  `).join("");
}
