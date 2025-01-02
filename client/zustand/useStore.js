import { create } from "zustand";

const useStore = create((set) => ({
  name: "",
  end: false,
  time: 0,
  restart: false,
  userNameFromToken: "",
  // leaderboard: [],
  nameFunc: (name) => set((state) => ({ name })),
  endFunc: (val) => set((state) => ({ end: val })),
  timeFunc: (val) => set((state) => ({ time: val })),
  restartFunc: (val) => set((state) => ({ restart: val })),
  userNameFromTokenFunc: (val) => set((state) => ({ userNameFromToken: val })),
  // leaderboardFunc: (val) => set((state) => ({ leaderboard: val })),
}));

export default useStore;
