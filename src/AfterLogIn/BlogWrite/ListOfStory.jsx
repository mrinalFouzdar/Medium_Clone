import React from "react";

import styled from "styled-components";
import Published from "./Published";
import Responses from "./Responses";
import Drafts from "./Drafts";

const Main = styled.div`
  .main1 {
    width: 95vh;
    display: flex;
    border-bottom: 1px solid rgba(117, 117, 117, 1);
    box-sizing: border-box;
  }
  div {
    margin-right: 50px;
    margin-bottom: 15px;
    cursor: pointer;
  }

  .pblis {
    /* margin-bottom:6px ; */
    color: ${(props) =>
      props.color === "Pablished" ? "black" : "rgba(117, 117, 117, 1)"};
    /* border-bottom:${(props) =>
      props.color === "Pablished" ? "1px solid black" : "none"} ; */
  }
  .resp {
    color: ${(props) =>
      props.color === "Responses" ? "black" : "rgba(117, 117, 117, 1)"};
    /* border-bottom:${(props) =>
      props.color === "Responses" ? "1px solid black" : "none"} ; */
  }
  .draf {
    color: ${(props) =>
      props.color === "Drafts" ? "black" : "rgba(117, 117, 117, 1)"};
    /* border-bottom:${(props) =>
      props.color === "Drafts" ? "1px solid black" : "none"} ; */
  }
`;

export default function ListOfStory() {
  const [publ, setPubl] = React.useState("Pablished");

  const handelRes = () => {
    setPubl("Responses");
  };
  const handleDrafts = () => {
    setPubl("Drafts");
  };
  const handlePablished = () => {
    setPubl("Pablished");
  };

  return (
    <>
      <Main color={publ}>
        <div className="main1">
          <div onClick={handlePablished} className="pblis" color={publ}>
            {/* <a href="#"  > */}
            Pablished
            {/* </a> */}
          </div>
          <div onClick={handelRes} className="resp">
            Responses
          </div>
          <div onClick={handleDrafts} className="draf">
            Drafts
          </div>
        </div>

        <div>
          {publ === "Pablished" ? (
            <Published />
          ) : publ === "Responses" ? (
            <Responses />
          ) : (
            <Drafts />
          )}
        </div>
      </Main>
    </>
  );
}
