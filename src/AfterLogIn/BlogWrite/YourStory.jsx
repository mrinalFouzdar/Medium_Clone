import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import ListOfStory from "./ListOfStory";

const Main = styled.div`
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  /* margin:50px 100px 50px 200px ; */
  width: 45vw;
  padding-top: 80px;
  margin: auto;
  position: absolute;
  margin-left: 17vw;
  .mainDiv1 {
    display: flex;
    margin-bottom: 50px;
    align-items: center;
    box-sizing: border-box;
    /* justify-content:space-around ; */
  }
  .h1st {
    font-weight: x-bolder;
    font-size: 40px;
    /* font-stretch: condensed; */
  }
  .stories {
    margin-right: auto;
    width: 400px;
  }
  .WriteStory {
    display: flex;
    justify-content: space-around;
    width: 300px;
    align-items: center;
    margin-left: 60px;
  }
  .story {
    border: 1px solid black;
    border-color: rgba(26, 137, 23, 1);
    background-color: rgba(26, 137, 23, 1);
    color: white;
    width: 120px;
    text-align: center;
    box-sizing: border-box;
    height: 40px;

    align-items: center !important;
    padding-top: 9px;
    border-radius: 99em;
    cursor: pointer;
  }

  .import {
    background-color: white;
    color: black;
    border-color: black;
  }
`;

export default function YourStory() {
  const nevigatwriteBlog = useNavigate();
  const RouttoWriteBlog = () => {
    nevigatwriteBlog("/writeBlog");
  };
  return (
    <Main>
      <div className="mainDiv1">
        <div className="stories">
          <h1 className="h1st">Your Stories</h1>
        </div>
        <div className="WriteStory">
          <div className="story">
            <div onClick={RouttoWriteBlog}>Write a story</div>
          </div>
          <div className="story import">
            <div>Import a story</div>
          </div>
        </div>
      </div>
      <ListOfStory />
    </Main>
  );
}
