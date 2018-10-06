import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        {this.props.label}
      </div>
    );
  } 
}

export default Header;