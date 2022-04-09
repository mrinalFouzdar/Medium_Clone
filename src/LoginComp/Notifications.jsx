import React from "react";
import styled from "styled-components";
import All from "./All";
import Responses from "./Responses";

const NotLink = styled.li`
  color: ${(props) => {
    if (props.all) {
      return "black";
    } else {
      return "rgba(117, 117, 117, 1)";
    }
  }};
  margin: 5%;
  margin-bottom: 1%;
  cursor: pointer;
`;
const NotLink2 = styled(NotLink)`
  color: ${(props) => {
    if (props.all) {
      return "rgba(117, 117, 117, 1)";
    } else {
      return "black";
    }
  }};
  margin: 5%;
  margin-bottom: 1%;
  cursor: pointer;
`;
const Notifications = () => {
  const handleResponses = () => {
    if (all) {
      setall(false);
    } else {
      setall(true);
    }
  };
  const [all, setall] = React.useState(true);
  return (
    <div
      style={{
        width: "45%",
        margin: "auto",
        position: "absolute",
        marginLeft: "15vw",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10%",
        }}
      >
        <h1
          style={{
            fontFamily: `sohne, "Helvetica Neue", Helvetica, Arial, sans-serif`,
            maxHeight: "52px",
            lineHeight: "52px",
            fontSize: " 42px",
            fontWeight: "700",
            color: "rgb(41 41 41)",
          }}
        >
          Notifications
        </h1>
      </div>
      <div
        style={{
          width: "100%",
          borderBottom: "1px solid #dcdcdc",
        }}
      >
        <ul
          style={{
            listStyle: "none",
            display: "flex",
          }}
        >
          <a
            style={{
              padding: "3%",
              cursor: "pointer",
            }}
          >
            <NotLink all={all} onClick={handleResponses}>
              All
            </NotLink>
          </a>
          <a
            style={{
              padding: "3%",
              cursor: "pointer",
            }}
          >
            <NotLink2 all={all} onClick={handleResponses}>
              Responses
            </NotLink2>
          </a>
        </ul>
      </div>
      <div>{all ? <All /> : <Responses />}</div>
    </div>
  );
};

export default Notifications;
