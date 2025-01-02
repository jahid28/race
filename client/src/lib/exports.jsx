import { z } from "zod";
import { useCompoundBody } from "@react-three/cannon";

// import { useRef } from "react";
const back = -4.5;
const front = 4.3;
const height = -0.65;
const width = 5.85;

 const wheelInfo = {
  axleLocal: [1, 0, 0], // This is inverted for asymmetrical wheel models (left v. right sided)
  customSlidingRotationalSpeed: 0,
  dampingCompression: 4.4,
  dampingRelaxation: 10,
  directionLocal: [0, -1, 0], // set to same as Physics Gravity
  frictionSlip: 6,
  maxSuspensionForce: 1e4,
  maxSuspensionTravel: 0.3,
  radius: 1,
  suspensionRestLength: 0.3,
  suspensionStiffness: 30,
  useCustomSlidingRotationalSpeed: true,
  // rotation: [Math.PI / 2,0, 0],
};

export const wheelInfo1 = {
  ...wheelInfo,
  axleLocal: [-1, 0, 0],
  chassisConnectionPointLocal: [width / 2, height, front],
  isFrontWheel: true,
};
export const wheelInfo2 = {
  ...wheelInfo,
  axleLocal: [-1, 0, 0],
  chassisConnectionPointLocal: [-width / 2, height, front],
  isFrontWheel: true,
};
export const wheelInfo3 = {
  ...wheelInfo,
  axleLocal: [-1, 0, 0],
  chassisConnectionPointLocal: [width / 2, height, back],
  isFrontWheel: false,
};
export const wheelInfo4 = {
  ...wheelInfo,
  axleLocal: [-1, 0, 0],
  chassisConnectionPointLocal: [-width / 2, height, back],
  isFrontWheel: false,
};

export const formSchema = z.object({
  userName: z
    .string()
    .trim()
    .min(1, {
      message: "Name must be at least 1 character long",
    })
    .max(20, {
      message: "Name must be at most 20 characters long",
    }),

  password: z
    .string()
    .trim()
    .min(4, {
      message: "Password must be at least 4 characters long",
    })
    .max(20, {
      message: "Password must be at most 20 characters long",
    }),

});



