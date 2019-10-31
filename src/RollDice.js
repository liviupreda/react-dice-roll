import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-Dice'>
          <Die />
          <Die />
        </div>
        <div>
          <button className='RollDice-button'>Roll da dice 'mon</button>
        </div>
      </div>
    );
  }
}

export default RollDice;
