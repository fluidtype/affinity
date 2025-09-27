"use client";

import { ShaderGradient, ShaderGradientCanvas } from "@shadergradient/react";

export default function ShaderBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10">
      <ShaderGradientCanvas
        className="h-full w-full"
        style={{ width: "100%", height: "100%", backgroundColor: "#000000" }}
        pixelDensity={1}
        fov={45}
        pointerEvents="none"
      >
        <ShaderGradient
          control="props"
          animate="on"
          type="waterPlane"
          shader="defaults"
          cAzimuthAngle={180}
          cPolarAngle={80}
          cDistance={2.8}
          cameraZoom={9.1}
          color1="#9e0000"
          color2="#ca2048"
          color3="#f246cd"
          grain="on"
          lightType="3d"
          brightness={1}
          envPreset="city"
          range="enabled"
          rangeStart={0}
          rangeEnd={40}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          reflection={0.1}
          wireframe={false}
          uAmplitude={0}
          uDensity={1.5}
          uFrequency={0}
          uSpeed={0.3}
          uStrength={1.5}
          uTime={8}
        />
      </ShaderGradientCanvas>
    </div>
  );
}
