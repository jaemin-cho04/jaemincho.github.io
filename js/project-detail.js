const projectModules = import.meta.glob("../data/projects/*.js", {
  eager: true,
  import: "default",
});

const projectId = document.body.dataset.project;
const project = projectModules[`../data/projects/${projectId}.js`];
const contributions = document.querySelector("[data-project-contributions]");

if (contributions && project) {
  contributions.innerHTML = project.contributions.map((contribution) => `
    <article class="workstream workstream-compact">
      <span class="workstream-number">${contribution.number}</span>
      <h3>${contribution.title}</h3>
      <p>${contribution.summary}</p>
      <ul>${contribution.approach.map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  `).join("");
}

const year = document.querySelector("[data-current-year]");
if (year) year.textContent = new Date().getFullYear();
