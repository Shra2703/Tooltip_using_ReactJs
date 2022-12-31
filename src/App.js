import React from "react";
import Button from "./Buttons";
import "./index.css";

function App() {
  return (
    <>
      <div className="inner_div">
        <h1 className="heading_h1">My customize tooltip</h1>
        <div className="customize_buttons">
          {/* fetching alll the buttons from the button component */}
          <Button value={"top"} bgColor={"pink"} id={1} />

          <Button value={"right"} bgColor={"blue"} id={2} />

          <Button value={"left"} bgColor={"crimson"} id={3} />

          <Button value={"bottom"} bgColor={"orange"} id={4} />
        </div>
      </div>
    </>
  );
}

export default App;
