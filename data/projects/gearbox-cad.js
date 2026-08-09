export const gearboxCadProject = {
  contributions: [
    {
      number: "01",
      title: "Package the drivetrain",
      summary: "Translated the speed, torque, and envelope requirements into a manufacturable single-stage gearbox layout.",
      approach: [
        "Modelled the 32-tooth pinion, 200-tooth gear, keyed shafts, bearings, and split housing in SolidWorks.",
        "Validated the 3.625 in shaft centre distance and 4.50 in bearing span inside the required enclosure.",
      ],
    },
    {
      number: "02",
      title: "Make the assembly serviceable",
      summary: "Used straddle-mounted shafts and a split clamshell housing to support alignment, bearing installation, and maintenance.",
      approach: [
        "Checked shaft, bearing-seat, keyway, gear, and fastener interfaces at assembly level.",
        "Prepared the 2D manufacturing-drawing package and organized the design appendix.",
      ],
    },
    {
      number: "03",
      title: "Close the loop with analysis",
      summary: "Reconciled the CAD geometry with the team's gear, shaft, bearing, and deflection calculations.",
      approach: [
        "Kept the selected 0.625 in input and 0.750 in output shafts consistent with the verified fatigue design.",
        "Confirmed that the final assembly reflected the analyzed loading locations, reaction points, and off-the-shelf components.",
      ],
    },
  ],
};

export default gearboxCadProject;
