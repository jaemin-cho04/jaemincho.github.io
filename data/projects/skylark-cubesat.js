export const skylarkCubesatProject = {
  contributions: [
    {
      number: "01",
      title: "Verify temperature limits",
      summary: "Checked the remote receiver electronics against the expected climates at three Canadian station locations.",
      approach: [
        "Grouped the parts list into 21 component categories and reviewed manufacturer operating limits.",
        "Found a system range of -30 °C to 85 °C, covering the expected -29 °C to 26 °C station envelope.",
      ],
    },
    {
      number: "02",
      title: "Model daily energy use",
      summary: "Converted the receiver's peak, transmit/receive, and idle states into a 24-hour load profile.",
      approach: [
        "Calculated 252.33 Wh/day from an 18 W peak, 13 W active, and 10 W idle duty cycle.",
        "Compared that demand with a 200 W solar panel and a 12.8 V, 100 Ah battery.",
      ],
    },
    {
      number: "03",
      title: "Expose the worst-case gap",
      summary: "Separated normal winter charging from a complete snow-cover blackout instead of hiding both behind one pass/fail result.",
      approach: [
        "Estimated 360 Wh/day of net winter generation in Churchill after a 25% snow and low-angle penalty.",
        "Calculated only 4.31 days of zero-solar autonomy after cold derating, short of the seven-day requirement.",
      ],
    },
  ],
};

export default skylarkCubesatProject;
