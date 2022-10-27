import React from 'react';
import Header from './components/header';
import UncontrolledExample from './components/carrossel';
import Article from './components/article';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <UncontrolledExample />
      <Article />
    </div>
  );
}

export default App;