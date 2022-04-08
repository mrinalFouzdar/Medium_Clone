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
import Navbar2 from "./LoginComp/Navbar2"
import SideBar from "./LoginComp/Sidebar"
import YourStory from "./AfterLogIn/BlogWrite/YourStory"
import List from "./LoginComp/List";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { Landingleft } from "./Components/Landingpage/Landingleft";

const Div = styled.div`
`
const App = () => {
  const data=useSelector((store)=>store.IsAuth.IsAuth);
  const [flex,setFlex]=React.useState("block")
  if(data){
    setFlex(flex)
  }
  console.log(<Navbar2/>)
  // console.log(data)
  return (
    <Div data={data} >
      {/* <Navbar /> */}
      
      {/* <Navbar2/> */}
      {/* <Routes>
        <Route path="/" element={<Landingpage />} />
       <Route path="/ourStory" element={<OurStorymain />} />
        <Route path="/memberShip" element={<Membership />} />
        <Route path="/write" element={<Write />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/startIn" element={<Login />} />
        <Route path="/register" element={<Signup />} /> */}
        {/* <Route path="/loading" element={<Loading />} /> */}
        {/* <Route path="/AfterLogincomp" element={<AfterLogincomp />} /> */}
{/*         
        <Route path="/List"  element={<List/>}/>
        <Route path="/YourStory" element={<YourStory/>}/>
        <Route path="/writeBlog" element={ <WriteBlog/> }/> */}
      {/* </Routes> */}
      {/* <WriteBlog/> */}
      {/* <YourStory/> */}
      {/* <SideBar/> */}
      <Landingleft/>
    </Div>

  );
};

export default App;
