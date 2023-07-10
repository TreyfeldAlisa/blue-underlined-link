import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { useGLTF, Center, OrbitControls, PresentationControls } from "@react-three/drei";
import { Suspense } from "react";

import styles from "./Scene.module.css";

const Model = () => {
    const group = useRef();
    const { nodes, materials } = useGLTF("/glb/WIP3D.gltf");
    return (
        <group ref={group} dispose={null}>
            <primitive
                object={nodes.Scene}
                scale={2.7}
                materials={materials.Material}
            />
        </group>
    );
};

useGLTF.preload("/glb/WIP3D.gltf");

export default function CanvasScene() {
    return (
        <div className={styles.container}>
            <Canvas
                className={styles.logo}
                camera={{ position: [2, 0, 12.25], fov: 16 }}
                shadows
                gl={{ preserveDrawingBuffer: true }}
                eventPrefix="client"
            >
                <directionalLight intensity={0.8} position={[9, 5, 10]} />
                <Suspense fallback={null}>
                    <PresentationControls
                        config={{ mass: 1, tension: 500 }}
                        snap={{ mass: 2, tension: 1500 }}
                        rotation={[0, 0.3, 0]}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                    >
                        <Center>
                            <Model rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.25, 0]} />
                        </Center>
                    </PresentationControls>
                </Suspense>
            </Canvas>
        </div>
    );
}
