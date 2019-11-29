import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import Button from '@material-ui/core/Button';
import './App.css';

const Carousel = ({imageLink, movieName, movieDesc, leftArrow, rightArrow, movieLink}) => {
  return (
    <div className="movie-picker">
      <div className="row">
        <FontAwesomeIcon 
          onClick={leftArrow} 
          icon={faChevronRight} 
          size="5x" 
          color="lightBlue" 
          rotation={180}
        />
        <div className="left-panel">
          <img src={imageLink} alt="pic-2"></img>
        </div>

        <div className="right-panel">
          <h1>{movieName}</h1>
          <p>{movieDesc}
          </p>
          <Button href={movieLink} variant="contained" color="primary">Buy Now</Button>
          <Button href={movieLink} variant="outlined">Watch Trailer</Button>
        </div>
        <FontAwesomeIcon 
          onClick={rightArrow} 
          icon={faChevronRight} 
          size="5x" 
          color="lightBlue" 
        /> 
      </div>
    </div>
  );
}

export default Carousel;
