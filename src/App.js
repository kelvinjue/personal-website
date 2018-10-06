import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header/Header'
import Gallery from './components/Gallery/Gallery'
import './App.css';
import aba from './pics/aba.jpg'
import cny from './pics/cny.jpeg'
import grad from './pics/grad.jpg'
import grad2 from './pics/grad2.jpg'

import sleep from './pics/sleep.jpg'
import reno from './pics/reno.jpeg'
import flower from './pics/flower.jpg'


const images=[aba, cny, grad, sleep, reno];

class App extends Component {
  render() {
    return (
      <div className="scrolling-box">
        <header className="header-container">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="header-container">
            <Header label="hello friends" />
          </h1>
        </header>
        <div className="masonry">
          <Gallery element={aba} />
          <Gallery element={cny} />
          <Gallery element={grad} />
          <Gallery element={grad2} />
          <Gallery element={sleep} />
          <Gallery element={reno} />
          <Gallery element={flower} />
        </div>

        <div className='bio'>
        hello
        </div>
      </div>
    );
  }
}

export default App;
