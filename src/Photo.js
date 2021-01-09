import React from 'react';
import { PropTypes } from 'prop-types';
import './Photo.css';

function Photo(props) {
  function isPhotoMissing () {
    return !props.image  || !props.image.url;
  }

  function isCaptionMissing () {
    return !props.image || !props.image.caption;
  }
  return (
    <div className="PhotoContainer">
      { isPhotoMissing()
        ?  <div className="BlankPhoto">No photo.</div>
        : <img src={props.image.url} alt="new" onClick={props.handlePhotoClick} />
      }

      <div className="PhotoCaption">{isCaptionMissing() ? '' : props.image.caption}</div>
    </div>
  );
}

Photo.propTypes = {
  image: PropTypes.object,
  handlePhotoClick: PropTypes.func
};

export default Photo;
