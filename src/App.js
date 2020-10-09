import React from 'react';
import logo from './logo.svg';
import './App.css';
// Own Make
import Hello from './Components/Hello';
import Welcome from './Components/Welcome';
import Bootstrap from './Components/Bootstrap';
import Arrow from './Components/Arrow';
import State from './Components/State';

function App() {
  return (
    <div className="App">
      <Hello name="Mohammad" age="34"></Hello>

      <Welcome abc="I am class 1"></Welcome>   

      <Bootstrap></Bootstrap>
      <Arrow></Arrow>
      <State></State>
    </div>
  );
}

export default App;
