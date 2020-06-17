import React, { Component } from 'react';

export default class Palindrome extends Component {
  constructor() {
    super();

    this.state = {
      userInput: '',
      palindrome: ''
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }

  isPalindrome(userInput) {
    // N.B. Recursive algorithm via https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/using-recursion-to-determine-whether-a-word-is-a-palindrome
    if(userInput.length === 0 || userInput.length === 1) {
      this.setState({ palindrome: 'true' })
    } else {
      userInput.charAt(0) !== userInput.charAt(userInput.length - 1)
      ? this.setState({ palindrome: 'false' }) 
      : this.isPalindrome(userInput.substring(1, userInput.length - 1)) ;
    }
  }

  render() {
    return (
      // <p> Palindrome Component </p>
      <div className="puzzleBox palindromePB">
        <h4> Palindrome </h4>
        <input className="inputLine" onChange={ e => this.handleChange(e.target.value) }/>
        <button className="confirmationButton" onClick={ () => this.isPalindrome(this.state.userInput) }> Check </button>
        <span className="resultsBox"> Palindrome: { this.state.palindrome } </span>
      </div>
    )
  }
}