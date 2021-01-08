import React from 'react';
import PhotoGallery from './PhotoGallery';

function App() {
  const images = [
  {
    'url': 'https://www.elmwoodparkzoo.org/wp-content/uploads/2018/05/1920x1080-Ocelotedit.jpg',
    'caption': 'Ocelot'
  },
  {
    'url': 'https://www.jocooks.com/wp-content/uploads/2020/10/club-sandwich-1-9.jpg',
    'caption': 'Club Sandwich'
  },
  {
    'url': 'https://www.sciencemag.org/sites/default/files/styles/article_main_image_-_1280w__no_aspect_/public/dogs_1280p_0.jpg?itok=6jQzdNB8',
    'caption': 'Dogs'
  }
];
  return (
    <div>
      <PhotoGallery images={images} />
    </div>
  );
}

export default App;
