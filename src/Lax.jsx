import React, { useRef } from "react";
import { OrbitControls, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Lax = () => {
  let text = useTexture("./mainimg.png");
  text.needsUpdate = true;

  let cyl = useRef(null);
  useFrame((state, delta) => {
    cyl.current.rotation.y += delta;
  });
  return (
    <mesh ref={cyl} rotation={[0, 1, 0.2]}>
      <cylinderGeometry args={[2.2, 2.2, 1, 60, 60, true]} />
      <meshStandardMaterial map={text} transparent side={THREE.DoubleSide} />
    </mesh>
  );
};

export default Lax;
