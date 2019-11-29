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
    const getMovieInfo = () => {
      if (this.state.data) {
        return {
          movieDesc: this.state.data[this.state.curMovieIndex].description,
          movieName: this.state.data[this.state.curMovieIndex].name,
          movieLink: this.state.data[this.state.curMovieIndex].link,
          buyLink: this.state.data[this.state.curMovieIndex].buy.link,
          trailerLink: this.state.data[this.state.curMovieIndex].trailer.link,
          imageLink: this.state.data[this.state.curMovieIndex].pictures.sizes[2].link
        }
      }
      return {};
    }

    const {
      movieDesc,
      movieName,
      movieLink,
      buyLink,
      trailerLink,
      imageLink
    } = getMovieInfo();

    return (
      this.state.data && 
      <div className="main-container">
        <Carousel
          imageLink={imageLink}
          movieDesc={movieDesc}
          movieName={movieName}
          movieLink={movieLink}
          buyLink={buyLink}
          trailerLink={trailerLink}
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

        <div id="bottom-box">
          <div className="row">
            <div className="left-panel" id="middle-row">
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
              <img src="https://i.vimeocdn.com/video/590587169_530x315.jpg" alt="pic-3"></img>
            </div>
            <div className="right-panel">
              <h1>Host in the highest quality.</h1>
              <p>
                Enjoy a full-featured upload API: privacy controls, flexible storage, and automatic transcoding to host videos in the highest quality.
              </p>
            </div>          
          </div>
        </div>
      </div>
    )
  }
}


export default App;
