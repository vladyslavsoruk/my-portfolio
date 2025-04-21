import { MeshDistortMaterial, Sphere } from "@react-three/drei";
function Shape() {
  return (
    <>
      <Sphere args={[1, 100, 200]} scale={2.4}>
        <MeshDistortMaterial
          color="#DB8B9B"
          attach="material"
          distort={0.3}
          speed={1}
        />
      </Sphere>
      <ambientLight intensity={1} />
      <directionalLight position={[1, 2, 3]} />
    </>
  );
}

export default Shape;
