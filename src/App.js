import React, { Component } from 'react';
import './App.css';
import getData from './data.js';
import Carousel from './Carousel';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      curMovieIndex: 0,
    }
  }


  componentDidMount(){
    getData((data) => {
      console.log(data);
      this.setState({data})
    });
  }

  render() {
    var imageLink = this.state.data ? this.state.data[this.state.curMovieIndex].pictures.sizes[2].link : null;
    var movieDesc = this.state.data ? this.state.data[this.state.curMovieIndex].description : null;
    var movieName = this.state.data ? this.state.data[this.state.curMovieIndex].name : null;
    var movieLink =  this.state.data ? this.state.data[this.state.curMovieIndex].link : null;

    console.log(this.state.data);
    return (
      this.state.data && 
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
  
        <div className="row" id="bottom-box">
          <div className="left-panel">
            <h1>Customize the playback experience.</h1>
            <p>
            Optimize your experience with a fully customizable player (with SDKs), and third-party links for web, mobile, or TV.
            </p>
          </div>
          <div className="right-panel">
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
        <Carousel
          imageLink={imageLink}
          movieDesc={movieDesc}
          movieName={movieName}
          movieLink={movieLink}
          leftArrow={() => {
            if (this.state.curMovieIndex > 0) {
              this.setState({curMovieIndex: this.state.curMovieIndex - 1})
            }
          }}
          rightArrow={() => {
            if (this.state.curMovieIndex < this.state.data.length - 1) {
              this.setState({curMovieIndex: this.state.curMovieIndex + 1})
            }        
          }}   
        /> 
      </div>
    )
  }
}


export default App;
