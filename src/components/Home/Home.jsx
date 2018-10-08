import React, { Component } from 'react';
import Header from '../Header/Header'
import aba from './pics/aba.jpg'
import cny from './pics/cny.jpeg'
import grad from './pics/grad.jpg'
import grad2 from './pics/grad2.jpg'
import sleep from './pics/sleep.jpg'
import reno from './pics/reno.jpeg'
import flower from './pics/flower.jpg'
import Gallery from '../Gallery/Gallery'
import sf from './pics/sf.jpg'
import talk from './pics/talk.jpg'
import cat from './pics/cat.jpg'



import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
      <div>
        Hey hey! Here's some photos that I like
      </div>
      <div className="masonry">
        <Gallery element={aba} />
        <Gallery element={cny} />
        <Gallery element={grad} />
        <Gallery element={grad2} />
        <Gallery element={sleep} />
        <Gallery element={reno} />
        <Gallery element={flower} />
        <Gallery element={sf} />
        <Gallery element={talk} />
        <Gallery element={cat} />
      </div>
      </div>
    );
  }
}

export default Home;