import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Title from "./components/Title";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title ="TextUtils is amazing mode"
      // },2000);
      // setInterval(() => {
      //   document.title ="Installed textUtils now !"
      // },1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
      <Navbar
        title="Textutils"
        mode={mode}
        toggleMode={toggleMode}
        aboutText="About"
      />
      <Routes>
        <Route path="/about" element={<About />}></Route>

        <Route
          path="/home"
          element={
            <TextForm heading="Enter your text to analyze" mode={mode} />
          }
        ></Route>

        <Route path="/title" element={<Title />}></Route>
      </Routes>

      <div className="container my-3"></div>
    </>
  );
}

export default App;
