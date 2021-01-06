import React from 'react';
import logo from './logo.svg';
import './App.css';
import WordByLetter from './WordByLetter';
import {SearchBox} from './Components/SearchBox';

function App() {
  
  console.log(WordByLetter);

  return (
    <div className="App">
      <SearchBox/>
    </div>
  );
}

export default App;
