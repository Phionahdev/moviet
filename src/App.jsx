import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home3 from "./movies/Home3";
import Nav2 from "./movies/Nav2";
import Log2 from "./movies/Log2";
import Detailspage from "./movies/Detailspage";
import Watche from "./movies/Watche";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Nav2 />
    <Home3 /> */}
      <Routes>
        <Route index element={<Log2 />} />
        <Route path="/home3/:mid" element={<Home3 />} />
        <Route path="/details/:mid" element={<Detailspage />} />
        <Route path="/Watch/:mid" element={<Watche />} />
        <Route path="/home3/:mid" element={<Home3 />} />
      </Routes>
    </>
  );
}

export default App;
