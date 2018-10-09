import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
    render() {
            return (
                <div>
                    <NavLink to='/personal-website/'>Home </NavLink>
                    <NavLink to='/personal-website/about'>About</NavLink>
                </div>
            )
        }
    
}

export default Navigation;