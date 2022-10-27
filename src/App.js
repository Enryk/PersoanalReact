import React from 'react';
import Header from './components/header';
import UncontrolledExample from './components/carrossel';
import ContainerOutsideExample from './components/article';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <UncontrolledExample />
      <ContainerOutsideExample />
    </div>
  );
}

export default App;