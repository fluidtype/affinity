// src/components/BackgroundGradient.tsx
"use client";

import { useEffect, useState } from "react";
import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import * as reactSpring from "@react-spring/three"; // peer richiesto
import { useIsMobileSafari } from "@/lib/useIsMobileSafari";

void reactSpring;

// Preset esatto (waterPlane) — decimali con il punto
const URL =
  "https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=2.4&cPolarAngle=95&cameraZoom=1&color1=%23ff6a1a&color2=%23ba0000&color3=%23fd172a&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=-2.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=225&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=1.8&uFrequency=5.5&uSpeed=0.2&uStrength=3&uTime=0.2&wireframe=false";

function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);
    updatePreference();

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }

    mediaQuery.addListener(handleChange);
    return () => {
      mediaQuery.removeListener(handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

export default function BackgroundGradient() {
  const isMobileSafari = useIsMobileSafari();
  const prefersReducedMotion = usePrefersReducedMotion();
  const pixelDensity = prefersReducedMotion ? 1 : 1.5;

  if (isMobileSafari) {
    return (
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-[#050506]" />
        <div className="absolute left-1/2 top-[-20%] h-[60%] w-[120%] -translate-x-1/2 rounded-[55%] bg-[radial-gradient(circle_at_top,rgba(255,122,122,0.45),rgba(255,122,122,0))] blur-3xl opacity-60" />
        <div className="absolute left-1/2 top-1/2 h-[70%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-[55%] bg-[radial-gradient(circle,rgba(255,45,45,0.35),rgba(255,45,45,0))] blur-[140px] opacity-[0.55]" />
        <div className="absolute inset-x-0 bottom-[-25%] h-[55%] rounded-[50%] bg-[radial-gradient(circle_at_bottom,rgba(255,122,122,0.3),rgba(255,122,122,0))] blur-[160px] opacity-60" />
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{
        width: "100%",
        height: "100%",
        willChange: "transform, opacity",
        contain: "layout paint size",
      }}
    >
      <ShaderGradientCanvas
        style={{ width: "100%", height: "100%" }}
        pixelDensity={pixelDensity}
      >
        {/* Controllo via URL per look identico */}
        <ShaderGradient control="query" urlString={URL} />
      </ShaderGradientCanvas>
    </div>
  );
}