import React from 'react'
import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className='centrar'>
      <footer>
        <Link to="/">
          <BsFillHouseDoorFill />
        </Link>
        <Link to="/search">
          <BsSearch />
        </Link>
        <a href="#/">
          <BiMovie />
        </a>

        <a href="#/">
          <AiOutlineShopping />
        </a>

        <Link to="/user">
          <img src='/images/image.jpg' alt="" />
        </Link>
      </footer>
    </div>
  )
}

export default Menu
