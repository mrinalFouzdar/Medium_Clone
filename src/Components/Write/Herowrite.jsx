import React from "react";
import styled from "styled-components";
import "./Herowrite.Module.css";
import { Bluediv } from "../Membership/Hero-blue";

const Orangediv = styled(Bluediv)`
  background: #f24d2e;
  color: #222;
  display: flex;
  flex-direction: column;
  height: 100%;
  // padding-top: 7%;
  // padding-bottom: 5%;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: flex-start;
  padding-left: 2.5%;
  border-bottom: 1px solid black;
`;
const HeadingCustom1 = styled.h1`
margin-top: 0px;
    margin-bottom: 120px;
    font-family: 'Gt super text book', Georgia, sans-serif;
    color: rgb(0 0 0);
    font-size: 7.3vw;
    line-height: 100%;
    font-weight: 400;
    letter-spacing: -0.35vw;
}`;
const Para1 = styled.p`
margin-bottom: 0px;
font-family: 'Soehne web buch', sans-serif;
color: rgb(0 0 0);
font-size: 18px;
line-height: 127%;
font-weight: 400;
}`;
const AccessButton1 = styled.button`
font-family: "Soehne web buch", sans-serif;
  background: #fff;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: -0.2px;
  cursor: pointer;
  padding-right: 40px;
  padding-left: 40px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-style: bold;
  border: 1px solid #fff;
  border-radius: 20px;
  margin-top: 2%;
  &:hover {
    background: transparent;`;

export const Herowrite = () => {
  console.log("hallo");

  return (
    <div className="main-write-box">
      <div className="left-box">
        <Orangediv>
          <HeadingCustom1>
            Publish, grow, and <br />
            earn, all in one
            <br />
            place.
          </HeadingCustom1>
          <Para1>
            If you have a story to tell, knowledge to share, or a perspective to
            offer —<br /> welcome home. Here, your writing can thrive in a
            network
            <br />
            supported by millions of readers — not ads.
          </Para1>
          <AccessButton1>Start Writing</AccessButton1>
        </Orangediv>
      </div>
      <div className="right-box">
        <img
          // src="https://cdn.pixabay.com/photo/2016/10/29/23/44/decorative-1782008__340.png"
          src="https://cdn.pixabay.com/photo/2016/10/29/20/41/abstract-1781486__340.png"
          alt=""
        />
      </div>
    </div>
  );
};
