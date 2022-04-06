import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landingpage } from "./Components/Landingpage/Landingpage";
import Navbar from "./Components/Navbar/Navbar";
import OurStorymain from "./Components/OurStoryPage/OurStorymain";
import {Login} from "./Components/Loginpage/Login"
import Membership from "./Components/Membership/Membership";
import { Write } from "./Components/Write/Write";
import WriteBlog from "./Components/BlogWrite/WriteBlog";

const App = () => {
  return (
    <div>
      {/* <Landingpage /> */}
      {/* <OurStorymain/> */}
      {/* <Login/> */}
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landingpage/>}/>
        <Route path="/ourStory" element={<OurStorymain/>}/>
        <Route path="/memberShip" element={<Membership/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/logIn" element={<Login/>}/>
        <Route path="/startIn" element={<Login/>}/>
      </Routes>
      {/* <WriteBlog/> */}
    </div>
  );
};

export default App;
