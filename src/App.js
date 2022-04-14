import React from "react";
import Header from "./components/Header";

import DragPost from "./components/DragPost";
import AllFeed from "./components/AllFeed";
import { useState } from "react";
import "./App.css";

function App() {
  let [upload, setUpload] = useState(false);

  return (
    <div className="App">
      <Header upload={upload} setUpload={setUpload} />
      {upload === true ? (
        <DragPost upload={upload} setUpload={setUpload} />
      ) : null}
      <AllFeed />
    </div>
  );
}

export default App;
