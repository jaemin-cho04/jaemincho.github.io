export const autonomousScavengerProject = {
  contributions: [
    {
      number: "01",
      title: "Navigate",
      summary: "The two-wheel drivetrain explored the arena and returned objects to the base in timed transport cycles.",
      approach: [
        "Thirty-second outbound and return legs repeated in new directions until the mission timer expired.",
        "Ultrasonic ranging, encoder feedback, and IR communication supported navigation and base-station approach.",
      ],
    },
    {
      number: "02",
      title: "Collect and transport",
      summary: "A horizontal rotating brush continuously swept objects into a servo-actuated bucket.",
      approach: [
        "The intake ran while the robot moved, avoiding a separate stop-and-grab sequence.",
        "At the base station, synchronized servo motion dumped the collected objects into the sorter.",
      ],
    },
    {
      number: "03",
      title: "Classify and sort",
      summary: "The base station identified object colour and routed each item through a rotating Pac-Man mechanism.",
      approach: [
        "Normalized TCS34725 ratios classified green when its channel exceeded both red and blue by 0.03.",
        "Smooth servo steps directed each object toward the green or non-green output.",
      ],
    },
  ],
};

export default autonomousScavengerProject;
