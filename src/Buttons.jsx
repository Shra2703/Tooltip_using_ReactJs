import React from "react";
import { useState } from "react";
import "./index.css";

const Button = (props) => {
  const [ishovered, setHovered] = useState(false);

  // callback function for onMouse enter and leave
  const onHover = () => {
    setHovered(true);
    console.log(props.id);
  };
  const onLeave = () => {
    setHovered(false);
    console.log("leave", props.id);
  };
  return (
    <>
      {/* button compoent */}
      <button
        style={{ backgroundColor: props.bgColor }}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
        className="tooltip"
      >
        Hover for {props.value}
        <span
          style={{ visibility: ishovered ? "visible" : "hidden" }}
          // className="tooltiptext top"
          className={`tooltiptext ${props.value}`}
        >
          {/* Thanks for Hovering ! I am a {props.value} position tooltip */}
          {props.content}
        </span>
      </button>
    </>
  );
};

export default Button;
