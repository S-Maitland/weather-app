import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header.js';
import axios from 'axios';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <div>
      <h1>
        Text
      </h1>
      <Homepage/>
      <Header/>
    </div>
  );
}

export default App;