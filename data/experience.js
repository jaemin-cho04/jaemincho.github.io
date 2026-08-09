export const experiences = [
  {
    period: "May 2026 — Present",
    title: "Junior Telescope Engineer Co-op",
    company: "National Research Council Canada",
    group: "Dominion Radio Astrophysical Observatory",
    location: "Penticton, BC",
    caseStudy: "experience/nrc-drao/",
    summary: "Developing automated validation for control, monitoring, receiver, and signal-chain systems on a 26 m radio telescope.",
    highlights: [
      "Built Python and pytest validation for telescope control and monitoring APIs, including receiver power-level and RF signal-chain telemetry.",
      "Used typed API models, structured logging, and hardware-safe cleanup states to make test behaviour repeatable and reviewable.",
      "Verified changes through GitLab merge requests, CI pipelines, Linux, and Docker-based test environments.",
    ],
    tools: ["Python", "pytest", "GitLab CI", "Docker", "Linux", "RF systems"],
  },
  {
    period: "May 2025 — Aug 2025",
    title: "Communications Engineer Co-op",
    company: "NAV CANADA",
    group: "Aviation communications",
    location: "Ottawa, ON",
    caseStudy: "experience/nav-canada/",
    summary: "Designed and delivered a Raspberry Pi-based HF radio transmitter emulator for industrial communications testing.",
    highlights: [
      "Implemented dynamic frequency selection, AM mode switching, relay control, fault handling, and standby behaviour in modular Python.",
      "Engineered transistor level-shifting circuits between 3.3 V GPIO and 24 V MOXA industrial digital I/O.",
      "Validated timing and system behaviour with logs, GPIO tests, oscilloscope captures, and a traceable engineering test report.",
    ],
    tools: ["Python", "Raspberry Pi", "GPIO", "MOXA I/O", "Oscilloscope", "Circuit design"],
  },
];
