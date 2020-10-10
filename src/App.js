import React from 'react';
import logo from './logo.svg';
import './App.css';
// Own Make
import Hello from './Components/Hello';
import Welcome from './Components/Welcome';
import Bootstrap from './Components/Bootstrap';
import Arrow from './Components/Arrow';
import State from './Components/State';
import SetState from './Components/SetState';
import IfElse from './Components/IfElse';
import Condition from './Components/Condition';
import Refresh from './Components/Refresh';
import NewDemo from './Components/NewDemo';
import AnotherDemo from './Components/AnotherDemo';
import Form from './Components/Form';

function App() {
  return (
    <div className="App">
      <Hello name="Mohammad" age="34"></Hello>

      <Welcome abc="I am class 1"></Welcome>   

      <Bootstrap></Bootstrap>
      <Arrow></Arrow>
      <State></State>
      <SetState></SetState>
      <IfElse></IfElse>
      <Condition></Condition>
      <Refresh></Refresh>
      <NewDemo></NewDemo>
      <AnotherDemo></AnotherDemo>
      <Form></Form>
    </div>
  );
}

export default App;
