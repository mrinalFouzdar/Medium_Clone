import React from "react";
import { Route, Routes } from "react-router-dom";
import { Landingpage } from "./Components/Landingpage/Landingpage";
import Navbar from "./Components/Navbar/Navbar";
import OurStorymain from "./Components/OurStoryPage/OurStorymain";
import { Login } from "./Components/Loginpage/Login";
import Membership from "./Components/Membership/Membership";
import { Write } from "./Components/Write/Write";
import WriteBlog from "./Components/BlogWrite/WriteBlog";
import { Signup } from "./Components/Loginpage/Signup";
import AfterLogincomp from "./LoginComp/AfterLogincomp";
import { Loading } from "./Components/Loginpage/Loading";
import { Lastblog } from "./Components/Afterpublish/Lastblog";
import { Leftafterpublish } from "./Components/Afterpublish/Leftafterpublish";
import { Landingright } from "./Components/Landingpage/Landingright";
import { Landingleft } from "./Components/Landingpage/Landingleft";
import SideBar from "./LoginComp/Sidebar";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Navbar2 from "./LoginComp/Navbar2";
import YourStory from "./AfterLogIn/BlogWrite/YourStory";
import Notifications from "./LoginComp/Notifications";
import { List } from "./LoginComp/List";

const Div=styled.div`
  display:${(props)=>props.Data ? "flex" : "block" };
  justify-content:${(props)=> props.Data ? "space-between":"null"} ;
`
const App = () => {
  const Data=useSelector((store)=>store.IsAuth.IsAuth)
  console.log(Data)
  return (
    <Div Data={Data}>
      {
      Data ? <Navbar2 />:<Navbar/>
      }
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/ourStory" element={<OurStorymain />} />
        <Route path="/memberShip" element={<Membership />} />
        <Route path="/write" element={<Write />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/startIn" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/list"    element={<List/>}/>
        <Route path="/WriteBlog" element={<WriteBlog/>} />
        <Route path="/YourStory" element={<YourStory/>}/>
        <Route path="/Notifications" element={<Notifications/>}/>
      </Routes>
      {/* <Landingleft /> */}
      {/* <Landingpage /> */}
      {/* <Leftafterpublish /> */}
      {/* <WriteBlog/> */}
      {/* <YourStory/> */}
      {
        Data ? <SideBar/>: null
      }
      {/* <Landingleft/> */}
    </Div>

  );
};

export default App;
