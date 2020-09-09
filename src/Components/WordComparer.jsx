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

  handlePrimaryClick = () => {
    const { primaryWord, secondaryWord } = this.state;

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

  validate(e) {
    const regex = /[A-Za-z]/;
    const chars = e.target.value.split("");
    const char = chars.pop();
    if (!regex.test(char)) {
      e.target.value = chars.join("");
      alert(`${char} is not a valid character.`);
    }
  }

  handleSecondaryClick = () => {
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
        <h2 style={{ textAlign: "center" }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {primaryWord} is an Anagram of {secondaryWord}
        </h2>
      );

    if (isAnagram === false)
      return (
        <h2 style={{ textAlign: "center" }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {primaryWord} is an not Anagram of {secondaryWord}
        </h2>
      );

    if (isPalindrome)
      return (
        <h2 style={{ textAlign: "center" }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {primaryWord} is a Palindrome of {secondaryWord}
        </h2>
      );

    if (isPalindrome === false)
      return (
        <h2 style={{ textAlign: "center" }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {primaryWord} is not a Palindrome of {secondaryWord}
        </h2>
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
                  <h4>
                    Input two different words to find out if they are an anagram
                    of each other
                  </h4>
                  <br></br>
                  <h4>
                    Input the same word twice to find out if they are a
                    palindrome of each other
                  </h4>
                  <br></br>
                  <form className="form-inline mb-4">
                    <input
                      className="form-control form-control-lg mx-3"
                      type="text"
                      onChange={this.handlePrimaryInput}
                      onKeyPress={(e) => this.validate(e)}
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
                      type="text"
                      onChange={this.handleSecondaryInput}
                      onKeyPress={(e) => this.validate(e)}
                    />
                    <Button
                      className="palindrome check"
                      onClick={this.handleSecondaryClick}
                    >
                      Is it a palindrome?
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
