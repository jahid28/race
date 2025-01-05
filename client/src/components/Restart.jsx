import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
// import { restartFunc,endFunc } from "../../redux/actions";
import useStore from "../../zustand/useStore";
import Cookies from "js-cookie";
import axios from "axios";
import { formSchema } from "../lib/exports";
import { useToast } from "@/hooks/use-toast";
import ClipLoader from "react-spinners/ClipLoader";

const Restart = (props) => {
  const { toast } = useToast();

  // const dispatch = useDispatch();
  // const name = useSelector((state) => state.reducer1.name);
  // const name = useStore((state) => state.name);
  // const time = useSelector((state) => state.reducer1.time);
  const time = useStore((state) => state.time);
  const restartFunc = useStore((state) => state.restartFunc);
  const endFunc = useStore((state) => state.endFunc);
  const end = useStore((state) => state.end);
  const userNameFromToken = useStore((state) => state.userNameFromToken);
  const userNameFromTokenFunc = useStore(
    (state) => state.userNameFromTokenFunc
  );
  // const [name, setName] = useState("");
  // const [auth, setAuth] = useState(false);
  const [loadingState, setLoadingState] = useState(true);
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [leaderboardData, setLeaderboardData] = useState([]);

  async function addRecord() {
    await axios
      .post(`${import.meta.env.VITE_APP_SERVER_URL}/addNewRecord`, {
        userName,
        time,
        password,
      })
      .then((res) => {
        if (res.data.success) {
          toast({
            description: `${res.data.msg}`,
          });
          // if (!auth) {
          Cookies.set("token", res.data.token, { expires: 7 });
          userNameFromTokenFunc(userName);
          setLoadingState(true);
          getLeaderboard();
          // }
        } else {
          toast({
            variant: "destructive",
            description: `${res.data.msg}`,
          });
        }
        // if (!auth) {
        //   Cookies.set("token", res.data.token, { expires: 7 });
        // }
        // setAuth(true);
      })
      .catch((e) => {
        toast({
          variant: "destructive",
          // title: "Scheduled: Catch up",
          description: "Somethig went wrong for /addNewRecord!",
        });
        console.log("error", e);
      });
  }

  async function submit(e) {
    e.preventDefault();
    try {
      // if (!auth) {
      const result = formSchema.safeParse({ userName, password });
      if (!result.success) {
        result.error.issues.forEach((i) => {
          toast({
            variant: "destructive",
            // title: "Scheduled: Catch up",
            description: `${i.message}`,
          });
        });
        return;
      }
      // }

      addRecord();

      // }
      // });
    } catch (e) {
      toast({
        variant: "destructive",
        // title: "Scheduled: Catch up",
        description: "Somethig went wrong in submit func!",
      });
      console.log("error", e);
    }
  }

  async function updateIfAuth() {
    if (userNameFromToken != "") {
      console.log("time & name in updateIfAuth is ", time,userNameFromToken);
      await axios
        .post(`${import.meta.env.VITE_APP_SERVER_URL}/updateRecord`, {
          userName: userNameFromToken,
          time,
        })
        .then((res) => {
          if (res.data.updated) {
            toast({
              description: `${res.data.msg}`,
            });
          } else {
            toast({
              variant: "destructive",
              description: `${res.data.msg}`,
            });
          }
        })
        .catch((e) => {
          toast({
            variant: "destructive",
            description: "Somethig went wrong for /updateRecord!",
          });
          console.log("error", e);
        });
    }

    await axios
      .post(`${import.meta.env.VITE_APP_SERVER_URL}/alwaysInsertRecord`, {
        // userName: userNameFromToken,
        time,
      })
      // .then((res) => {
      //   if (res.data.updated) {
      //     toast({
      //       description: `${res.data.msg}`,
      //     });
      //   } else {
      //     toast({
      //       variant: "destructive",
      //       description: `${res.data.msg}`,
      //     });
      //   }
      // })
      .catch((e) => {
        toast({
          variant: "destructive",
          description: "Somethig went wrong for /alwaysInsertRecord!",
        });
        console.log("error", e);
      });
  }

  async function getLeaderboard() {
    try {
      await axios
        .get(`${import.meta.env.VITE_APP_SERVER_URL}/getLeaderboard`)
        .then((res) => {
          // console.log("leaderboard in restart.jsx", res.data);
          // console.log("leaderboard in restart.jsx", res.data);
          if (res.data.success) {
            setLeaderboardData(res.data.data);
          } else {
            throw new Error("error");
          }
        });

      setLoadingState(false);
    } catch (e) {
      console.log("error", e);
      toast({
        variant: "destructive",
        description: "Somethig went wrong for /getLeaderboard!",
      });
    }
  }

  // useEffect(() => {
  // },[])

  useEffect(() => {
    updateIfAuth();

    setTimeout(() => {
      getLeaderboard();
    }, 3000);
  }, []);

  // useEffect( () => {
  //   // setTimeout(() => {
  //     console.log("time in restart is ", time);
  //   // }, 5000);
  // }, [time]);

  return (
    <div className="absolute border-0 border-red-600 overflow-y-auto top-0 z-[100] w-[100vw] h-[100vh] text-white bg-teal-950 opacity-[.95]">
      <div className="border-0 border-red-500 mt-20 mb-20 w-fit relative left-1/2 -translate-x-1/2 px-2 grid place-items-center text-center font-semibold">
        <p className="text-xl md:text-3xl">
          {userNameFromToken==""?"Welldone, you finished the race in ":`Welldone ${userNameFromToken}, you finished the race in `}
          
          <span className="text-yellow-300">{time / 1000} seconds</span>
        </p>
        {userNameFromToken == "" ? (
          <>
            <form className="w-fit" action="" onSubmit={submit}>
              <p className="mt-4 mb-2 text-xl md:text-3xl">
                Login or register to save your record to the leaderboard
              </p>
              <input
                onChange={(e) => {
                  setUserName(e.target.value);
                  // dispatch(nameFunc(e.target.value));
                  // console.log(e.target.value);
                }}
                value={userName}
                className="bg-transparent border-2 border-white py-1 text-xl px-2 mb-8 w-full"
                placeholder="Enter user name"
                // required
                type="text"
                maxLength={20}
              />
              <br />
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                  // dispatch(nameFunc(e.target.value));
                  // console.log(e.target.value);
                }}
                value={password}
                className="bg-transparent border-2 border-white py-1 text-xl px-2 mb-4 w-full"
                placeholder="Enter password"
                // required
                type="password"
                maxLength={20}
              />
              <br />
              <button
                type="submit"
                className="ml-auto mb-8 -skew-x-12 text-base md:text-2xl border-2 border-yellow-300 bg-transparent text-yellow-300 py-1 px-4 hover:text-teal-950 hover:bg-yellow-300 cursor-pointer h-fit w-fit transition-all duration-300"
              >
                Submit
              </button>
            </form>

            {/* <div className="flex items-center justify-center">
              <p className="w-[50rem] h-[1px] bg-white"></p>
            <p className="mt-4">OR</p>
            </div> */}
          </>
        ) : (
          <>{/* <p>Your record has been added to the leaderboard</p> */}</>
        )}

        <button
          className="mt-6 -skew-x-12 text-base md:text-2xl border-2 border-yellow-300 bg-yellow-300 text-teal-950 py-1 px-4 hover:text-yellow-300 hover:bg-transparent transition-all duration-300"
          onClick={() => {
            // dispatch(restartFunc(true));
            restartFunc(true);
            // dispatch(endFunc(false));
            endFunc(false);
          }}
        >
          Race Again
        </button>
      </div>

      <h2 className="text-2xl md:text-4xl text-center font-semibold mb-2">
        Leaderboard
      </h2>

      {loadingState ? (
        <div className="relative border-0 border-red-400 w-fit left-1/2 -translate-x-1/2">
          <ClipLoader
            // className="w-full"
            color={"white"}
            loading={true}
            // cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <table className="border-2 border-yellow-300 mb-4 w-[95vw] lg:w-[60rem] relative left-1/2 -translate-x-1/2">
          <thead className="text-black">
            <tr>
              <th className="border-2 border-white bg-teal-800 text-white p-2">
                Rank
              </th>
              <th className="border-2 border-white bg-teal-800 text-white p-2">
                Username
              </th>
              <th className="border-2 border-white bg-teal-800 text-white p-2">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {leaderboardData.map((e, index) => {
              return (
                <tr key={index} className="border-0 border-black">
                  <td className="border-2 border-white text-center p-2">
                    {index + 1}
                  </td>
                  <td className="border-2 border-white text-center p-2">
                    {e.userName}
                  </td>
                  <td className="border-2 border-white text-center p-2">
                    {e.time / 1000}s
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}

      {/* <div>
          Leaderboard
        </div> */}
    </div>
  );
};

export default Restart;
