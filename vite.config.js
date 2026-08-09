import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  base: "./",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        nrcDrao: resolve(import.meta.dirname, "experience/nrc-drao/index.html"),
        navCanada: resolve(import.meta.dirname, "experience/nav-canada/index.html"),
        roboticGimbal: resolve(import.meta.dirname, "projects/robotic-gimbal/index.html"),
        autonomousScavenger: resolve(import.meta.dirname, "projects/autonomous-scavenger/index.html"),
        timeSeriesForecasting: resolve(import.meta.dirname, "projects/time-series-forecasting/index.html"),
        smartFocusDock: resolve(import.meta.dirname, "projects/smart-focus-dock/index.html"),
        skylarkCubesat: resolve(import.meta.dirname, "projects/skylark-cubesat/index.html"),
        gearboxCad: resolve(import.meta.dirname, "projects/gearbox-cad/index.html"),
      },
    },
  },
});
