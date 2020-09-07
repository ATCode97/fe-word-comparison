import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { anagramDetector, palindromeDetector } from "../spec/utils";

class Comparison extends Component {
  state = {
    primaryWord: "",
    secondaryWord: "",
    isAnagram: false,
    isPalindrome: false,
  };

  //1. input box 1 needs to set state of word one with event.target.value (done)
  //2. input box 2 needs to set state of word 2 with event.target.value (done)
  //3. Button 1 has a onclick that will trigger the test for anagram util function, needs a prevent default
  //4. Button 2 has a onClick that will trigger the test for palindrome util function,  needs a prevent default
  //5. Both of the utils functions will use the value in state as arguments (done)
  //6. Somehow display the result???? Using conditional rendering, if(isAnagram===true), render(true page)?????? (todo)
  //7 Figure out the POST request? to work somehow

  handlePrimaryInput = (event) => {
    //this will set the state of the primary word key

    this.setState({
      primaryWord: [event.target.value],
    });
  };

  handleSecondaryInput = (event) => {
    this.setState({
      secondaryWord: [event.target.value],
    });
  };

  //anagram function does work but need to be string input by primaryWord[0]

  handlePrimaryClick = () => {
    const { primaryWord, secondaryWord } = this.state;
    //needs a prevent default
    if (anagramDetector(primaryWord[0], secondaryWord[0]) === true) {
      this.setState({ isAnagram: true }); //setState is always one async cycle late
    } else {
      console.log("this word is not a Anagram!");
    }
  };

  handleSecondaryClick = () => {
    //needs a prevent default
    const { primaryWord, secondaryWord } = this.state;
    if (palindromeDetector(primaryWord[0], secondaryWord[0]) === true) {
      this.setState({ isPalindrome: true });
    } else {
      console.log("this word is not a Palindrome!");
    }
  };

  render() {
    const { isAnagram, primaryWord, secondaryWord, isPalindrome } = this.state;
    if (isAnagram)
      return (
        <header>
          {primaryWord} is an Anagram of {secondaryWord}
        </header>
      );

    if (isPalindrome)
      return (
        <header>
          {primaryWord} is an Palindrome of {secondaryWord}
        </header>
      );

    return (
      <div className="container my-5">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="row">
              <div className="col-lg-10 ">
                <form className="form-inline mb-4">
                  <input
                    className="form-control form-control-lg mx-3"
                    onChange={this.handlePrimaryInput}
                  />
                  <Button
                    className="anagram check"
                    onClick={this.handlePrimaryClick}
                  >
                    Is it an anagram?
                  </Button>
                </form>

                <form className="form-inline mb-4">
                  <input
                    className="form-control form-control-lg mx-3"
                    onChange={this.handleSecondaryInput}
                  />
                  <Button
                    className="palindrome check"
                    onClick={this.handleSecondaryClick}
                  >
                    Is it an palindrome?
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }
}

export default Comparison;
