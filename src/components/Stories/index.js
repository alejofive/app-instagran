import React, { useEffect, useState } from 'react'
import './index.css'
import { IoAddCircle } from 'react-icons/io5'

const Stories = () => {

  const [stories, setStories] = useState([])
  useEffect(() => {
    fetch('http://localhost:4000/stories')
      .then(response => response.json())
      .then(data => {
        setStories(data)
      })
  }, [])

  return (
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
      {stories.map((story, key) =>
        <div key={key} className="story">
          <div className='story-image'>
            <img src={story.img} alt="" />
          </div>
          <h3>{story.user}</h3>
        </div>)}
    </section>
  )
}

export default Stories
