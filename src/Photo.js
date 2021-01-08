import React from 'react';
import { PropTypes } from 'prop-types';
import './Photo.css'

function Photo(props) {      
  return (
    <div className="Photo">
      <img
        src={props.image.url}
        alt="new"
        onClick={props.handlePhotoClick}
      />
      <div className="PhotoCaption">{props.image.caption}</div>
    </div>
  );
}

Photo.propTypes = {
  image: PropTypes.object,
  handlePhotoClick: PropTypes.func
};

export default Photo;
