// import logo from './logo.svg';
import './App.css';
import PhotoGallery from './PhotoGallery';
// import ocelot from './images/ocelot.jpg'
// import sunflower from './images/sunflower.jpg'

function App() {
  const images = [
  {
    'url': 'https://www.elmwoodparkzoo.org/wp-content/uploads/2018/05/1920x1080-Ocelotedit.jpg',
    'caption': 'picture 1'
  },
  {
    'url': 'https://www.jocooks.com/wp-content/uploads/2020/10/club-sandwich-1-9.jpg',
    'caption': 'picture 2'
  }
]
  return (
    <div className="App">

      <PhotoGallery images={images} />

    </div>
  );
}

export default App;
