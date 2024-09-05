import React, { Fragment, useState } from "react";
import "./App.css";
import Html2Canvas from "./components/Html2Canvas";
import ScreenshotApi from "./components/ScreenshotApi";

function App() {
  const [compType, setCompType] = useState("Menu");
  const toggleComponent = (type) => {
    setCompType(type)
  };
  return (
    <div className="MenuWrapper">
      {compType === "Menu" && (
        <Fragment>
          <button onClick={() => toggleComponent("html")}>HTML 2 Canvas</button>
          <button onClick={() => toggleComponent("snap")}>Screenshot API</button>
        </Fragment>
      )}
      {compType === "html" && <Html2Canvas toggleComponent={toggleComponent} />}
      {compType === "snap" && <ScreenshotApi toggleComponent={toggleComponent} />}
    </div>
  );
}

export default App;
