import React from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import Navbar2 from "./LoginComp/Navbar2";
import YourStory from "./AfterLogIn/BlogWrite/YourStory";
import Notifications from "./LoginComp/Notifications";
import { List } from "./LoginComp/List";
import { loadData, saveData } from "./Localstorage";
import { isAuthorized } from "./Redux/IsAuth/action";
const Div = styled.div`
  display: ${(props) => (props.Data ? "flex" : "block")};
  justify-content: ${(props) => (props.Data ? "space-between" : "null")};
`;
const App = () => {
  const dispatch = useDispatch();

  if (loadData("userDetails") != null && loadData("userDetails").length !== 0) {
    dispatch(isAuthorized(true));
  }

  else {
    dispatch(isAuthorized(false));
    console.log("hallo");
  }
  let Data = useSelector((store) => store.IsAuth.IsAuth);
  // Data = true;
  console.log(Data);
  return (
    <Div Data={Data}>
      {Data ? <Navbar2 /> : <Navbar />}
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/ourStory" element={<OurStorymain />} />
        <Route path="/memberShip" element={<Membership />} />
        <Route path="/write" element={<Write />} />
        <Route path="/logIn" element={<Login />} />
        <Route path="/startIn" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/list" element={<List />} />
        <Route path="/WriteBlog" element={<WriteBlog />} />
        <Route path="/YourStory" element={<YourStory />} />
        <Route path="/Notifications" element={<Notifications />} />
      </Routes>

      {Data ? <SideBar /> : null}
    </Div>
  );
};

// //  {/* <Landingleft /> */}
//       {/* <Landingpage /> */}
//       {/* <Leftafterpublish /> */}
//       {/* <WriteBlog/> */}
//       {/* <YourStory/> */}
//  {/* <Landingleft/> */}

// return
// AuthDetails===false?
//   (
//     <div>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Landingpage />} />
//         <Route path="/ourStory" element={<OurStorymain />} />
//         <Route path="/memberShip" element={<Membership />} />
//         <Route path="/write" element={<Write />} />
//         <Route path="/logIn" element={<Login />} />
//         <Route path="/startIn" element={<Login />} />
//         <Route path="/register" element={<Signup />} />
//         <Route path="/loading" element={<Loading />} />
//         <Route path="/afterLogincomp" element={<AfterLogincomp />} />
//         {/* <Route path="/home" element={<Lastblog />} /> */}
//         {/* <Route path="/allpublished" element={<ListOfStory />} /> */}
//       </Routes>
//       {/* <Landingleft /> */}
//       {/* <Landingpage /> */}
//       {/* <Leftafterpublish /> */}
//       {/* <WriteBlog/> */}
//       {/* <Navbar2 />
//       <SideBar></SideBar> */}
//     </div>

//   ):(

// };

export default App;
