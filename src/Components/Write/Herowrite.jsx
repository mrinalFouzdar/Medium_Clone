import React from "react";
import styled from "styled-components";
import "./Herowrite.Module.css";
import {
  Bluediv,
  HeadingCustom,
  AccessButton,
  Para,
} from "../Membership/Hero-blue";

const Orangediv = styled(Bluediv)`
  background: #f24d2e;
  color: #222;
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-top: 7%;
  padding-bottom: 5%;
  text-align: left;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: flex-start;
  align-items: flex-start;
  padding-left: 5%;
  border: 1px solid black;
`;
export const Herowrite = () => {
  return (
    <div className="main-write-box">
      <div className="left-box">
        <Orangediv>
          <HeadingCustom>
            Publish, grow, and <br />
            earn, all in one
            <br />
            place.
          </HeadingCustom>
          <Para>
            If you have a story to tell, knowledge to share, or a perspective to
            <br />
            offer — welcome home. Here, your writing can thrive in a network
            <br />
            supported by millions of readers — not ads.
          </Para>
          <AccessButton>Start Writing</AccessButton>
        </Orangediv>
      </div>
      <div className="right-box">hello</div>
    </div>
  );
};
