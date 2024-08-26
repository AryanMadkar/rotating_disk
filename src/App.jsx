import { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import * as THREE from "three";
import { Bloom,EffectComposer, ToneMapping } from "@react-three/postprocessing";
import Lax from "./Lax";
function App() {
  return (
    <div className="h-[100vh] w-[100vw] bg-black fixed">
      <Canvas camera={{ fov: 60 }}>
        <OrbitControls />
        <ambientLight intensity={3} />
        <Lax />
        <EffectComposer>
          <Bloom
            mipmapBlur={true}
            intensity={1.0}
            luminanceThreshold={0.9}
            luminanceSmoothing={0.025}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}

export default App;
