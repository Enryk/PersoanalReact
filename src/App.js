import React from 'react';
import Header from './components/header';
// import ImagemCarousel from './components/carrossel';
import UncontrolledExample from './components/article';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      {/* <ImagemCarousel /> */}
      <UncontrolledExample />
    </div>
  );
}

export default App;