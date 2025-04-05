import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function MugModel(props) {
  const { nodes, materials } = useGLTF("/nescafe_mug.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.caneca_low_lambert1_0.geometry}
        material={materials.lambert1}
        scale={0.01}
      />
    </group>
  );
}

useGLTF.preload("/nescafe_mug.glb");
