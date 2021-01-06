import React, { Component } from 'react';
import Photo from './Photo';

class PhotoGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {currentImage: 0}
    }

    handlePhotoChange = () => {
        this.setState(prevState => {
           return {currentImage: prevState.currentImage + 1}
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
        )
    }
}

export default PhotoGallery