export const Barrier1 = () => {
  useCompoundBody(() => ({
    // isTrigger: true,
    // mass: 1,
    type: "Static",
    position: [0, 0, 0],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // inner circle barrier
      {
        type: "Cylinder",
        // rotation: [0, Math.PI / 2, 0],
        position: [-106.6, 2.5, -162.4],
        args: [3.5, 3.5, 5, 24],
      },
      {
        type: "Cylinder",
        // rotation: [0, Math.PI / 2, 0],
        position: [-38.1, 2.5, -192.9],
        args: [3.5, 3.5, 5, 24],
      },
      {
        type: "Cylinder",
        // rotation: [0, Math.PI / 2, 0],
        position: [-7.3, 2.5, -255.9],
        args: [3.5, 3.5, 5, 24],
      },
      {
        type: "Cylinder",
        // rotation: [0, Math.PI / 2, 0],
        position: [17.3, 2.5, -255.9],
        args: [3.5, 3.5, 5, 24],
      },
      {
        type: "Cylinder",
        // rotation: [0, Math.PI / 2, 0],
        position: [47.9, 2.5, -64.3],
        args: [3.5, 3.5, 5, 24],
      },
      {
        type: "Cylinder",
        // rotation: [0, Math.PI / 2, 0],
        position: [233.7, 2.5, -33.7],
        args: [3.5, 3.5, 5, 24],
      },
      {
        type: "Cylinder",
        // rotation: [0, Math.PI / 2, 0],
        position: [233.7, 2.5, -9.4],
        args: [3.5, 3.5, 5, 24],
      },
      {
        type: "Cylinder",
        // rotation: [0, Math.PI / 2, 0],
        position: [206, 2.5, 21.35],
        args: [3.5, 3.5, 5, 24],
      },
      {
        type: "Cylinder",
        // rotation: [0, Math.PI / 2, 0],
        position: [175.5, 2.5, 84.3],
        args: [3.5, 3.5, 5, 24],
      },
      {
        type: "Cylinder",
        // rotation: [0, Math.PI / 2, 0],
        position: [106.7, 2.5, 114.9],
        args: [3.5, 3.5, 5, 24],
      },
      {
        type: "Cylinder",
        // rotation: [0, Math.PI / 2, 0],
        position: [76.4, 2.5, 177.6],
        args: [3.5, 3.5, 5, 24],
      },
      {
        type: "Cylinder",
        // rotation: [0, Math.PI / 2, 0],
        position: [-106.6, 2.5, 177.7],
        args: [3.5, 3.5, 5, 24],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2, 0],
        position: [-110, 2.5, 8],
        args: [338, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2, 0],
        position: [-134, 2.5, 8],
        args: [338, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, -0.005, 0],
        position: [-70, 2.5, -165.8],
        args: [70, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0.004, 0],
        position: [-75, 2.5, -189.55],
        args: [70, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.004, 0],
        position: [-34.7, 2.5, -230],
        args: [70, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.005, 0],
        position: [-10.9, 2.5, -220],
        args: [70, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, -0.015, 0],
        position: [5, 2.5, -259.25],
        args: [21, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0, 0],
        position: [8, 2.5, -282.95],
        args: [18, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.001, 0],
        position: [20.78, 2.5, -161],
        args: [185, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2, 0],
        position: [44.6, 2.5, -159],
        args: [185, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0, 0],
        position: [142, 2.5, -61.15],
        args: [182, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, -0.0015, 0],
        position: [142, 2.5, -37.4],
        args: [181, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI/2-.02, 0],
        position: [236.98, 2.5, -22],
        args: [19, 5, 1],
      },
      {
          type: "Box",
          rotation: [0, Math.PI/2-.02, 0],
          position: [260.8, 2.5, -18.5],
          args: [15, 5, 1],
        },
        {
          type: "Box",
          rotation: [0, 0, 0],
          position: [222, 2.5, -5.7],
          args: [18, 5, 1],
        },
        {
          type: "Box",
          rotation: [0, 0, 0],
          position: [218, 2.5, 18.1],
          args: [16, 5, 1],
        },
        {
          type: "Box",
          rotation: [0, Math.PI/2-.002, 0],
          position: [202.6, 2.5, 53],
          args: [58, 5, 1],
        },
        {
          type: "Box",
          rotation: [0, Math.PI/2-.002, 0],
          position: [178.9, 2.5, 52],
          args: [58, 5, 1],
        },
        {
          type: "Box",
          rotation: [0,0, 0],
          position: [144, 2.6, 87.7],
          args: [58, 5, 1],
        },
        {
          type: "Box",
          rotation: [0,0.003, 0],
          position: [140, 2.6, 111.4],
          args: [58, 5, 1],
        },
        {
          type: "Box",
          rotation: [0,Math.PI/2-.003, 0],
          position: [103.55, 2.6, 147],
          args: [58, 5, 1],
        },
        {
          type: "Box",
          rotation: [0,Math.PI/2-.003, 0],
          position: [79.75, 2.6, 145],
          args: [58, 5, 1],
        },
        {
          type: "Box",
          rotation: [0,0, 0],
          position: [-15, 2.7, 181],
          args: [177, 5, 1],
        },
        {
          type: "Box",
          rotation: [0,0.002, 0],
          position: [-18, 2.7, 204.6],
          args: [174, 5, 1],
        },
    ],

    // onCollide: (e) => {
    //   setCP1(true);
    // },
  }));
};




