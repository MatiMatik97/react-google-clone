import React from "react";
import "./App.css";
import Home from "./pages/Home/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./pages/Search/SearchPage";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* SEARCH PAGE */}
          <Route path="/search">
            <SearchPage/>
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
