import React from 'react'
import './index.css'
import { GoDiffAdded } from 'react-icons/go'
import { BsHeart } from 'react-icons/bs'
import { RiMessengerLine } from 'react-icons/ri'


const Header = () => (
  <header className='header'>
    <img src="/images/logo.png" alt="" />
    <nav>
      <a href="#/"><GoDiffAdded /></a>
      <a href="#/"><BsHeart /></a>
      <a href="#/" className="icon-number"><RiMessengerLine /> <span>1</span></a>
    </nav>
  </header>
)

export default Header
