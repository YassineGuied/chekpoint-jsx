import logo from './logo.svg';
import imagesrc from './imageInSrc.jpg'
import Video from './video.mp4'
import './App.css';
import './style.css'

function App() {
  return (
  <body id="bd">
      <div id="main-div" style={{border: 'solid 1px black', maxWidth: '100vw', borderRadius: '5px 5px 5px 5px'}}>
          <h1 className="title-red">Chekpoint JSX</h1>
          <br />
          <img className="image" src={imagesrc} alt="imagesrc" />
          <br />
          <img className="image" src="/imageInPublic.jpg" />
          <br />
          <video id="video_home" width={320} height={240} controls>
          <source src={Video} type="video/mp4" />
          </video>
      </div>
  </body>
  );
}

export default App;
