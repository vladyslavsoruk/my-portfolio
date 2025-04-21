import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
function ComputerModelContainer() {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="studio" intensity={0.5}>
          <ComputerModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1, 1, 1]} zoom={0.5} makeDefault />
      </Suspense>
    </Canvas>
  );
}

export default ComputerModelContainer;
