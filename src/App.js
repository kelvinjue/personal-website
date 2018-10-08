import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Navigation from './components/Navigation'
import Header from './components/Header/Header'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header-container">
          <Header className='header-item'label="hello friends" />
        </div>
        {/* <div>
          <BrowserRouter>
            <div className='header-item'>
              <Navigation />
              <Route path='/home' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/contact' component={Contact}/>
            </div>
          </BrowserRouter>
        </div> */}
        <Router>
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/contact' component={Contact}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
