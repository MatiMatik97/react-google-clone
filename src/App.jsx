import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* SEARCH PAGE */}
          <Route path="/search">
            <h1>Search</h1>
          </Route>
          {/* HOME PAGE */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
