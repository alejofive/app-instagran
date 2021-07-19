import React, { useEffect, useState } from 'react'
import './index.css'


import { BsList } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { BsChat } from 'react-icons/bs'
import { BsCursor } from 'react-icons/bs'
import { BsFillBookmarkFill } from 'react-icons/bs'

const Posts = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:4000/posts')
        .then(response => response.json())
        .then(data => {
          setPosts(data)
          setLoading(false)
        })
    }, 3000)
  }, [])

  if (loading)
    return <div style={{ color: 'white' }}>Loading</div>

  return (
    <section className="posts">
      {posts.map(post => (
        <div className="post">
          <header className="post-header">
            <div className="post-user">
              <img src={post.imgUser} alt="" />
              <h2>{post.user}</h2>
            </div>
            <div className="post-menu">
              <button><BsList /></button>
            </div>
          </header>

          <img src={post.imgPost} alt="" className="post-image" />

          <div className="post-actions">
            <div>
              <button><BsHeart /></button>
              <button><BsChat /></button>
              <button><BsCursor /></button>
            </div>

            <div className='post-caption-boton'><button><BsFillBookmarkFill /></button></div>
          </div>

          <div className="post-likes">
            <div className='post-likes-img'>
              {post.likes.images.map(url => <img src={url} alt="" />)}
            </div>
            <p>Le gusta a <strong>{post.likes.lastUser}</strong> y <strong>{post.likes.number} personas más</strong></p>
          </div>

          <p className="post-caption">
            <a href="#/">Sidney</a> Lorem ipsum dolor sit amet consectetur...
            <button>más</button>
          </p>

          <div className="post-comments">
            <button className='padding'>Ver los 15 Comentarios</button>
            <div className="post-comment">
              <div className='post-comment-items'>
                <a href="#/">Sidney</a>
                <p>Amigos toda la ropa es linda</p>
              </div>
              <p className='comment-horas'>Hace 23 horas</p>
            </div>
            <div className='post-comentario-escribir'>
              <div className='post-comentario-escribir-img'>
                <img src="/images/image.jpg" alt="" />
                <input type="text" placeholder='Escribe un comentario' />
              </div>
              <div >
                <button><BsHeart /></button>
                <button><BsHeart /></button>
                <button><BsHeart /></button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
export default Posts