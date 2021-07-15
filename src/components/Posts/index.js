import React from 'react'
import './index.css'


import { BsList } from 'react-icons/bs'
import { BsHeart } from 'react-icons/bs'
import { BsChat } from 'react-icons/bs'
import { BsCursor } from 'react-icons/bs'
import { BsFillBookmarkFill } from 'react-icons/bs'

const Post = () =>
    <section className="posts">
        <div className="post">
            <header className="post-header">
                <div className="post-user">
                    <img src='/images/image.jpg' alt="" />
                    <h2>Sidney</h2>
                </div>
                <div className="post-menu">
                    <button><BsList /></button>
                </div>
            </header>

            <img src="/images/image.jpg" alt="" className="post-image" />

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
                    <img src='/images/image.jpg' alt="" />
                    <img src='/images/image.jpg' alt="" />
                    <img src='/images/image.jpg' alt="" />
                </div>
                <p>Le gusta a <strong>luis</strong> y <strong>40 personas más</strong></p>
            </div>

            <p className="post-caption">
                <a href="#/">Sidney</a> Lorem ipsum dolor sit amet consectetur...
                <button>más</button>
            </p>

            <div className="post-comments">
                <button>Ver los 15 Comentarios</button>
                <div className="post-comment">
                    <div className='post-comment-items'>
                        <a href="#/">Sidney</a>
                        <p>Amigos toda la ropa es linda</p>
                        <button><i></i></button>
                    </div>
                    <p>Hace 23 horas</p>
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

        <div className="post">
            <header className="post-header">
                <div className="post-user">
                    <img src='/images/image.jpg' alt="" />
                    <h2>Sidney</h2>
                </div>
                <div className="post-menu">
                    <button><BsList /></button>
                </div>
            </header>

            <img src="/images/image.jpg" alt="" className="post-image" />

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
                    <img src='/images/image.jpg' alt="" />
                    <img src='/images/image.jpg' alt="" />
                    <img src='/images/image.jpg' alt="" />
                </div>
                <p>Le gusta a <strong>luis</strong> y <strong>40 personas más</strong></p>
            </div>

            <p className="post-caption">
                <a href="#/">Sidney</a> Lorem ipsum dolor sit amet consectetur...
                <button>más</button>
            </p>

            <div className="post-comments">
                <button>Ver los 15 Comentarios</button>
                <div className="post-comment">
                    <div className='post-comment-items'>
                        <a href="#/">Sidney</a>
                        <p>Amigos toda la ropa es linda</p>
                        <button><i></i></button>
                    </div>
                    <p>Hace 23 horas</p>
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
    </section>
export default Post