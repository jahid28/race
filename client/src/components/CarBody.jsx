import React, { useRef, useEffect, forwardRef } from "react";
import { useGLTF } from "@react-three/drei";
// import * as THREE from "three";

export const CarBody = forwardRef((props, ref) => {
  // export function Model(props) {
  const { nodes, materials } = useGLTF("/car14.glb");
  // const meshRef = useRef();
  // const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
  // useEffect(() => {
  //   if (meshRef.current) {
  //     // Map state ("on" or "off") to emissiveIntensity
  //     meshRef.current.material.emissiveIntensity =
  //       props.brake === true ? 100 : 0;
  //   }
  // }, [props.brake]); // Update whenever state changes

  return (
    <group ref={ref}>
      <group position={[0, -1.9, 0]} {...props} dispose={null}>
        <group
          position={[0, -0.091, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={2.932}
        >
          <group scale={1.12}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_40.geometry}
              material={materials.glass_inside1}
            />
            <mesh
              // ref={meshRef}
              castShadow
              receiveShadow
              geometry={nodes.Object_49.geometry}
              material={materials.rear_glass}
              // onUpdate={(self) => {
              //   // if(props.brake){

              //   // Modify the material properties directly
              //   self.material.emissive = new THREE.Color(0xff0500); // Orange emissive color
              //   self.material.emissiveIntensity = 0; // Increase intensity to make it more glowy
              //   // }
              // }}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_52.geometry}
              material={materials.misc}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_55.geometry}
              material={materials.spoiler_down}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_61.geometry}
              material={materials.Badge_Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_64.geometry}
              material={materials.Carbon1_Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_67.geometry}
              material={materials.Coloured_Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_70.geometry}
              material={materials.Coloured_Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_73.geometry}
              material={materials.Coloured_Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_85.geometry}
              material={materials.Light_Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_91.geometry}
              material={materials.Glass_Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_10.geometry}
              material={materials.Base_Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_97.geometry}
              material={materials.glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_100.geometry}
              material={materials.black}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_106.geometry}
              material={materials.glass}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_13.geometry}
              material={materials.Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_130.geometry}
              material={materials.black2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_142.geometry}
              material={materials.body}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_151.geometry}
              material={materials.body2}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_160.geometry}
              material={materials.chrome3}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_163.geometry}
              material={materials.glass_inside}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_166.geometry}
              material={materials.metal_int}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_169.geometry}
              material={materials.metal_int}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_172.geometry}
              material={materials.mirrors}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_19.geometry}
              material={materials.EXT_PLATE_plastic}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_193.geometry}
              material={materials.tacho}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_196.geometry}
              material={materials.tacho_red}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_22.geometry}
              material={materials.Glass_frontlights}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_25.geometry}
              material={materials.Grille2_Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Object_31.geometry}
              material={materials.emblem}
            />
          </group>
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("/car14.glb");

//           <ContactShadows
//             renderOrder={2}
//             frames={1}
//             resolution={1024}
//             scale={20}
//             blur={1}
//             opacity={0.6}
//             far={100}
//           />
