import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGallery extends Component {
    constructor(props) {
        super(props);
        this.state = {currentImage: 0};
    }

    isLastImage (currentImage) {
        return currentImage === this.props.images.length - 1;
    }

    handlePhotoChange = () => {
        this.setState(prevState => {
           const nextImage = this.isLastImage(prevState.currentImage) ? 0 : prevState.currentImage + 1;
           return {currentImage: nextImage};
        })
    }

    render() {
        return (
            <div className="photo-gallery">
                <Photo
                    handlePhotoClick= {this.handlePhotoChange}
                    image={this.props.images[this.state.currentImage]}
                />
            </div>
        );
    }
}

export default PhotoGallery;
