import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/home';

function App() {
  return (
    <div className="App">
    <Navbar className="navbar_container"/>
    <Home  className="home_container"/>
  
    </div>
  );
}

export default App;
