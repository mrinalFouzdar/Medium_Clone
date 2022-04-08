import React from "react";
import "./Navbar.Module.css";
import { useDispatch, useSelector } from "react-redux";
import { isAuthorized } from "../Redux/IsAuth/action";
import { Link, Navigate } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { VscBell } from "react-icons/vsc";
import { BsBookmarks, BsPencilSquare } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
// import styled from "styled-components";

// const Nav2Link=styled(Link)`

// `
import { loadData, saveData } from "../Localstorage.js";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Dropupdiv = styled.div`
  width: 275px;
  border-radius: 5px;
  height: 70vh;
  background-color: white;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  position: absolute;
  font-size: 14px;
  bottom: 50px;
  z-index: 10000;
  left: -10px;
  display: ${(props) => props.display};
`;
const StylLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 12px;
  font-size: 12px;
  z-index: 1000;
`;
const P = styled.p`
  text-decoration: none;
  color: black;
  font-weight: 12px;
  font-size: 12px;
  z-index: 1000;
`;
const Navbar2 = () => {
  const [display, setdisplay] = React.useState("none");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const curuser = loadData("userDetails");
  if (curuser === null || curuser.length === 0) {
    <Navigate to="/" />;
  }
  const userimage = curuser[0].imageUrl;
  const useremail = curuser[0].email;
  const name = curuser[0].name;

  const handleToggle = () => {
    if (display === "none") {
      setdisplay("block");
    } else {
      setdisplay("none");
    }
  };

  const handleLogout = () => {
    saveData("userDetails", []);
    dispatch(isAuthorized(false));
    navigate("/");
  };

  return (
    <div>
      <div className="navbar">
        <div className="first-box">
          <img
            src="data:image/png;base64,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"
            alt=""
            width="70px"
            height="70px"
          />
        </div>
        <div
          className="mid-box"
          style={{
            marginBottom: "100%",
          }}
        >
          <ul className="list-icons">
            <li className="l-i">
              {/* <a> */}
              <div>
                <Link to="/home">
                  <ImHome className="icons" />
                </Link>
              </div>
              {/* </a> */}
            </li>
            <li className="l-i">
              <Link to="/Notifications">
                <VscBell className="icons" />
              </Link>
            </li>
            <li className="l-i">
              <Link to="/list">
                <BsBookmarks className="icons" />
              </Link>
            </li>
            <li className="l-i">
              <Link to="/YourStory">
                <CgNotes className="icons" />
              </Link>
            </li>
            <div
              style={{
                width: "20%",
                backgroundColor: "#dcdc",
                height: "1px",
                marginLeft: "40%",
                marginTop: "10%",
              }}
            ></div>
            <li className="l-i">
              <Link to="/WriteBlog">
                <BsPencilSquare className="icons"></BsPencilSquare>
              </Link>
            </li>
          </ul>
        </div>
        <div className="last-box">
          <Dropupdiv display={display}>
            <ul className="drop-list">
              <li>
                <StylLink to="/medium">Medium Partner program</StylLink>
              </li>
              <li>
                <P>Gift a membership</P>
              </li>
              <li>
                <P>Become a member</P>
              </li>
              <hr />
              <li onClick={handleLogout}>
                <P>Sign out</P>
              </li>
              <li>
                <P>Refine recommendations</P>
              </li>
              <li>
                <P>Manage publications</P>
              </li>
              <li>
                <P>Stats</P>
              </li>
              <li>
                <P>Settings</P>
              </li>
            </ul>
            <hr />
            <div
              style={{
                display: "flex",
                paddingLeft: "5%",
                paddingTop: "10%",
              }}
            >
              <img
                src={userimage}
                alt=""
                style={{
                  width: "35px",
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              />
              <div
                style={{
                  paddingLeft: "5%",
                }}
              >
                <p>{name}</p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "rgba(117, 117, 117, 1)",
                  }}
                >
                  @{useremail.slice(0, 17)}
                </p>
              </div>
            </div>
          </Dropupdiv>
          <img
            src={userimage}
            alt=""
            style={{ width: "30px", borderRadius: "50%", cursor: "pointer" }}
            onClick={handleToggle}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
