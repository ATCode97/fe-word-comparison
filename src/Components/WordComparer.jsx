import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { anagramDetector, palindromeDetector } from "../spec/utils";

class Comparison extends Component {
  state = {
    primaryWord: "",
    secondaryWord: "",
  };

  //1. input box 1 needs to set state of word one with event.target.value
  //2. input box 2 needs to set state of word 2 with event.target.value
  //3. Button 1 has a onclick that will trigger the test for anagram util function, needs a prevent default
  //4. Button 2 has a onClick that will trigger the test for palindrome util function,  needs a prevent default
  //5. Both of the utils functions will use the value in state as arguments
  //6. Somehow display the result???? Using conditional rendering??????
  //7 Figure out the POST request? to work somehow

  handlePrimaryInput = (event) => {
    //this will set the state of the primary word key
    // console.dir(event.target.value);
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

  handleClick = () => {
    const { primaryWord, secondaryWord } = this.state;

    if (anagramDetector(primaryWord[0], secondaryWord[0]) === true) {
      console.log("this word is a anagram!");
    } else {
      console.log("this word is not a anagram!");
    }
  };

  render() {
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
                </form>

                <form className="form-inline mb-4">
                  <input
                    className="form-control form-control-lg mx-3"
                    onChange={this.handleSecondaryInput}
                  />
                </form>
              </div>

              <div className="col-lg-2 align-self-center">
                <Button className="compare" onClick={this.handleClick}>
                  Is it an anagram?
                </Button>
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
