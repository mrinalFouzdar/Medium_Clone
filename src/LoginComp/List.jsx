import React from "react";
import styled from "styled-components";
import "./List.Module.css";
import Saved from "./Saved";
import Highlight from "./Highlight";
const Listbtn = styled.button`
  background: rgb(26, 137, 23);
  padding: 7px 20px 9px;
  font-size: 16px;
  box-sizing: border-box;
  border: none;
  border-radius: 99em;
  color: rgba(255, 255, 255, 1);
  font-weight: 400;
  cursor: pointer;
`;
const Modal = styled.div`
  display: ${(props) => props.modaldisplay};
`;
export const Navlink = styled.li`
  color: ${(props) => {
    if (props.saved) {
      return "black";
    } else {
      return "rgba(117, 117, 117, 1)";
    }
  }};
  margin: 5%;
  margin-bottom: 1%;
  cursor: pointer;
`;
export const Navlink2 = styled(Navlink)`
  color: ${(props) => {
    if (props.saved) {
      return "rgba(117, 117, 117, 1)";
    } else {
      return "black";
    }
  }};
  margin: 5%;
  margin-bottom: 1%;
  cursor: pointer;
`;
export const List = () => {
  // const handlelistSaved = () => {
  //   if (!isSaved) {
  //     setisSaved(true);
  //   }
  // };
  const handlelisthighlight = () => {
    if (isSaved) {
      setisSaved(false);
    } else {
      setisSaved(true);
    }
  };
  const handleModal = () => {
    if (modal == "none") {
      setmodal("block");
    } else {
      setmodal("none");
    }
  };
  const [isSaved, setisSaved] = React.useState(true);
  const [modal, setmodal] = React.useState("none");
  return (
    <div
      style={{
        width: "50%",
      }}
    >
      <div className="top-box">
        <h1 className="list-head">Your list</h1>
        <Listbtn onClick={handleModal}>New list</Listbtn>
      </div>
      <div className="list-nav">
        <ul className="list-nav-group">
          <a>
            <Navlink
              onClick={handlelisthighlight}
              saved={isSaved}
              style={{ cursor: "pointer" }}
            >
              {" "}
              saved
            </Navlink>
          </a>
          <a>
            <Navlink2 onClick={handlelisthighlight} saved={isSaved}>
              highlights
            </Navlink2>
          </a>
        </ul>
      </div>
      <div> {isSaved ? <Saved /> : <Highlight />}</div>

      <Modal modaldisplay={modal}>
        <div
          style={{
            width: "80%",
            height: "80vh",
            background: "white",
            boxShadow: "rgb(0 0 0 / 15%) 0px 2px 10px",
            display: "flex",
            position: "absolute",
            flexDirection: "column",
            alignItems: "center",
            top: "115px",
            zIndex:"2000"
          }}
        >
          <h1>Create new list</h1>
          <input
            type="text"
            value=""
            placeholder="Give it a name"
            style={{
              width: "300px",
              height: "25px",
              border: "none",
              borderBottom: "1px solid #dcdc",
              marginTop: "5%",
            }}
          />
          <a
            style={{
              color: "rgba(26, 137, 23, 1)",
              marginTop: "5%",
            }}
          >
            Add description
          </a>
          <div style={{ marginTop: "10%" }}>
            <Listbtn>Create</Listbtn>
          </div>
        </div>
      </Modal>
    </div>
  );
};
