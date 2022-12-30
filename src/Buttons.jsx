import React from "react";

const Button = (props) => {
  return (
    <>
      <button style = {{backgroundColor : props.bgColor}}>
        Hover for {props.value}
      </button>
    </>
  );
};

export default Button;
