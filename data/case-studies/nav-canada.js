export const navCanadaCaseStudy = {
  workstreams: [
    {
      id: "control-software",
      number: "01",
      title: "Deterministic embedded control software",
      summary: "I translated transmitter requirements and logic tables into modular Python routines running on a Raspberry Pi 5.",
      challenge: "The emulator had to reproduce physical transmitter behaviour closely enough for engineers to test control and timing scenarios without relying on the production transmitter.",
      approach: [
        "Implemented frequency selection, AM switching, standby behaviour, relay control, and continuous input monitoring.",
        "Structured the software around explicit operating states, guarded transitions, and reusable hardware-control routines.",
        "Handled invalid combinations and asynchronous changes by returning outputs to a predictable safe state.",
      ],
      takeaway: "Reliable embedded control depends on making state, timing, and recovery behaviour explicit rather than implicit.",
    },
    {
      id: "industrial-interface",
      number: "02",
      title: "3.3 V to 24 V industrial I/O integration",
      summary: "I designed and tested the electrical interface between Raspberry Pi GPIO and the emulator's industrial control equipment.",
      challenge: "The Raspberry Pi's 3.3 V logic could not connect directly to the 24 V MOXA I/O environment. The interface needed safe voltage translation, clear signal behaviour, and protection for the controller.",
      approach: [
        "Built transistor-based signal-conditioning circuits with current limiting and isolation-aware design choices.",
        "Integrated relays, switches, indicators, remote I/O, and transmitter-control signals into the hardware prototype.",
        "Verified voltage levels and signal transitions with a digital multimeter and synchronized oscilloscope measurements.",
      ],
      takeaway: "Crossing a voltage boundary is a system-design problem: electrical limits, logic polarity, failure states, and software assumptions all have to agree.",
    },
    {
      id: "verification",
      number: "03",
      title: "Verification, traceability, and fault handling",
      summary: "I built a repeatable verification process covering software logic, electrical behaviour, timing, faults, and deployment readiness.",
      challenge: "A passing software test was not enough. The emulator needed evidence that its physical outputs, transition timing, indicators, and fallback behaviour matched the engineering requirements.",
      approach: [
        "Created more than 100 automated tests and over 50 system checks for normal, boundary, and fault scenarios.",
        "Correlated timestamped logs with oscilloscope captures and multimeter measurements to validate state transitions.",
        "Documented requirements traceability, defects, residual risks, compatibility, and deployment readiness for future engineers.",
      ],
      takeaway: "Good validation connects each requirement to observable evidence and leaves enough context for another engineer to reproduce the result.",
    },
  ],
};

export default navCanadaCaseStudy;
