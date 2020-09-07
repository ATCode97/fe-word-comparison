const { expect } = require("chai");
const { anagramDetector, palindromeDetector } = require("./utils");

describe("anagramDetector", () => {
  it("will compare two strings, and return true if they have the same length", () => {
    expect(anagramDetector("listen", "silent")).to.equal(true);
  });
  it("will compare two strings, and return false if they don't have the same length", () => {
    expect(anagramDetector("foot", "silent")).to.equal(false);
  });
  it("will compare two strings, and return true if they have the same letters", () => {
    expect(anagramDetector("listen", "silent")).to.equal(true);
  });
  it("will compare two strings, and return false if they don't have the same letters", () => {
    expect(anagramDetector("hollow", "silent")).to.equal(false);
  });
  it("will compare two strings, and return false if they have the same length but have different letters", () => {
    expect(anagramDetector("hollow", "silent")).to.equal(false);
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
