import React from 'react'
import './index.css'
import Header from '../../components/Header'
import Stories from '../../components/Stories';
import Post from '../../components/Posts';

import { BsFillHouseDoorFill } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BiMovie } from "react-icons/bi";
import { AiOutlineShopping } from "react-icons/ai";


const Home = () => (
  <div className='home'>
    <Header />
    <Stories />
    <Post />
  </div>

)

export default Home;