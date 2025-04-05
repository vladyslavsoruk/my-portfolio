import { Canvas } from "@react-three/fiber";
import { PlaystationModel } from "./PlaystationModel";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

function PlaystationModelContainer() {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="studio" intensity={0.5}>
          <PlaystationModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 1, 1]} zoom={0.8} makeDefault />
      </Suspense>
    </Canvas>
  );
}

export default PlaystationModelContainer;
