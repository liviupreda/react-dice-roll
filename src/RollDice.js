import React, { Component } from 'react';
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      die1: 'five',
      die2: 'five',
      rolling: false
    };
  }

  roll = () => {
    const sides = ['one', 'two', 'three', 'four', 'five', 'six'];
    let rand1 = sides[Math.floor(Math.random() * 6)],
      rand2 = sides[Math.floor(Math.random() * 6)];
    this.setState({ die1: rand1, die2: rand2, rolling: true });
    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  };

  render() {
    return (
      <div className='RollDice'>
        <div className='RollDice-Container'>
          <Die side={this.state.die1} rolling={this.state.rolling} />
          <Die side={this.state.die2} rolling={this.state.rolling} />
        </div>
        <button
          className='RollDice-button'
          onClick={this.roll}
          disabled={this.state.rolling}
        >
          {this.state.rolling ? "Is rollin' 'mon!" : "Roll da dice 'mon!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
