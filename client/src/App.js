import React from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home.js";
import Profile from "./components/Profile.js";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
