import React from 'react';
import { PropTypes } from 'prop-types';
function Photo(props) {      
    return (
        <img
            src={props.image.url}
            alt="new"
            onClick={props.handlePhotoClick}
        />
    );
}

Photo.propTypes = {
    image: PropTypes.object,
    handlePhotoClick: PropTypes.func
};

export default Photo;
