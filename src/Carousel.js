import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import './App.css';

const Carousel = ({
  imageLink,
  movieName,
  movieDesc,
  leftArrow,
  rightArrow,
  buyLink,
  trailerLink
}) => {
  const bgStyle = {
    backgroundImage: 'url(' + imageLink + ')'
  }
  return (
    <div className="movie-picker">
      <div className="bg-img" style={bgStyle}></div>
      <div className="row-carousel">
        <FontAwesomeIcon 
          className="arrow"
          onClick={leftArrow} 
          icon={faChevronRight} 
          size="5x" 
          color="gray"
          rotation={180}
        />
        <div className="left-panel-carousel">
          <img src={imageLink} alt="pic-2"></img>
        </div>

        <div className="right-panel-carousel">
          <h1>{movieName}</h1>
          <p>{movieDesc}
          </p>
          <div className="button">
            <Button href={buyLink} variant="contained" color="primary" style={{padding: "8px", margin: "4px"}}>Buy Now</Button>
            <Button href={trailerLink} variant="outlined" style={{padding: "8px", margin: "4px"}}>Watch Trailer</Button>
          </div>
        </div>
        <FontAwesomeIcon 
          className="arrow"
          onClick={rightArrow} 
          icon={faChevronRight} 
          size="5x" 
          color="gray" 
        /> 
      </div>
    </div>
  );
}

export default Carousel;
