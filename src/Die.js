import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  static defaultProps = {
    side: 'six'
  };
  render() {
    return (
      <div className='Die'>
        <i className={`fas fa-dice-${this.props.side}`}></i>
      </div>
    );
  }
}

export default Die;
