import {
  useBox,
  useRaycastVehicle,
  useCompoundBody,
} from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { Wheel } from "./Wheel";
import { CarBody } from "./CarBody";
import { PerspectiveCamera, useGLTF, Html } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import { wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4 } from "../lib/exports";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { endFunc, timeFunc,restartFunc } from "../../redux/actions";
import useStore from "../../zustand/useStore";
import {
  FaCaretSquareUp,
  FaCaretSquareDown,
  FaCaretSquareLeft,
  FaCaretSquareRight,
  FaCamera,
} from "react-icons/fa";
import axios from "axios";
import { MobileCarBody } from "./MobileCarBody";
import {
  Barrier1,
  Barrier2,
  Barrier3,
  Barrier4,
  Barrier5,
  Barrier6,
  Barrier7,
  Barrier8,
  Barrier9,
  Barrier10,
  Barrier11,
  Barrier12,
  Barrier13,
} from "../lib/exports";
export function Car(props) {
  // const dispatch = useDispatch();
  // const restart = useSelector((state) => state.reducer1.restart);
  // const end = useSelector((state) => state.reducer1.end);.
  const name = useStore((state) => state.name);
  const end = useStore((state) => state.end);
  const restart = useStore((state) => state.restart);
  const endFunc = useStore((state) => state.endFunc);

  const [start, setStart] = useState(false);
  const [cameraAngle, setCameraAngle] = useState(0);
  // const [brake, setBrake] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [collided, setCollided] = useState(0);
  const [cp1, setCP1] = useState(false);
  const [cp2, setCP2] = useState(false);
  const [cp3, setCP3] = useState(false);
  const [cp4, setCP4] = useState(false);
  // const [speed, setSpeed] = useState(0);
  const speedRef = useRef(null);

  // const [end, setEnd] = useState(false);

  const wheels = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const cameraRef = useRef();
  const vehiclePosition = useRef(new THREE.Vector3());
  const smoothedPosition = useRef(new THREE.Vector3());
  const vehicleQuaternion = useRef(new THREE.Quaternion());
  const smoothedQuaternion = useRef(new THREE.Quaternion());
  const keysPressed = useRef(new Set());
  const htmlRef = useRef();


  const [chassisBody, chassisApi] = useCompoundBody(
    () => ({
      allowSleep: false,
      mass: 500,
      position: [-127, 2, -95],
      rotation: [0, Math.PI, 0],
      material: { friction: 0.1, restitution: 0.02 },
      // onCollide:(()=>{console.log("oops")}),
      shapes: [
        {
          type: "Box",
          args: [6.5, 3.4, 7.8],
        },
        {
          type: "Cylinder",
          args: [2.2, 2.2, 3.4, 40],
          position: [0, 0, 5.2],
        },
        {
          type: "Cylinder",
          args: [1.5, 1.5, 3.4, 40],
          position: [1.8, 0, 5.2],
        },
        {
          type: "Cylinder",
          args: [1.5, 1.5, 3.4, 40],
          position: [-1.8, 0, 5.2],
        },

        {
          type: "Cylinder",
          args: [2.2, 2.2, 3.4, 40],
          position: [0, 0, -5.3],
        },
        {
          type: "Cylinder",
          args: [1.5, 1.5, 3.4, 40],
          position: [1.8, 0, -5.4],
        },
        {
          type: "Cylinder",
          args: [1.5, 1.5, 3.4, 40],
          position: [-1.8, 0, -5.4],
        },
      ],
    }),
    useRef(null)
  );

  const [vehicle, vehicleApi] = useRaycastVehicle(
    () => ({
      chassisBody,
      wheelInfos: [wheelInfo1, wheelInfo2, wheelInfo3, wheelInfo4],
      wheels,
    }),
    useRef(null)
  );

  useEffect(() => {
    const checkTouchDevice = () => {
      if ("maxTouchPoints" in navigator && navigator.maxTouchPoints > 0) {
        return true; // Device supports touch
      }
      if ("msMaxTouchPoints" in navigator && navigator.msMaxTouchPoints > 0) {
        return true; // Device supports touch (Microsoft devices)
      }
      if (
        "ontouchstart" in window ||
        (window.DocumentTouch && document instanceof window.DocumentTouch)
      ) {
        return true; // Traditional touch detection
      }
      return false; // Not a touch device
    };

    setIsTouchDevice(checkTouchDevice());
  }, []);

  useEffect(() => {
    // console.log('oo',chassisBody.current,speedRef.current)
    // const interval = setInterval(() => {
    if (chassisBody.current && !isTouchDevice) {
      // let velocity = new THREE.Vector3();
      chassisApi.velocity.subscribe((v) => {
        // velocity.set(...v);
        const horizontalSpeed = (
          1.4 * Math.sqrt(v[0] ** 2 + v[2] ** 2)
        ).toFixed(1);
        if (speedRef.current) {
          speedRef.current.innerText = `${horizontalSpeed} km/h`;
        }
      });
      // console.log("v", velocity);
    }
    // }, 300);
    // return () => clearInterval(interval); // Cleanup interval
  }, [isTouchDevice]);

  // const geometry = nodes.BezierCurveMain.geometry; // Access geometry of the first child

  // const positions = geometry.attributes.position.array; // All vertex positions

  // const worldPositions = [];
  // const matrixWorld = nodes.BezierCurveMain.matrixWorld;
  // for (let i = 0; i < positions.length; i += 24) {
  //   const localPosition = new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]);
  //   const worldPosition = localPosition.applyMatrix4(matrixWorld); // Transform to world space
  //   worldPositions.push([worldPosition.x, worldPosition.y, worldPosition.z]);
  // }
  // const cubePositions = worldPositions;

  // useCompoundBody(() => ({
  //   shapes: cubePositions.map((pos) => ({
  //     type: 'Box',
  //     args: [0.1, 1, 0.1],
  //     position: pos,
  //   })),
  // }));


  useEffect(() => {
    const handleKeyDown = (event) => {
      keysPressed.current.add(event.key.toLowerCase());

      if (start) {
        if (event.key.toLowerCase() === "1") {
          setCameraAngle(1);
        }
        if (event.key.toLowerCase() === "2") {
          setCameraAngle(2);
        }
        if (event.key.toLowerCase() === "3") {
          setCameraAngle(3);
        }
        if (event.key.toLowerCase() === "4") {
          setCameraAngle(4);
        }
      }

      //   if (event.key.toLowerCase() === " ") {
      //     // for (let b = 2; b < 4; b++) {
      //     vehicleApi.setBrake(90, 0);
      //     vehicleApi.setBrake(90, 1);
      //     // vehicleApi.setBrake(80, 2);
      //     // vehicleApi.setBrake(80, 3);
      //     // vehicleApi.applyEngineForce(0, 0);
      //     // vehicleApi.applyEngineForce(0, 1);
      //     // vehicleApi.applyEngineForce(0, 2);
      //     // vehicleApi.applyEngineForce(0, 3);
      //     // }
      //   }
    };

    const handleKeyUp = (event) => {
      keysPressed.current.delete(event.key.toLowerCase());
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [start]);

  useEffect(() => {
    const unsubscribePosition = chassisApi.position.subscribe((position) => {
      vehiclePosition.current.set(position[0], position[1], position[2]);
    });

    const unsubscribeQuaternion = chassisApi.quaternion.subscribe(
      (quaternion) => {
        vehicleQuaternion.current.set(
          quaternion[0],
          quaternion[1],
          quaternion[2],
          quaternion[3]
        );
      }
    );

    return () => {
      unsubscribePosition();
      unsubscribeQuaternion();
    };
  }, [chassisApi]);

  // const smoothedCameraPosition = new THREE.Vector3();
  // const smoothedCameraTarget = new THREE.Vector3();
  // const target = useRef();

  useFrame((_, delta) => {
    if (start) {
      if (keysPressed.current.has(" ")) {
        vehicleApi.setBrake(90, 2);
        vehicleApi.setBrake(90, 3);
        // setBrake(true);
      } else {
        vehicleApi.setBrake(0, 2);
        vehicleApi.setBrake(0, 3);
        // setBrake(false);
      }

      if (
        keysPressed.current.has("w") ||
        keysPressed.current.has("s") ||
        keysPressed.current.has("arrowup") ||
        keysPressed.current.has("arrowdown")
      ) {
        if (
          keysPressed.current.has("w") ||
          keysPressed.current.has("arrowup")
        ) {
          vehicleApi.applyEngineForce(-3000, 2);
          vehicleApi.applyEngineForce(-3000, 3);
        }
        if (
          keysPressed.current.has("s") ||
          keysPressed.current.has("arrowdown")
        ) {
          vehicleApi.applyEngineForce(1500, 2);
          vehicleApi.applyEngineForce(1500, 3);
        }
      } else {
        vehicleApi.applyEngineForce(0, 2);
        vehicleApi.applyEngineForce(0, 3);
      }

      if (
        keysPressed.current.has("a") ||
        keysPressed.current.has("d") ||
        keysPressed.current.has("arrowleft") ||
        keysPressed.current.has("arrowright")
      ) {
        if (
          keysPressed.current.has("a") ||
          keysPressed.current.has("arrowleft")
        ) {
          vehicleApi.setSteeringValue(0.5, 0);
          vehicleApi.setSteeringValue(0.5, 1);
        }
        if (
          keysPressed.current.has("d") ||
          keysPressed.current.has("arrowright")
        ) {
          vehicleApi.setSteeringValue(-0.5, 0);
          vehicleApi.setSteeringValue(-0.5, 1);
        }
      } else {
        vehicleApi.setSteeringValue(0, 0);
        vehicleApi.setSteeringValue(0, 1);
      }
    } else {
      vehicleApi.setBrake(90, 2);
      vehicleApi.setBrake(90, 3);
      //   setBrake(true);
    }

    if (cameraRef.current) {
      // TPP camera
      if (cameraAngle === 0) {
        cameraRef.current.lookAt(vehiclePosition.current);
      }
      if (cameraAngle === 1) {
        const offset = new THREE.Vector3(0, 8, -25).applyQuaternion(
          vehicleQuaternion.current
        );
        cameraRef.current.position.copy(vehiclePosition.current).add(offset);
        cameraRef.current.lookAt(vehiclePosition.current);
        // if(htmlRef.current){
        //   htmlRef.current.position=vehiclePosition.current;
        // }
      }
      // tyre camera
      else if (cameraAngle === 2) {
        const offset = new THREE.Vector3(-6, 1, -3).applyQuaternion(
          vehicleQuaternion.current
        );
        cameraRef.current.position.copy(vehiclePosition.current).add(offset);
        const forward = new THREE.Vector3(6, 1, 20); // Z-axis points forward in vehicle's local space
        forward.applyQuaternion(vehicleQuaternion.current);
        const target = vehiclePosition.current.clone().add(forward);
        cameraRef.current.lookAt(target);
      } else if (cameraAngle === 3) {
        // opposite camera
        const offset = new THREE.Vector3(6, 1, 16).applyQuaternion(
          vehicleQuaternion.current
        );
        cameraRef.current.position.copy(vehiclePosition.current).add(offset);
        const forward = new THREE.Vector3(-6, 1, -10); // Z-axis points forward in vehicle's local space
        forward.applyQuaternion(vehicleQuaternion.current);
        const target = vehiclePosition.current.clone().add(forward);
        cameraRef.current.lookAt(target);
      }

      // up camera
      else if (cameraAngle === 4) {
        const offset = new THREE.Vector3(0, 80, -45).applyQuaternion(
          vehicleQuaternion.current
        );
        cameraRef.current.position.copy(vehiclePosition.current).add(offset);
        // const forward = new THREE.Vector3(0, 0, 0); // Z-axis points forward in vehicle's local space
        // forward.applyQuaternion(vehicleQuaternion.current);
        // const target = vehiclePosition.current.clone().add(forward);
        // cameraRef.current.lookAt(target);
        cameraRef.current.lookAt(vehiclePosition.current);
      }
    }
  });

  // const wall = useCompoundBody(() => ({
  //   // mass: 0,
  //   position: [-16, 2, 156],
  //   shapes: [
  //     {
  //       type: "Box",
  //       args: [452, 1, 1],
  //     },
  //     {
  //       type: "Cylinder",
  //       args: [23, 23, 5,26],
  //       position: [-232, 0, -23],
  //     },
  //     {
  //       type: "Box",
  //       args: [280, 1, 1],
  //       position: [-89, 0, -47.5],
  //     },
  //   ],
  // }));

  const [checkPoint1, checkPoint1API] = useBox(() => ({
    isTrigger: true,
    // mass: 1,
    position: [-122, 10, -160],
    args: [25, 20, 1],

    onCollide: (e) => {
      setCP1(true);
    },
  }));
  const [checkPoint2, checkPoint2API] = useBox(() => ({
    isTrigger: true,
    // mass: 1,
    rotation: [0, Math.PI / 2, 0],
    position: [200, 10, -50],
    args: [25, 20, 1],

    onCollide: (e) => {
      setCP2(true);
    },
  }));
  const [checkPoint3, checkPoint3API] = useBox(() => ({
    isTrigger: true,
    // mass: 1,
    rotation: [0, Math.PI / 2, 0],
    position: [50, 10, 193],
    args: [25, 20, 1],

    onCollide: (e) => {
      setCP3(true);
    },
  }));
  const [checkPoint4, checkPoint4API] = useBox(() => ({
    isTrigger: true,
    // mass: 1,
    position: [-122, 10, 50],
    args: [25, 20, 1],

    onCollide: (e) => {
      setCP4(true);
    },
  }));
  const [finishTrigger, finishTriggerAPI] = useBox(() => ({
    isTrigger: true,
    // mass: 1,
    position: [-122, 10, -108],
    args: [25, 20, 1],

    onCollide: (e) => {
      // endFunc(true);
      setCollided((prev) => prev + 1);
    },
  }));

  // const addRecord = async (time) => {
  //   // e.preventDefault();

  //   try {
  //     // if (!captchaValue) {
  //     //   toast.error("Fill the Captcha")

  //     // }
  //     // else {
  //     await axios
  //       .post(`${import.meta.env.VITE_APP_SERVER_URL}/addRecord`, {
  //         name,
  //         time,
  //       })
  //       .then((res) => {
  //         // if (res.success) {
  //         console.log(res.data.msg);
  //         // }
  //       })
  //   } catch (e) {
  //     // }

  //     console.log("Somethig went wrong in trycatch!",e);
  //   }
  // };

  useEffect(() => {
    // console.log("effect")
    if (props.play) {
      setTimeout(() => {
        setStartTime(new Date().getTime());
        setStart(true);
      }, 3000);
      setCameraAngle(1);
    }
    if (cameraRef.current && !props.play) {
      gsap.to(cameraRef.current.position, {
        x: -127,
        y: 4,
        z: -115,
        duration: 6,
        ease: "power2.inOut",
        // onUpdate: () => {
        //   cameraRef.current.lookAt(0,10,0);
        // },
      });
    }
  }, [cameraRef.current, props.play]);

  const timeFunc = useStore((state) => state.timeFunc);

  useEffect(() => {
    if (collided && cp1 && cp2 && cp3 && cp4) {
      const endTime = new Date().getTime() - startTime;
      // addRecord(endTime);
      timeFunc(endTime);
      setStart(false);

      // setTimeout(() => {
      endFunc(true);
      // }, 3000);
    }
  }, [collided]);

  useEffect(() => {
    if (!end) {
      setCollided(false);
    }
  }, [end]);

  useEffect(() => {
    // console.log("restart");
    if (restart) {
      chassisApi.position.set(-127, 2, -95);
      chassisApi.rotation.set(0, Math.PI, 0);
      chassisApi.velocity.set(0, 0, 0);
      chassisApi.angularVelocity.set(0, 0, 0);
      vehicleApi.setBrake(90, 2);
      vehicleApi.setBrake(90, 3);
      vehicleApi.applyEngineForce(0, 2);
      vehicleApi.applyEngineForce(0, 3);
      vehicleApi.setSteeringValue(0, 0);
      vehicleApi.setSteeringValue(0, 1);
      setCP1(false);
      setCP2(false);
      setCP3(false);
      setCP4(false);

      setTimeout(() => {
        setStart(true);
        setStartTime(new Date().getTime());
      }, 3000);
    }
  }, [restart]);

  return (
    <>
      <Html center>
        {!isTouchDevice && start && (
          <div className="select-none touch-none w-[100vw] h-[100vh] z-[99] border-4 border-red-600 text-4xl font-bold text-white grid place-items-center">
            <div
              onClick={() => {
                if (cameraAngle === 4) {
                  setCameraAngle(1);
                } else {
                  setCameraAngle(cameraAngle + 1);
                }
              }}
              className="absolute cursor-pointer right-4 dropShadow top-4 text-4xl border-2 border-white rounded-md p-3"
            >
              <p className="text-center mb-2">{cameraAngle}</p>
              {/* <p>{speed} km/hr</p> */}
              <FaCamera />
            </div>

            <p ref={speedRef} className="absolute bottom-8 text-4xl right-4">
              0.0 km/h
            </p>
          </div>
        )}
        
        {isTouchDevice && start && (
          <div className="select-none touch-none w-[100vw] h-[100vh] z-[99] border-4 border-red-600 text-7xl font-bold text-white grid place-items-center">
            <div
              onClick={() => {
                if (cameraAngle === 4) {
                  setCameraAngle(1);
                } else {
                  setCameraAngle(cameraAngle + 1);
                }
              }}
              className="absolute left-2 top-2 text-5xl border-2 border-white rounded-md p-3"
            >
              <p className="text-center mb-4">{cameraAngle}</p>
              <FaCamera />
            </div>

            <div className="absolute left-2 bottom-16 grid place-items-center">
              <FaCaretSquareUp
                onTouchStart={(e) => {
                  keysPressed.current.add("w");
                }}
                onTouchEnd={(e) => {
                  keysPressed.current.delete("w");
                }}
                // onTouchStart={(e) => e.preventDefault()} // Prevent long press triggering text selection
                // onContextMenu={(e) => e.preventDefault()}
                className="mb-10"
              />
              <FaCaretSquareDown
                onTouchStart={(e) => {
                  keysPressed.current.add("s");
                }}
                onTouchEnd={(e) => {
                  keysPressed.current.delete("s");
                }}
                // onTouchStart={(e) => e.preventDefault()} // Prevent long press triggering text selection
                // onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            <div className="absolute bottom-36 right-2 flex items-center">
              <FaCaretSquareLeft
                onTouchStart={(e) => {
                  keysPressed.current.add("a");
                }}
                onTouchEnd={(e) => {
                  keysPressed.current.delete("a");
                }}
                // onTouchStart={(e) => e.preventDefault()} // Prevent long press triggering text selection
                // onContextMenu={(e) => e.preventDefault()}
                className="mr-10"
              />
              <FaCaretSquareRight
                onTouchStart={(e) => {
                  keysPressed.current.add("d");
                }}
                onTouchEnd={(e) => {
                  keysPressed.current.delete("d");
                }}
                // onTouchStart={(e) => e.preventDefault()} // Prevent long press triggering text selection
                // onContextMenu={(e) => e.preventDefault()}
              />
            </div>

            {/* <div className="absolute bottom-8 right-8"> */}

            <p
              onTouchStart={() => {
                keysPressed.current.add(" ");
              }}
              onTouchEnd={() => {
                keysPressed.current.delete(" ");
              }}
              // onTouchStart={(e) => e.preventDefault()} // Prevent long press triggering text selection
                // onContextMenu={(e) => e.preventDefault()}
              className="absolute bottom-16 right-2 border-2 border-white text-4xl rounded-md py-2 px-8"
            >
              Brake
            </p>

            {/* </div> */}
          </div>
        )}
      </Html>

      <PerspectiveCamera
        ref={cameraRef}
        fov={45}
        near={0.1}
        far={1000000}
        position={[-127, 15, -160]}
        makeDefault
      />

      {/* <mesh ref={chassisBody} position={[0, 10, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="hotpink" />
      </mesh> */}

      <Barrier1 />
      <Barrier2 />
      <Barrier3 />
      <Barrier4 />
      <Barrier5 />
      <Barrier6 />
      <Barrier7 />
      <Barrier8 />
      <Barrier9 />
      <Barrier10 />
      <Barrier11 />
      <Barrier12 />
      <Barrier13 />

      <group ref={vehicle} position={[0, 0, 0]}>
        {window.innerWidth < 800 ? (
          <MobileCarBody ref={chassisBody} />
        ) : (
          <CarBody ref={chassisBody} />
        )}

        <Wheel ref={wheels[0]} leftSide />
        <Wheel ref={wheels[1]} />
        <Wheel ref={wheels[2]} leftSide c />
        <Wheel ref={wheels[3]} />
      </group>
    </>
  );
}
