"use client";

import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const desktopOptions = {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 900 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.25, random: true },
    size: { value: 2, random: true },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 1.8,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
  },
  retina_detect: true,
};

const mobileOptions = {
  particles: {
    number: { value: 40, density: { enable: true, value_area: 900 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.2, random: true },
    size: { value: 1.8, random: true },
    line_linked: { enable: false },
    move: {
      enable: true,
      speed: 1.4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    events: { onhover: { enable: false }, onclick: { enable: false }, resize: true },
  },
  retina_detect: true,
};

export default function HeroParticles() {
  const [options, setOptions] = useState(desktopOptions);

  useEffect(() => {
    const update = () => {
      setOptions(window.innerWidth < 768 ? mobileOptions : desktopOptions);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const init = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="hero-particles"
      init={init}
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      options={options as any}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  );
}

