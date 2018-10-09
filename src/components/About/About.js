import React, { Component } from 'react';
import Image from 'react-image-resizer';
import kelvin from './kelvin.jpeg';
import aba from './ABA-logo.png';
import codebase from './codebase-text-logo.png';
import csm from './TopLogo1.png';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className='about-container'>
        <div className='about'>
          <img src={kelvin} />
        </div>
        Hello! My name is Kelvin, and I'm sophomore at UC Berkeley studying CS and(?) Business. I'm still learning and 
        figuring out my life, but I'm hoping along the way I'll meet some cool people! 

        I'm currently part of a couple clubs, CodeBase and CSM, where I do a lot of work learning and teaching CS.

        <div className='club-container' > 
          <div className='club-wrap'>  
            <img className='club' src={aba} />
            <p class='club-description'>hello this is aba</p>
          </div>

          <div className='club-wrap'>  
            <img className='club' src={csm} />
            <p class='club-description'>hello this is csm</p>
          </div>

          <div className='club-wrap'>  
            <img className='club' src={codebase} />
            <p class='club-description'>hello this is codebase</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;