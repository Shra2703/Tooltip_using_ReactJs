import React from "react";

const Button = (props) => {
  return (
    <>
      <button>
        hover for {props.value}
      </button>
    </>
  );
};

export default Button;
