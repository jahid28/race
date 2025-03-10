import React, { useRef } from 'react'

const Countdown = () => {
  return (
    <div
        className="select-none absolute top-0 z-[99] w-[100vw] h-[100vh] font-faster text-yellow-300 text-9xl border-0 border-green-300"
      >
        <p className=" three absolute top-1/4 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 w-fit ">
          3
        </p>
        <p className=" two absolute top-1/4 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 w-fit ">
          2
        </p>
        <p className=" one absolute top-1/4 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 w-fit ">
          1
        </p>
        <p className=" go absolute top-1/4 -translate-y-1/2 left-1/2 -translate-x-1/2 opacity-0 w-fit ">
          GO!!
        </p>
      </div>
  )
}

export default Countdown
