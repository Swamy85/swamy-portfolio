import React from "react";
import Particles from "react-tsparticles";

function ParticlesBackground() {
  return (
    <Particles
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 50 },
          color: { value: "#2563eb" },
          links: { enable: true, color: "#2563eb" },
          move: { enable: true, speed: 1 },
          size: { value: 3 }
        }
      }}
    />
  );
}

export default ParticlesBackground;