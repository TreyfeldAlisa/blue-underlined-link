import { useGLTF } from '@react-three/drei';

export default function BulHero() {
  const { nodes, materials, scenes } = useGLTF(
      "/glb/BUL-HERO-3D.glb",
  );
  return (
      <group>
          <mesh
              geometry={nodes.Текст002?.geometry}
              material={materials.Материал}
              position={[-0.01, -0.23, 0]}
              rotation={[1.2, -0.06, 0.3]}
              translation={[-0.012108083814382553, -0.23259761929512024, 0]}
          />
          <mesh
              geometry={nodes.Плоскость?.geometry}
              material={materials.Glass_2}
              position={[0, 0, 1]}
              rotation={[Math.PI / 2, 0, 0]}
              scale={1.65}
              translation={(0, 0, 1.0012096166610718)}
          />
          <mesh
              geometry={nodes.Текст007?.geometry}
              material={materials.Материал}
              position={[0.78, -0.06, 0]}
              rotation={[1.81, -0.05, -0.38]}
              translation={(0.7765274047851562, -0.06012484058737755, 0)}
          />
          <mesh
              geometry={nodes.Текст008?.geometry}
              material={materials.Материал}
              position={[0, -0.23, 0]}
              rotation={[1.2, -0.06, 0.3]}
              translation={(0.0011816024780273438, -0.23259761929512024, 0)}
          />
          <mesh
              geometry={nodes.Текст009?.geometry}
              material={materials.Материал}
              position={[-0.59, 0.04, 0.05]}
              rotation={[1.9, -0.12, -0.55]}
              translation={(-0.5891692638397217, 0.04309894144535065, 0.04822596535086632)}
          />
      </group>
  );
}

useGLTF.preload(
    "/glb/BUL-HERO-3D.glb",
);
