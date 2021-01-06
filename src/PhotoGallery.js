import React, { Component } from 'react';

class PhotoGallery extends Component {
    constructor(props) {
        super(props)
        this.state = {currentImage: 0}
    }
    render() {
        return (
            <div className="photo-gallery">
                <img 
                    src={this.props.images[this.state.currentImage].url}
                    alt="new"
                />
            </div>
        )
    }
}

export default PhotoGallery