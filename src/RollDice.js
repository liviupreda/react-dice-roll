import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'two'
    };
  }

  roll = () => {
    const sides = ['one', 'two', 'three', 'four', 'five', 'six'];
    let rand1 = sides[Math.floor(Math.random() * 6)],
      rand2 = sides[Math.floor(Math.random() * 6)];
    this.setState({ die1: rand1, die2: rand2 });
  };

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-Dice'>
          <Die side={this.state.die1} />
          <Die side={this.state.die2} />
        </div>
        <div>
          <button className='RollDice-button' onClick={this.roll}>
            Roll da dice 'mon
          </button>
        </div>
      </div>
    );
  }
}

export default RollDice;
