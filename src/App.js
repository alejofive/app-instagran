import React from "react";
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import User from "./pages/User";
import Search from "./pages/Search";
import Menu from "./components/Menu";




export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/user" component={User} />
      </Switch>
      <Menu />
    </Router>
  );
}