export const Barrier2 = () => {
    useCompoundBody(() => ({    // isTrigger: true,
    // mass: 1,
    type: "Static",
    position: [-133.2, 2.5, -165],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // outer circle barrier
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.12, 0],
        position: [0, 0, 0],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.32, 0],
        position: [2, 0, -8.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.69, 0],
        position: [6.1, 0, -15.2],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.13, 0],
        position: [13.1, 0, -20.8],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.38, 0],
        position: [21.1, 0, -23.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0.06, 0],
        position: [30.1, 0, -24.7],
        args: [9, 5, 1],
      },
    ],
  }));
}
  
export const Barrier3 = () => {
    useCompoundBody(() => ({    // isTrigger: true,
    // mass: 1,
    type: "Static",
    rotation: [0, -Math.PI, 0],
    position: [-11.4, 2.5, -190.5],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // outer circle barrier
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.12, 0],
        position: [0, 0, 0],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.32, 0],
        position: [2, 0, -8.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.69, 0],
        position: [6.1, 0, -15.2],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.13, 0],
        position: [13.1, 0, -20.8],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.38, 0],
        position: [21.1, 0, -23.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0.06, 0],
        position: [30.1, 0, -24.7],
        args: [9, 5, 1],
      },
    ],
  }));
}

export const Barrier4 = () => {
    useCompoundBody(() => ({    // isTrigger: true,
    // mass: 1,
    type: "Static",
    rotation: [0, 0, 0],
    position: [-34, 2.5, -258.5],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // outer circle barrier
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.12, 0],
        position: [0, 0, 0],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.32, 0],
        position: [2, 0, -8.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.71, 0],
        position: [6.1, 0, -15.2],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.13, 0],
        position: [13.1, 0, -20.8],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.38, 0],
        position: [21.1, 0, -23.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0, 0],
        position: [30.1, 0, -24.6],
        args: [9, 5, 1],
      },
    ],
  }));
}

export const Barrier5 = () => {
    useCompoundBody(() => ({    // isTrigger: true,
    // mass: 1,
    type: "Static",
    rotation: [0, -Math.PI / 2, 0],
    position: [20, 2.5, -282.3],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // outer circle barrier
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.12, 0],
        position: [0, 0, 0],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.32, 0],
        position: [2, 0, -8.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.69, 0],
        position: [6.1, 0, -15.2],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.13, 0],
        position: [13.1, 0, -20.8],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.4, 0],
        position: [21.1, 0, -23.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0.02, 0],
        position: [30, 0, -24.3],
        args: [9, 5, 1],
      },
    ],
  }));
}

export const Barrier6 = () => {
    useCompoundBody(() => ({    // isTrigger: true,
    // mass: 1,
    type: "Static",
    rotation: [0, Math.PI / 2, 0],
    position: [45.5, 2.5, -38],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // outer circle barrier
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.12, 0],
        position: [0, 0, 0],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.32, 0],
        position: [2, 0, -8.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.69, 0],
        position: [6.1, 0, -15.2],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.13, 0],
        position: [13.1, 0, -20.8],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.38, 0],
        position: [21.1, 0, -23.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0.06, 0],
        position: [30.1, 0, -24.7],
        args: [9, 5, 1],
      },
    ],
  }));
}

export const Barrier7 = () => {
    useCompoundBody(() => ({    // isTrigger: true,
    // mass: 1,
    type: "Static",
    rotation: [0, -Math.PI / 2-.02, 0],
    position: [237, 2.5, -60.3],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // outer circle barrier
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.175, 0],
        position: [0, 0, 0],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.35, 0],
        position: [2, 0, -8.3],
        args: [7.5, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.74, 0],
        position: [6.2, 0, -15],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.13, 0],
        position: [13.2, 0, -20],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.34, 0],
        position: [21.1, 0, -23.1],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0.04, 0],
        position: [30.1, 0, -24.6],
        args: [9, 5, 1],
      },
    ],
  }));
}

