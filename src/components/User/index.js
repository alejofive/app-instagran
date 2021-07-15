import React from 'react'
import './index.css'

import { BsList } from 'react-icons/bs'
import { BsPlusSquare } from 'react-icons/bs'
import { BsChevronDown } from 'react-icons/bs'
const User = () =>
    <div>
        <div className='nav-user'>
            <div className='iten-user'>
                <h1>alejofive</h1>
                <i><BsChevronDown /></i>
            </div>

            <div className='user-icon'>
                <button>
                    <BsPlusSquare />
                </button>
                <a href="">
                    <BsList />
                </a>

            </div>
        </div>
        <div className='espacio-user-nav'></div>


        <div className='perfil'>

            <img src='/images/image.jpg' alt="" />

            <div className='caja-text-followe'>
                <div>
                    <h3>33</h3>
                    <p>Post</p>
                </div>
                <div>
                    <h3>2.3 M</h3>
                    <p>Followers</p>
                </div>
                <div>
                    <h3>271</h3>
                    <p>Following</p>
                </div>
            </div>
        </div>

        <div className='user-name'>
            <p>Alejandro</p>
        </div>

        <div className='user-editar'>
            <button className='editar-item'>Edit Profile</button>
            <button className='editar-item2'><BsChevronDown /></button>
        </div>
    </div>

export default User