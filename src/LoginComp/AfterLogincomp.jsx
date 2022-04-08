import React from "react";
import Navbar2 from "./Navbar2";
import SideBar from "./Sidebar";
import { List } from "./List";
import Notifications from "./Notifications";

const AfterLogincomp = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Navbar2></Navbar2>
      {/* <List /> */}
      <Notifications />
      <SideBar />
    </div>
  );
};

export default AfterLogincomp;
