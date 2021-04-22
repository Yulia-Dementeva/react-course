import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img src="https://sun9-26.userapi.com/impf/c848520/v848520707/17d659/oVusqQ_lGYs.jpg?size=810x1080&quality=96&sign=b349e57bb88e219d2d5a4dc65994e005&type=album"></img>
      </header>
      <nav className="nav">
        <div >
          <a>Profile</a>
        </div>
        <div >
          <a>Messages</a>
        </div>
        <div >
          <a>News</a>
        </div>
        <div >
          <a>Music</a>
        </div>
        <div >
          <a>Settings</a>
        </div>
      </nav>
      <div className="content"> 
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"></img>
        <div>
          ava
        </div>
        <div>
          my posts
          <div>
          new post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default App;
