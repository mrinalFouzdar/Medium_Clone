import React from "react";
import styled from "styled-components";
import "./Footer.Module.css";

const Footerdiv = styled.div`
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
`;
const Footer = () => {
  return (
    <Footerdiv>
      <div className="main-foot">
        <div>
          <img
            src="https://cdn-static-1.medium.com/sites/medium.com/membership/images/Medium-Logo-Black-RGB-1.svg"
            alt=""
          />
        </div>
        <div>
          <p className="para-foot">Every idea needs a Medium</p>
        </div>
        <div className="ul-list">
          <ul className="list-group">
            <li className="list-item">
              <a>About</a>
            </li>
            <li className="list-item">
              <a> Terms</a>
            </li>
            <li className="list-item">
              <a>Privacy </a>
            </li>
            <li className="list-item">
              <a>Help</a>
            </li>
          </ul>
        </div>
      </div>
    </Footerdiv>
  );
};

export default Footer;
