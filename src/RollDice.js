import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  render() {
    return (
      <div className='RollDice'>
        <Die />
        <Die />
      </div>
    );
  }
}

export default RollDice;
