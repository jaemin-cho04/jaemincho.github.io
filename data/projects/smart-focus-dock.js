export const smartFocusDockProject = {
  contributions: [
    {
      number: "01",
      title: "Direct hardware I/O",
      summary: "Mapped board switches and seven-segment displays directly into the ARM address space.",
      approach: [
        "Read phone-presence and reset inputs through volatile register pointers.",
        "Packed two seven-segment patterns into one register write for synchronized feedback.",
      ],
    },
    {
      number: "02",
      title: "Explicit state control",
      summary: "Modeled the session as idle, active, complete, and interrupted states.",
      approach: [
        "Kept transition rules centralized in a switch-driven finite-state machine.",
        "Separated display helpers from session logic so each state had clear output behavior.",
      ],
    },
    {
      number: "03",
      title: "Failure-aware behavior",
      summary: "Handled early phone removal and reset input during long-running feedback sequences.",
      approach: [
        "Rechecked presence after each blocking interval to catch mid-step removal.",
        "Added reset escape checks inside completion and interruption flash loops.",
      ],
    },
  ],
};

export default smartFocusDockProject;
