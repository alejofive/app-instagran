import React from 'react'
import './index.css'
import Header from '../../components/Header'
import Stories from '../../components/Stories';
import Posts from '../../components/Posts';


const Home = () => (
  <div className='home'>
    <Header />
    <Stories />
    <Posts />
  </div>
)

export default Home;