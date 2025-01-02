import React from "react";
import { useProgress, Html } from "@react-three/drei";

const Loading = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="w-[100vw] text-2xl md:text-3xl font-bold text-white h-[100vh] bg-teal-950 grid place-items-center">
        <div className="px-3 w-[96vw] xl:w-[70rem]">
          <div className="mb-2 flex items-center">
          <p className="">Loading...</p>
          <p className="ml-auto">{Math.round(progress)}%</p>
          </div>
          <div className="border-2 border-white p-1 h-[2rem] w-full relative">
            <p
              style={{ width: `${Math.round(progress)}%` }}
              className="bg-white h-full"
            ></p>
          </div>
        </div>
        {/* {Math.round(progress)}% */}
        {/* Loading{Math.round(progress)}% */}
      </div>
    </Html>
  );
};

export default Loading;
