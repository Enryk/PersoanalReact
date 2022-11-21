import React from 'react';
import MainScreen from './screens/main';
import './App.css';
// import Exercicios from './components/pag_exercicio';
import Calula from './shared/calculoImc';


function App() {
  return (
    <div>
      <MainScreen />
      {/* <Exercicios /> */}
      <Calula />
    </div>
  );
}

export default App;