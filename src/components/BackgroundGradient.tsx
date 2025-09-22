"use client";

import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import * as reactSpring from "@react-spring/three";

void reactSpring;

// exact URL with your params (commas -> dots)
const URL =
  "https://www.shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.1&cAzimuthAngle=180&cDistance=3.9&cPolarAngle=115&cameraZoom=1&color1=%23ff1500&color2=%23000000&color3=%23000000&envPreset=city&fov=45&gizmoHelper=hide&grain=on&lightType=3d&pixelDensity=1&positionX=-0.5&positionY=0.1&positionZ=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=235&shader=defaults&type=plane&uDensity=1.1&uSpeed=0.1&uStrength=2.4&range=enabled&rangeStart=0&rangeEnd=40&wireframe=false";

export default function BackgroundGradient() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" style={{ width: "100%", height: "100%" }}>
      <ShaderGradientCanvas style={{ width: "100%", height: "100%" }} dpr={[1, 1.5]}>
        {/* control via URL (exact look) */}
        <ShaderGradient control="query" urlString={URL} />
      </ShaderGradientCanvas>
    </div>
  );
}
