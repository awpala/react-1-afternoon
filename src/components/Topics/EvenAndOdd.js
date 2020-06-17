import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignEvenAndOdds(userInput) {
    const arr = userInput.split(',');
    let evens = [];
    let odds = [];

    for (let i = 0; i < arr.length; i++) {
      const parsedInt = parseInt(arr[i], 10);
      parsedInt % 2 === 0 ? evens.push(parsedInt) : odds.push(parsedInt);
    }
    
    this.setState({ evenArray: evens, oddArray: odds })
  }

  render() {
    return (
      // <p> EvenAndOdd Component </p>
      <div className="puzzleBox evenAndOddPB">
        <h4>Evens and Odds</h4>
        <input className="inputLine" onChange= { e => this.handleChange(e.target.value) } />
        <button className="confirmationButton" onClick={ () => { this.assignEvenAndOdds(this.state.userInput) }}> Split </button>
        <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) }</span>
        <span className="resultsBox"> Odds: { JSON.stringify(this.state.oddArray) }</span>
      </div>
    )
  }
}