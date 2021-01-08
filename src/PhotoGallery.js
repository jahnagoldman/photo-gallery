import React, { Component } from 'react';
import Photo from './Photo';
import { PropTypes } from 'prop-types';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {currentImageIndex: 0};
  }

  isLastImage (currentImageIndex) {
    return currentImageIndex === this.props.images.length - 1;
  };

  handlePhotoChange = () => {
    this.setState(prevState => {
      const nextImageIndex = this.isLastImage(prevState.currentImageIndex) ? 0 : prevState.currentImageIndex + 1;
      return {currentImageIndex: nextImageIndex};
    })
  }

  render() {
    return (
      <div className="photo-gallery">
        {!this.props.images || this.props.images.length === 0
          ? <h1>No photos!</h1>
          : <Photo handlePhotoClick= {this.handlePhotoChange} image={this.props.images[this.state.currentImageIndex]}/>
        }
      </div>
    );
  }
}

PhotoGallery.propTypes = {
  images: PropTypes.array
};

export default PhotoGallery;
