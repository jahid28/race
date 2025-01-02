import { useState, Suspense, lazy, useEffect, useRef } from "react";
import "./App.css";
import Experience from "./components/Experience";
import { Toaster } from './components/ui/toaster'

function App() {

  return (
    <main className="w-[100vw] h-[100vh] bg-sky-300 overflow-hidden">
     <Experience/>
      <Toaster/>
    </main>
  );
}

export default App;
