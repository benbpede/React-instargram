import React, { useState } from "react";
import LoginPage from "./components/LoginPage";
import Header from "./components/Header";
import DragPost from "./components/DragPost";
import AllFeed from "./components/AllFeed";
import "./App.css";
import { Route, Switch } from "react-router-dom";

function App() {
  let [upload, setUpload] = useState(false);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/main">
          <Header upload={upload} setUpload={setUpload} />
          {upload === true ? (
            <DragPost upload={upload} setUpload={setUpload} />
          ) : null}
          <AllFeed />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
