import React from 'react';
import logo from './logo.svg';
import './App.css';
import getData from './data.js';

function App() {
  const imgSources = [
    "https://i.vimeocdn.com/video/595198868_505x160.jpg",
    "https://i.vimeocdn.com/video/590587169_530x315.jpg",
    "https://i.vimeocdn.com/video/589972810_530x315.jpg"
  ]

  var res =  getData((data) => {
    console.log(data)
    return data;
  });

  console.log(res);

  return (
    <div className="main-container">
      <div className="row" id="top-box">
        <div className="left-panel">
          <img src="https://i.vimeocdn.com/video/595198868_505x160.jpg" alt="pic-1"></img>
        </div>
        <div className="right-panel">
          <h1>Host in the highest quality.</h1>
          <p>
            Enjoy a full-featured upload API: privacy controls, flexible storage, and automatic transcoding to host videos in the highest quality.
          </p>
        </div>
      </div>

      <div className="bottom-box">
        <div className="row">
          <div className="right-panel">
            <h1>Customize the playback experience.</h1>
            <p>
            Optimize your experience with a fully customizable player (with SDKs), and third-party links for web, mobile, or TV.
            </p>
          </div>
          <div className="left-panel">
          <img src="https://i.vimeocdn.com/video/589972810_530x315.jpg" alt="pic-2"></img>
          </div>
        </div>
        <div className="row">
          <div className="left-panel">
            <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" alt="pic-1"></img>
          </div>
          <div className="right-panel">
            <h1>Host in the highest quality.</h1>
            <p>
              Enjoy a full-featured upload API: privacy controls, flexible storage, and automatic transcoding to host videos in the highest quality.
            </p>
          </div>          
        </div>
      </div>
      <div className="movie-picker">
        <div className="row">
          <div className="left-panel">
            <img alt="pic-2"></img>
          </div>
          <div className="right-panel">
            <h1>Title</h1>
            <p>Description
            </p>
            <button>Button 1</button>
            <button>Button 2</button>
          </div>
          
        </div>
      </div>
    </div>
    
  );
}


export default App;
