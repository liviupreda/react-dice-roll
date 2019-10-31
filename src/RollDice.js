import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  render() {
    return (
      <div className='RollDice'>
        <Die />
        <Die />
        <button className='RollDice-button'>Roll da dice 'mon</button>
      </div>
    );
  }
}

export default RollDice;
