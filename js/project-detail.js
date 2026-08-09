import autonomousScavenger from "../data/projects/autonomous-scavenger.js";
import gearboxCad from "../data/projects/gearbox-cad.js";
import roboticGimbal from "../data/projects/robotic-gimbal.js";
import skylarkCubesat from "../data/projects/skylark-cubesat.js";
import smartFocusDock from "../data/projects/smart-focus-dock.js";
import timeSeriesForecasting from "../data/projects/time-series-forecasting.js";

const projects = {
  "autonomous-scavenger": autonomousScavenger,
  "gearbox-cad": gearboxCad,
  "robotic-gimbal": roboticGimbal,
  "skylark-cubesat": skylarkCubesat,
  "smart-focus-dock": smartFocusDock,
  "time-series-forecasting": timeSeriesForecasting,
};

const projectId = document.body.dataset.project;
const project = projects[projectId];
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
