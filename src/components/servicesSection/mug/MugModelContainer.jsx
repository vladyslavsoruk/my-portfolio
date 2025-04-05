import { Canvas, useFrame } from "@react-three/fiber";
import { MugModel } from "./MugModel";
import { Suspense, useRef } from "react";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

function MugModelContainer() {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="studio" intensity={0.5}>
          <MugModel />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera
          position={[-3 * Math.PI, 1, 1]}
          zoom={0.8}
          makeDefault
        />
      </Suspense>
    </Canvas>
  );
}

export default MugModelContainer;
