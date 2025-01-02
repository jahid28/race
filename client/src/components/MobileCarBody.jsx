import React, { useRef, useEffect, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

export const MobileCarBody = forwardRef((props, ref) => {
  // export function Model(props) {
  const { nodes, materials } = useGLTF("/mobile_bugatti.glb");
  
  return (
    <group ref={ref} {...props} scale={[.228,.228,.228]} dispose={null}>
      <group position={[0,-6.7,0]} rotation={[-Math.PI / 2, 0, 0]} scale={0.142}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object000_Material011_0.geometry}
            material={materials['Material.011']}
            position={[0, 47.595, 63.404]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object001_Material013_0.geometry}
            material={materials['Material.013']}
            position={[0, 59.873, 32.925]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object002_Material015_0.geometry}
            material={materials['Material.015']}
            position={[0, 48.915, 3.385]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object003_Material012_0.geometry}
            material={materials['Material.012']}
            position={[0, 53.605, -65.849]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object004_Brsushed_Chrome_0.geometry}
            material={materials.Brsushed_Chrome}
            position={[0, 53.09, 0.532]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object005_Carbon_Fiber_0.geometry}
            material={materials.Carbon_Fiber}
            position={[0, 49.315, 0.283]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object006_Chrome_0.geometry}
            material={materials.Chrome}
            position={[0, 45.986, -152.027]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object007_Material004_0.geometry}
            material={materials['Material.004']}
            position={[0, 47.731, 182.194]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object008_xenon_0.geometry}
            material={materials.xenon}
            position={[0, 48.57, 186.845]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object009_Material017_0.geometry}
            material={materials['Material.017']}
            position={[0, 45.142, 186.241]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object010_LED_0.geometry}
            material={materials.material}
            position={[0, 48.532, 187.902]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object011_Material018_0.geometry}
            material={materials['Material.018']}
            position={[0, 48.579, 186.964]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object012_Material021_0.geometry}
            material={materials['Material.021']}
            position={[0, 55.998, -210.242]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object013_Material002_0.geometry}
            material={materials['Material.002']}
            position={[0, 69.585, -107.591]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object014_Material003_0.geometry}
            material={materials['Material.003']}
            position={[0, 84.336, 84.126]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object015_grils_0.geometry}
            material={materials.grils}
            position={[0, 42.369, 9.905]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object016_Material006_0.geometry}
            material={materials['Material.006']}
            position={[0, 84.311, 32.265]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object018_Material020_0.geometry}
            material={materials['Material.020']}
            position={[0, 56.115, -217.169]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.object019_Material016_0.geometry}
            material={materials['Material.016']}
            position={[0, 78.167, 56.636]}
            scale={100}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel_Material023_0.geometry}
            material={materials['Material.023']}
            position={[87.955, 18.964, 132.365]}
            rotation={[-Math.PI / 2, -0.034, 0]}
            scale={[1.329, 1.097, 1.097]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel001_Material023_0.geometry}
            material={materials['Material.023']}
            position={[-87.955, 18.964, 132.365]}
            rotation={[-Math.PI / 2, 0.034, -Math.PI]}
            scale={[1.329, 1.097, 1.097]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel002_Material027_0.geometry}
            material={materials['Material.027']}
            position={[-91.24, 28.575, 118.253]}
            rotation={[-Math.PI / 2, 0.034, -Math.PI]}
            scale={[1.329, 1.097, 1.097]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel003_Material027_0.geometry}
            material={materials['Material.027']}
            position={[91.24, 28.575, 146.476]}
            rotation={[-Math.PI / 2, -0.034, 0]}
            scale={[1.329, 1.097, 1.097]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel004_Material027_0.geometry}
            material={materials['Material.027']}
            position={[92.487, 30.772, -153.697]}
            rotation={[2.78, -0.034, 0]}
            scale={[1.347, 1.112, 1.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel005_Material027_0.geometry}
            material={materials['Material.027']}
            position={[-92.487, 30.647, -153.313]}
            rotation={[-1.518, 0.034, -Math.PI]}
            scale={[1.347, 1.112, 1.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel006_Material023_0.geometry}
            material={materials['Material.023']}
            position={[-89.158, 20.506, -139.754]}
            rotation={[-Math.PI / 2, 0.034, -Math.PI]}
            scale={[1.347, 1.112, 1.112]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Wheel007_Material023_0.geometry}
            material={materials['Material.023']}
            position={[89.158, 20.506, -139.754]}
            rotation={[-Math.PI / 2, -0.034, 0]}
            scale={[1.347, 1.112, 1.112]}
          />
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("/mobile_bugatti.glb");

//           <ContactShadows
//             renderOrder={2}
//             frames={1}
//             resolution={1024}
//             scale={20}
//             blur={1}
//             opacity={0.6}
//             far={100}
//           />
