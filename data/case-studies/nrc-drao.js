export const nrcDraoCaseStudy = {
  workstreams: [
    {
      id: "receiver",
      number: "01",
      shortTitle: "Receiver validation",
      title: "Receiver and RF system validation",
      summary: "I built tests that connected API commands to receiver state, cryogenic measurements, amplifier behaviour, and RF power telemetry.",
      challenge: "An accepted command did not prove that the physical receiver entered the intended state. Tests also needed to respect amplifier sequencing and leave equipment safe after failures.",
      approach: [
        "Validated operator state against internal equipment mode, temperature, pressure, amplifier state, and measured power.",
        "Kept hardware-changing sequences explicit and guaranteed fail-safe receiver teardown after incomplete tests.",
        "Tested repeatable calibration-source response across two RF paths using sampled power statistics.",
      ],
      takeaway: "A hardware test is also an operating procedure: the physical sequence, evidence, and recovery behaviour must all be reviewable.",
    },
    {
      id: "motion",
      number: "02",
      shortTitle: "Motion control",
      title: "Motion control and position tracking",
      summary: "I validated slew, scan, velocity, position tracking, and stopping behaviour using safe commands and live telescope telemetry.",
      challenge: "A tracking test reported excessive pointing error even though the telescope appeared to behave normally. The validation compared different coordinate frames and timestamps.",
      approach: [
        "Checked control state and limits, generated safe targets, collected time-series telemetry, and enforced stop teardown.",
        "Root-caused the false failure by transforming the target into the telescope's controlled frame at each sample timestamp and handling angular wraparound.",
        "Used steady-state motion statistics and diagnostic plots instead of relying on a single reported sample.",
      ],
      takeaway: "A test can be logically consistent yet physically wrong when coordinate-frame or timing assumptions are incorrect.",
    },
    {
      id: "backend",
      number: "03",
      shortTitle: "Data acquisition",
      title: "DAQ and spectrum diagnostics",
      summary: "I built an end-to-end workflow from scheduling an observation to validating its recorded scientific data and spectrum quality.",
      challenge: "A completed recording was not sufficient evidence. The workflow had to handle asynchronous services, retrieve a valid scientific file, inspect multidimensional data, and explain spectrum failures clearly.",
      approach: [
        "Polled recording and publication state, retrieved the output, and validated its HDF5/SDHDF hierarchy, dimensions, products, and metadata.",
        "Inspected receiver spectra against an editable reference model and generated PASS/FAIL plots showing quantitative violations.",
        "Shared long-running observations across independent pytest checks and surfaced measured evidence in HTML reports.",
      ],
      takeaway: "Good diagnostics show where and by how much the data diverged, not only that an assertion failed.",
    },
  ],
};

export default nrcDraoCaseStudy;
