import React from 'react';
import './App.css';
import Testimonio from './components/testimonio';

function App() {
  return (
    <div className="App">
      <div className='main-wrapper'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonio
          nombre='Emma Bostian '
          pais='Sweden'
          imagen='Emma'
          cargo='Software Engineer'
          empresa='Spotify'
          testimonio={<>I have always struggled with learning JavaScript. I have taken many courses but<strong> freeCodeCamp's course was the one which stuck.</strong>  Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.</>}/>
          <Testimonio
          nombre='Shawn Wang '
          pais='Singapore'
          imagen='Shawn'
          cargo='Software Engineer'
          empresa='Amazon'
          testimonio={<>Its scary to change careers. <strong>I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp</strong>. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.</>}/>
          <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='Sarah'
          cargo='Software Engineer'
          empresa='ChatDesk'
          testimonio={<React.Fragment><span className='bold'>freeCodeCamp was the gateway to my career as a software developer</span>.The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.</React.Fragment>}/>
      </div>
    </div>
  );
}

export default App;
