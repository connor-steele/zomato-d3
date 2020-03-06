import React from "react";
import "./styles/main.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home.js";
import MissThang from "./components/MissThang";

function App() {
  return (
    <Router className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/missthang" component={MissThang} exact />
      </Switch>
    </Router>
  );
}

export default App;
