import React from 'react'
import Header from '../../components/Header'
import Stories from '../../components/Stories';

const Home = () => (
  <div className='home'>
    <Header />
    <Stories />

    <section className="posts">
      <div className="post">
        <header className="post-header">
          <div className="post-user">
            <img src="" alt="" />
            <h2>Sidney</h2>
          </div>
          <div className="post-menu">
            <button><i></i></button>
          </div>
        </header>

        <img src="" alt="" className="post-image" />

        <div className="post-actions">
          <div>
            <button><i></i></button>
            <button><i></i></button>
            <button><i></i></button>
          </div>

          <button><i></i></button>
        </div>

        <div className="post-likes">
          <div>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
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
            <div>
              <a href="#/">Sidney</a>
              <p>Amigos toda la ropa es linda</p>
              <button><i></i></button>
            </div>
            <p>Hace 23 horas</p>
          </div>
        </div>
      </div>
    </section>

  </div>
)

export default Home;