import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { anagramDetector, palindromeDetector } from "../spec/utils";
import * as api from "../spec/api";

class Comparison extends Component {
  state = {
    primaryWord: "",
    secondaryWord: "",
    isAnagram: null,
    isPalindrome: null,
  };

  //1. input box 1 needs to set state of word one with event.target.value (done)
  //2. input box 2 needs to set state of word 2 with event.target.value (done)
  //3. Button 1 has a onclick that will trigger the test for anagram util function (done)
  //4. Button 2 has a onClick that will trigger the test for palindrome util function (done)
  //4a. Both buttons needs conditional to stop button from triggering with out input
  //5. Both of the utils functions will use the value in state as arguments (done)
  //6. Display the result, using conditional rendering, if(isAnagram===true), render header <----- css, need to center the result
  //7. Made post request as a api function (done ish)
  //8. Attach api post function to both button so it would trigger for both comparison buttons

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
    if (primaryWord && secondaryWord) {
      if (anagramDetector(primaryWord[0], secondaryWord[0]) === true) {
        this.setState({ isAnagram: true });
      } else {
        console.log("this word is not a Anagram!");
        this.setState({ isAnagram: false });
      }
      const newComparison = {
        primary_words: primaryWord[0],
        secondary_words: secondaryWord[0],
      };

      api.postNewComparison(newComparison);
    }
  };

  handleSecondaryClick = () => {
    //needs a prevent default
    const { primaryWord, secondaryWord } = this.state;
    if (primaryWord && secondaryWord) {
      if (palindromeDetector(primaryWord[0], secondaryWord[0]) === true) {
        console.log("this word is a Palindrome!");
        this.setState({ isPalindrome: true });
      } else {
        console.log("this word is not a Palindrome!");
        this.setState({ isPalindrome: false });
      }
      const newComparison = {
        primary_words: primaryWord[0],
        secondary_words: secondaryWord[0],
      };

      api.postNewComparison(newComparison);
    }
  };

  render() {
    const { isAnagram, primaryWord, secondaryWord, isPalindrome } = this.state;

    if (isAnagram)
      return (
        <header style={{ textAlign: "center" }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {primaryWord} is an Anagram of {secondaryWord}
        </header>
      );

    if (isAnagram === false)
      return (
        <header style={{ textAlign: "center" }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {primaryWord} is an not Anagram of {secondaryWord}
        </header>
      );

    if (isPalindrome)
      return (
        <header>
          {primaryWord} is an Palindrome of {secondaryWord}
        </header>
      );

    if (isPalindrome === false)
      return (
        <header>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {primaryWord} is not an Palindrome of {secondaryWord}
        </header>
      );

    if (isAnagram === null && isPalindrome === null)
      return (
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="row">
                <div className="col-lg-10 ">
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
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
        </div>
      );
  }
}

export default Comparison;
