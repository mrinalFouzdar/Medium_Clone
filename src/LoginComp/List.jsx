import React from "react";
import styled from "styled-components";
import "./List.Module.css";
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
const Navlink = styled.li`
  color: rgba(117, 117, 117, 1);
  padding: 3%;
  cursor: pointer;
`;
const List = () => {
  const handlelistClick = (e) => {
    console.log(e.target);
  };
  return (
    <div
      style={{
        width: "50%",
      }}
    >
      <div className="top-box">
        <h1 className="list-head">Your list</h1>
        <Listbtn>New list</Listbtn>
      </div>
      <div className="list-nav">
        <ul className="list-nav-group">
          <Navlink onClick={(e) => handlelistClick(e)}>saved</Navlink>
          <li>
            <a>
              <div>highlights</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
