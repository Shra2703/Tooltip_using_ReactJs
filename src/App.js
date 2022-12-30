import React from "react";
import Button from "./Buttons";
import "./index.css";

function App() {
  return (
    <>
      <div className="main_div">
        <div className="inner_div">
          <h1 className="heading_h1">My customize tooltip</h1>
          <div className="customize_buttons">
            <Button value = {"Top"}/>
            <Button value = {"Right"}/>
            <Button value = {"Left"}/>
            <Button value = {"Bottom"}/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
