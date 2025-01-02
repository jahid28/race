import React, { forwardRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useCompoundBody } from "@react-three/cannon";

export const Wheel = forwardRef(
  ({ leftSide, c, radius = 0.5, ...props }, ref) => {
    const { nodes, materials } = useGLTF("/wheel.glb");

    useCompoundBody(
      () => ({
        collisionFilterGroup: 0,
        mass: 1,
        // material: 'wheel',
        shapes: [
          {
            args: [1, 1, 0.8, 8],
            // args: [4, 4, 2, 20],
            rotation: [0, 0, -Math.PI / 2],
            type: "Cylinder",
          },
        ],
        type: "Kinematic",
        // position: [0, -10, 0],
        // ...props,
      }),
      ref
    );

    // console.log("leftSide",leftSide)
    // const [scale, setScale] = React.useState(3.3);

    // useEffect(()=>{
    //   if (c) {
    //     // set color of wheel
    //     // materials.Material.color.set('red')
    //     // console.log('yooo')
    //     setScale(6);
    //   }
    // },[])

    return (
      <group ref={ref}>
         {/* <mesh rotation={[0,Math.PI/2,0]}>
          <cylinderGeometry args={[.1, .1, .1,6]} />
          <meshStandardMaterial color="hotpink" />
        </mesh> */}
              <group
                position={[leftSide ? .4:-.4, 0, 0]}
                // rotation={[0, 0, 0]}
                rotation={[0, leftSide ? Math.PI:0, -Math.PI/2]}
                scale={4}
              >
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["Wheel-FR_Rims_0_1"].geometry}
                  material={materials.body}
                />
                <mesh
                  castShadow
                  receiveShadow
                  geometry={nodes["Wheel-FR_Rims_0_2"].geometry}
                  material={materials.Tire}
                />
              </group>


      </group>
    );
  }
);

useGLTF.preload("/wheel.glb");
