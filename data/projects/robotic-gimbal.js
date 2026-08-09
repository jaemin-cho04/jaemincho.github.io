export const roboticGimbalProject = {
  contributions: [
    {
      number: "01",
      title: "Control architecture",
      summary: "Separate ROS 2 nodes handled controller input, operating mode, motion selection, and motor commands.",
      approach: [
        "PS4 teleoperation provided direct driving control and an immediate manual override.",
        "A mode manager selected whether manual or autonomous commands were allowed to control the motors.",
      ],
    },
    {
      number: "02",
      title: "Perception and safety",
      summary: "Camera and ultrasonic sensing allowed the robot to react to people and nearby obstacles.",
      approach: [
        "Camera-based detection triggered and sustained a stop when a person was identified.",
        "Ultrasonic ranging prevented autonomous forward motion when an obstacle entered the safety threshold.",
      ],
    },
    {
      number: "03",
      title: "Mechanical integration",
      summary: "A custom two-axis gimbal packaged the camera and ultrasonic sensor into the mobile platform.",
      approach: [
        "Supports on both sides held the camera and ultrasonic sensor while leaving clearance for pan and tilt movement.",
        "A 250 mm camera cable followed a smooth S-curve to reduce connector strain during pan and tilt movement.",
      ],
    },
  ],
};

export default roboticGimbalProject;
