function anagramDetector(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let lStr1 = str1.toLowerCase();
  let lStr2 = str2.toLowerCase();

  if (lStr1 === lStr2) {
    return false;
  }

  let rS1 = lStr1.split("").sort().join("");
  let rS2 = lStr2.split("").sort().join("");

  return rS1 === rS2;
}

function palindromeDetector(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  let rStr1 = str1.split("").reverse().join("");
  let rStr2 = str2.split("").reverse().join("");

  if (rStr1 !== str2 || rStr2 !== str1) {
    return false;
  }
  if (rStr2 === str1 || rStr1 === str2) {
    return true;
  }
}

const convertTime = (inputTime) => {
  let date = inputTime.substr(0, 10);
  let time = inputTime.substr(11, 8);
  console.log(`${date}, ${time}`);
  return `${date}, ${time}`;
};

module.exports = { anagramDetector, palindromeDetector, convertTime };
