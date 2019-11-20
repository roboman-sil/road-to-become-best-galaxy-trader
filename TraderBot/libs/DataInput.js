const romanNumericTable = require('../data/RomanNumericTable.json');

class DataInput {
  isAValidDataInput(input) {
    const romanNumeralList = Object.keys(romanNumericTable);

    if (this.inputHasRomanNumeral(input)) {
      for (let romanNumeral of romanNumeralList) {
        if (input.includes(`is ${romanNumeral}`)) {
          return true;
        }
      }
    }

    if (/\d/.test(input)) {
      return true;
    }
    return false;
  }

  inputHasRomanNumeral(input) {
    const inputWords = input.split(' ');

    const romanNumeralList = Object.keys(romanNumericTable);

    for (let word of inputWords) {
      for (let romanNumeral of romanNumeralList) {
        if (word === romanNumeral) {
          return true;
        }
      }
    }
    return false;
  }
}

module.exports = DataInput;
