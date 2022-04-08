import React from "react";
import "./Acordian.Module.css";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const Acordian = ({ title, active, setActive, ans }) => {
  const handleClose = () => {
    setActive("");
    console.log("jii", active);
  };
  return (
    <div className="acordian">
      <div className="acordianHeading">
        <div className="container">
          <p>{title}</p>
          <span>
            {active === title ? (
              <BsArrowUp onClick={() => handleClose()} />
            ) : (
              <BsArrowDown onClick={() => setActive(title)} />
            )}
          </span>
        </div>
      </div>
      <div className={(active === title ? "show" : "") + "acordianContent"}>
        <div className="container">
          <p>{ans}</p>
        </div>
      </div>
    </div>
  );
};

export { Acordian };
