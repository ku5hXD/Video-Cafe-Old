import React from "react";

import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { __RouterContext } from "react-router";
import Upload from "./components/Upload";
import Home from "./components/Home";
import Video from "./components/Video";
import StartScreen from "./components/StartScreen";


function App() {

  return (
    <Router>
      <div style={{ backgroundColor: "#181818" }}>
        <Switch>
          <Route exact path="/" component={StartScreen}></Route>
          <Route exact path="/home/*" component={Home}></Route>
          <Route exact path="/upload" component={Upload}></Route>
          <Route exact path="/video/:videoId" component={Video}></Route>
        </Switch>
      </div>
    </Router>
  );

}

export default App;
