import React from "react";
import Navbar2 from "./Navbar2";
import SideBar from "./Sidebar";
import List from "./List";

import ListOfStory from "../AfterLogIn/BlogWrite/ListOfStory";
import { Route, Routes } from "react-router-dom";
import { Leftafterpublish } from "../Components/Afterpublish/Leftafterpublish";
import { Lastblog } from "../Components/Afterpublish/Lastblog";
// import {Listof}
const AfterLogincomp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Navbar2 />
      <Routes>
        <Route path="/home" element={<Lastblog />} />
        <Route path="/allpublished" element={<ListOfStory />} />
      </Routes>
      {/* <Lastblog /> */}
      <SideBar />
    </div>
  );
};

export default AfterLogincomp;
