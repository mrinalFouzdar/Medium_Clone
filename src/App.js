import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landingpage } from "./Components/Landingpage/Landingpage";
import Navbar from "./Components/Navbar/Navbar";
import OurStorymain from "./Components/OurStoryPage/OurStorymain";

const App = () => {
  return (
    <div>
      {/* <Landingpage /> */}
      {/* <OurStorymain/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/ourStory" element={<OurStorymain/>}/>
      </Routes>
    </div>
  );
};

export default App;
