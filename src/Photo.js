function Photo(props) {      
    return (
        <img
            src={props.image.url}
            alt="new"
            onClick={props.handlePhotoClick}
        />
    );
}

export default Photo;
