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
          <Button value={"top"} bgColor={"pink"} id={1} content = {"Push harder today than yesterday if you want a different tomorrow"}/>

          <Button value={"right"} bgColor={"blue"} id={2} content = {"Prove them wrong"}/>

          <Button value={"left"} bgColor={"crimson"} id={3} content = {" Do it sometimes later becomes never"}/>

          <Button value={"bottom"} bgColor={"orange"} id={4} content = {"I'm not perfect but at least I am not fake."}/>
        </div>
      </div>
    </>
  );
}

export default App;
