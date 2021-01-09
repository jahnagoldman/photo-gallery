import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable'
import { PropTypes } from 'prop-types';
import Photo from './Photo';
import './PhotoGallery.css';

function PhotoGallery(props) {
  const [index, setIndex] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  function goToNext () {
    isLastImage() ? setIndex(0) : setIndex(index + 1);
  }

  function goToPrevious () {
    isFirstImage() ? setIndex(props.images.length - 1) : setIndex(index - 1);
  }

  function isLastImage () {
    return index === props.images.length - 1;
  }

  function isFirstImage () {
    return index === 0;
  }

  return (
    <div {...handlers}>
      {!props.images || props.images.length === 0
        ? <div className="NoPhotos">No photos!</div>
        : <Photo handlePhotoClick={() => goToNext()} image={props.images[index]}/>
      }
    </div>
  );
}

PhotoGallery.propTypes = {
  images: PropTypes.array
};

export default PhotoGallery;
