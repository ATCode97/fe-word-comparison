const { expect } = require("chai");
const { anagramDetector, palindromeDetector, convertTime } = require("./utils");

describe("anagramDetector", () => {
  it("will compare two strings, and return false if they have the same length but have different letters", () => {
    expect(anagramDetector("foot", "silent")).to.equal(false);
    expect(anagramDetector("control", "controller")).to.equal(false);
    expect(anagramDetector("foot", "silent")).to.equal(false);
  });
  it("will compare two strings, and return true if they have the same letters", () => {
    expect(anagramDetector("listen", "silent")).to.equal(true);
    expect(anagramDetector("night", "thing")).to.equal(true);
    expect(anagramDetector("cried", "cider")).to.equal(true);
  });
  it("will compare two strings, and return false if they don't have the same letters", () => {
    expect(anagramDetector("hollow", "silent")).to.equal(false);
    expect(anagramDetector("hello", "mouse")).to.equal(false);
    expect(anagramDetector("tear", "hawk")).to.equal(false);
  });
});

describe("palindromeDetector", () => {
  it("will return false if two strings doesn't have the same length", () => {
    expect(palindromeDetector("moth", "sitter")).to.equal(false);
    expect(palindromeDetector("hello", "testing")).to.equal(false);
    expect(palindromeDetector("world", "five")).to.equal(false);
  });

  it("will return true if two strings are a palindrome of each other", () => {
    expect(palindromeDetector("dad", "dad")).to.equal(true);
    expect(palindromeDetector("civic", "civic")).to.equal(true);
    expect(palindromeDetector("mum", "mum")).to.equal(true);
  });
  it("will return false if two strings are not a palindrome of each other", () => {
    expect(palindromeDetector("mother", "father")).to.equal(false);
    expect(palindromeDetector("civil", "civil")).to.equal(false);
    expect(palindromeDetector("hello", "world")).to.equal(false);
  });
});

describe("convertTime", () => {
  it("will convert date string to normal", () => {
    expect(convertTime("2020-09-08T14:16:56.208Z")).to.eql(
      "2020-09-08, 14:16:56"
    );
    expect(convertTime("2020-09-08T15:00:47.594Z")).to.eql(
      "2020-09-08, 15:00:47"
    );
    expect(convertTime("2020-09-08T14:02:42.737Z")).to.eql(
      "2020-09-08, 14:02:42"
    );
  });
});
