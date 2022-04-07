import React from "react";
import Navbar2 from "./Navbar2";
import SideBar from "./Sidebar";
import List from "./List";

const AfterLogincomp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Navbar2></Navbar2>
      <List />
      <SideBar />
    </div>
  );
};

export default AfterLogincomp;
