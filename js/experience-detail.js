const caseStudyModules = import.meta.glob("../data/case-studies/*.js", {
  eager: true,
  import: "default",
});

const caseStudyId = document.body.dataset.caseStudy;
const caseStudy = caseStudyModules[`../data/case-studies/${caseStudyId}.js`];

const contributions = document.querySelector("[data-contributions]");

if (contributions && caseStudy) {
  const compact = document.body.classList.contains("case-page-compact");

  contributions.innerHTML = caseStudy.workstreams.map((workstream) => compact ? `
    <article class="workstream workstream-compact" id="${workstream.id}">
      <span class="workstream-number">${workstream.number}</span>
      <h3>${workstream.title}</h3>
      <p>${workstream.summary}</p>
      <ul>${workstream.approach.slice(0, 2).map((item) => `<li>${item}</li>`).join("")}</ul>
    </article>
  ` : `
    <article class="workstream" id="${workstream.id}">
      <div class="workstream-heading">
        <span>${workstream.number}</span>
        <div>
          <h3>${workstream.title}</h3>
          <p>${workstream.summary}</p>
        </div>
      </div>
      <div class="workstream-detail">
        <div>
          <h4>Problem</h4>
          <p>${workstream.challenge}</p>
        </div>
        <div>
          <h4>What I did</h4>
          <ul>${workstream.approach.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
        <p class="workstream-result"><strong>Engineering insight:</strong> ${workstream.takeaway}</p>
      </div>
    </article>
  `).join("");
}

const year = document.querySelector("[data-current-year]");
if (year) year.textContent = new Date().getFullYear();
