import React from 'react'
import './index.css'
import { IoAddCircle } from 'react-icons/io5'

const Stories = () =>
  <section className="stories">
    <div className="story">
      <div className='story-image'>
        <img src="/images/image.jpg" alt="" />
        <button>
          <IoAddCircle />
        </button>
      </div>
      <h3>Tu Historia</h3>

    </div>
    {[0, 1, 2, 3, 4, 5].map((story, key) =>
      <div key={key} className="story">
        <div className='story-image'>
          <img src="/images/image.jpg" alt="" />
        </div>
        <h3>Tu Historia</h3>
      </div>)}
  </section>

export default Stories
