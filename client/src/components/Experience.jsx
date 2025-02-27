import { useState, Suspense, lazy, useEffect, useRef } from "react";
// import "./App.css";
import Scene from "./Scene";
import { FaLinkedin } from "react-icons/fa";
import Countdown from "./Countdown";
import Restart from "./Restart";
import useStore from "../../zustand/useStore";
import Cookies from "js-cookie";
import axios from "axios";
// import Loading from "./Loading";
import {
  FaCaretSquareUp,
  FaCaretSquareDown,
  FaCaretSquareLeft,
  FaCaretSquareRight,
  FaCamera,
} from "react-icons/fa";
// import axios from "axios";
function Experience() {
  // const dispatch = useDispatch();
  // const end = useSelector((state) => state.reducer1.end);
  const end = useStore((state) => state.end);
  // const restart = useSelector((state) => state.reducer1.restart);
  const restart = useStore((state) => state.restart);
  // const nameFunc = useStore((state) => state.nameFunc);
  const restartFunc = useStore((state) => state.restartFunc);
  const userNameFromTokenFunc = useStore(
    (state) => state.userNameFromTokenFunc
  );
  const leaderboardFunc = useStore((state) => state.leaderboardFunc);

  //   console.log("restart in exp", restart);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  // const [name, setName] = useState("");
  const [play, setPlay] = useState(false);
  //   const [countdown, setCountdown] = useState(false);

  const menu = useRef();

  const count = useStore((state) => state.count);

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

  async function submit(e) {
    e.preventDefault();
    try {
      menu.current.style.display = "none";
      setPlay(true);
      restartFunc(true);
      // }
      // });
    } catch (e) {
      alert("Somethig went wrong in trycatch!");
    }
  }

  useEffect(() => {
    if (restart) {
      setTimeout(() => {
        restartFunc(false);
      }, 4000);
    }
  }, [restart]);

  async function checkAuth() {
    try {
      const token = Cookies.get("token");
      // console.log("token in exp", token);

      if (token == undefined) {
        // authFunc(false);
        return;
      }

      await axios
        .post(`${import.meta.env.VITE_APP_SERVER_URL}/checkAuth`, {
          token,
        })
        .then((res) => {
          if (res.data.decoded) {
            userNameFromTokenFunc(res.data.decoded.userName);
          }
        });
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <>
      <main
        ref={menu}
        className="select-none border-0 border-red-500 w-[100vw] h-[100vh] overflow-hidden absolute top-0 z-[99] grid place-items-center"
      >
        <div className="dropShadow absolute top-2 left-2 text-xl text-white font-semibold">
          <p className="mb-5">Controls :</p>
          {/* <h1>Count: {count}</h1> */}
          {isTouchDevice ? (
            <>
              <div className="flex items-center">
                <FaCaretSquareUp className="text-4xl text-white mr-2" />
                <FaCaretSquareDown className="text-4xl text-white mr-2" />
                <FaCaretSquareLeft className="text-4xl text-white mr-2" />
                <FaCaretSquareRight className="text-4xl text-white mr-2" />
                <p>to move</p>
              </div>

              <div className="flex items-center mt-4">
                <FaCamera className="text-4xl text-white mr-2" />
                <p>to change camera angle</p>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center">
                <p className="key">W</p>
                <p className="key">A</p>
                <p className="key">S</p>
                <p className="key">D</p>
                <p className="mr-1">or</p>
                <p className="key ml-1">&uarr;</p>
                <p className="key">&darr;</p>
                <p className="key">&larr;</p>
                <p className="key">&rarr;</p>
                <p>to move</p>
              </div>

              <p className="my-4">
                <span className="key">Space</span>to brake
              </p>

              <div className="flex items-center">
                <p className="key">1</p>
                <p className="key">2</p>
                <p className="key">3</p>
                <p className="key">4</p>
                <p>or</p>
                <FaCamera className="text-3xl text-white mx-2" />
                <p>to change camera angle</p>
              </div>
            </>
          )}
        </div>

        <a
          href="https://www.linkedin.com/in/jahidkhan2003/"
          target="_blank"
          className="dropShadow absolute bottom-2 left-2 text-white font-semibold text-4xl cursor-pointer"
        >
          <FaLinkedin />
        </a>

        <form
          onSubmit={submit}
          className="absolute formAnime bottom-24 md:bottom-12 left-1/2 -translate-x-1/2 grid place-items-center"
          action=""
        >
        
          <button
            type="submit"
            className="-skew-x-12 font-faster text-yellow-300 text-5xl md:text-7xl border-2 border-yellow-300 hover:text-teal-950 hover:bg-yellow-300 cursor-pointer h-fit w-fit pt-.5 pb-1 px-8 transition-all duration-300"
          >
            START
          </button>
        </form>
      </main>

      {restart && <Countdown />}
      {end && <Restart />}

      <Scene play={play} />
    </>
  );
}

export default Experience;