export const Barrier8 = () => {
    useCompoundBody(() => ({    // isTrigger: true,
    // mass: 1,
    type: "Static",
    rotation: [0, Math.PI, 0],
    position: [260.3, 2.5, -6.8],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // outer circle barrier
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.12, 0],
        position: [0, 0, 0],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.32, 0],
        position: [2, 0, -8.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.69, 0],
        position: [6.1, 0, -15.2],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.13, 0],
        position: [13.1, 0, -20.8],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.38, 0],
        position: [21.1, 0, -23.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0.06, 0],
        position: [30.1, 0, -24.7],
        args: [9, 5, 1],
      },
    ],
  }));
}

export const Barrier9 = () => {
    useCompoundBody(() => ({    // isTrigger: true,
    // mass: 1,
    type: "Static",
    rotation: [0, 0, 0],
    position: [179.6, 2.5, 18.8],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // outer circle barrier
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.12, 0],
        position: [0, 0, 0],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.4, 0],
        position: [2.4, 0, -8],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.69, 0],
        position: [6.9, 0, -15.5],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 -1.05, 0],
        position: [13.1, 0, -20.8],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.38, 0],
        position: [21.1, 0, -23.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0.04, 0],
        position: [30.1, 0, -24.4],
        args: [9, 5, 1],
      },
    ],
  }));
}
  
export const Barrier10 = () => {
    useCompoundBody(() => ({    // isTrigger: true,
    // mass: 1,
    type: "Static",
    rotation: [0, Math.PI, 0],
    position: [202, 2.5, 87],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // outer circle barrier
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.12, 0],
        position: [0, 0, 0],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.32, 0],
        position: [2, 0, -8.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.69, 0],
        position: [6.1, 0, -15.2],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.13, 0],
        position: [13.1, 0, -20.8],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.38, 0],
        position: [21.1, 0, -23.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0.01, 0],
        position: [30, 0, -24.5],
        args: [9, 5, 1],
      },
    ],
  }));
}
  
export const Barrier11 = () => {
    useCompoundBody(() => ({    // isTrigger: true,
    // mass: 1,
    type: "Static",
    rotation: [0, 0, 0],
    position: [80.4, 2.5, 112.5],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // outer circle barrier
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.12, 0],
        position: [0, 0, 0],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.32, 0],
        position: [2, 0, -8.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.69, 0],
        position: [6.1, 0, -15.2],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.13, 0],
        position: [13.1, 0, -20.8],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.38, 0],
        position: [21.1, 0, -23.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0.06, 0],
        position: [30.1, 0, -24.7],
        args: [9, 5, 1],
      },
    ],
  }));
}
  
export const Barrier12 = () => {
    useCompoundBody(() => ({    // isTrigger: true,
    // mass: 1,
    type: "Static",
    rotation: [0, Math.PI, 0],
    position: [102.8, 2.5, 180.2],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // outer circle barrier
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.16, 0],
        position: [0, 0, 0],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.32, 0],
        position: [2, 0, -8.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.75, 0],
        position: [6.1, 0, -15.2],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.1, 0],
        position: [13.1, 0, -20.5],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.38, 0],
        position: [21.1, 0, -23.4],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0.01, 0],
        position: [30.1, 0, -24.3],
        args: [9, 5, 1],
      },
    ],
  }));
}

export const Barrier13 = () => {
    useCompoundBody(() => ({    // isTrigger: true,
    // mass: 1,
    type: "Static",
    rotation: [0, Math.PI / 2, 0],
    position: [-109.3, 2.5, 204.2],
    material: { friction: 0.1, restitution: 0.02 },
    shapes: [
      // outer circle barrier
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.13, 0],
        position: [0, 0, 0],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.37, 0],
        position: [2, 0, -8.1],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 0.69, 0],
        position: [6.1, 0, -15.2],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.13, 0],
        position: [13.1, 0, -20.8],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, Math.PI / 2 - 1.38, 0],
        position: [21.1, 0, -23.6],
        args: [9, 5, 1],
      },
      {
        type: "Box",
        rotation: [0, 0.06, 0],
        position: [30.1, 0, -24.7],
        args: [9, 5, 1],
      },
    ],
  }));
}
  