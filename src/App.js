import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Navigation from './components/Navigation'
import Header from './components/Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="header-container">
              <div className='header-item'>
                <Navigation />
              </div>
            </div>
            <Route exact path='/personal-website/' component={Home}/>
            <Route path='/about' component={About}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
