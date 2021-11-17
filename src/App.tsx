import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Components/Test';
import Search from './Components/Search';
import PropTest from './Components/PropTest';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

       
        <PropTest firstName={'alireza'} lastName={'gholami'} ></PropTest>
        <Test/>
        <Search/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Rea
        </a>
      </header>
    </div>
  );
}

export default App;
