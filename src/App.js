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

import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";


export default function App() {
  return (
    <Router>
      <div className='centrar'>
        <footer>
          <Link to="/">
            <BsFillHouseDoorFill />
          </Link>
          <Link to="/Search">
            <BsSearch />
          </Link>
          <a href="">
            <BiMovie />
          </a>

          <a href="">
            <AiOutlineShopping />
          </a>

          <Link to="/User">
            <img src='/images/image.jpg' alt="" />
          </Link>
        </footer>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Search" component={Search} />
          <Route exact path="/User" component={User} />
        </Switch>
      </div>
    </Router>
  );
}
