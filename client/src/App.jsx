import { useState, Suspense, lazy, useEffect, useRef } from "react";
import "./App.css";
import Experience from "./components/Experience";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
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

  return (
    <main className="w-[100vw] h-[100vh] bg-sky-300 overflow-hidden">
      {!isTouchDevice ? (
        <>
          <Experience />
          <Toaster />
        </>
      ) : (
        <div className="w-full h-full z-[99] border-0 border-red-600 text-3xl font-bold text-white bg-neutral-800 grid place-items-center">
          <p className="mx-2 text-center">
            Touch controls are currently unavailable. Please switch to a computer or
            use a keyboard to play.
          </p>
        </div>
      )}
    </main>
  );
}

export default App;
