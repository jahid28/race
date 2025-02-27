import { useState, Suspense, lazy, useEffect, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
  Lightformer,
  PerspectiveCamera,
  Sphere,
  SpotLight,
  Html,
} from "@react-three/drei";
// import { Perf } from "r3f-perf";
import Loading from "./Loading";
import {
  Physics,
  Debug,
  usePlane,
  useCompoundBody,
  useBox,
} from "@react-three/cannon";
import { Car } from "./Car";
import { Track } from "./Track";
// import { EffectComposer, Bloom } from "@react-three/postprocessing";

function Scene(props) {
  return (
    <Canvas shadows={true}>
      <Suspense fallback={<Loading />}>
        {/* <Perf position="bottom-left" /> */}
        {/* <axesHelper args={[50]} /> */}
        <OrbitControls />

        {/* <color attach="background" args={["#00FF00"]} /> */}

        <ambientLight intensity={1} />
        {/* <fog attach="fog" args={["#7d7c7c", -300, 200]} /> */}

        {/* <Environment resolution={512} preset="city">
            <Lightformer
              form="ring"
              color="white"
              intensity={10}
              scale={2}
              position={[0, 4, 0]}
            //   onUpdate={(self) => self.lookAt(0, 0, 0)}
            />
            <Lightformer
              form="ring"
              color="red"
              intensity={10}
              scale={1}
              position={[0, 3.2, -4]}
            //   onUpdate={(self) => self.lookAt(0, 0, 0)}
            />
          </Environment> */}

        <Environment preset="city" />
        {/* <EffectComposer>
        <Bloom intensity={0.01} luminanceThreshold={0} luminanceSmoothing={.9} />
      </EffectComposer> */}

        <Physics
          step={1 / 120}
          gravity={[0, -9.8, 0]}
          broadphase="SAP"
          iterations={6}
          defaultContactMaterial={{
            contactEquationRelaxation: 4,
            friction: 1,
            restitution: 0.2,
          }}
        >
          {/* <Debug a scale={1} color="black"> */}
          <Plane rotation={[-Math.PI / 2, 0, 0]} />
          <Car play={props.play} />
          <Track />
          {/* </Debug> */}
        </Physics>
      </Suspense>
    </Canvas>
  );
}

export default Scene;

function Plane(props) {
  const [ref] = usePlane(() => ({ type: "Static", ...props }));
  return null;
}