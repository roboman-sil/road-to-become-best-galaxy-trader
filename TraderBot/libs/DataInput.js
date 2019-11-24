const romanNumericTable = require('../data/romanNumericTable.json');
const Translator = require('./Translator');
const constants = require('../constants');

class DataInput extends Translator {
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

  manageDataInput(input) {
    const { translatedVocabulary, vocabulary } = this.parseVocabularyString(
      input,
    );
    const value = this.parseRomanString(translatedVocabulary);

    const { material } = this.parseMaterialString(input);

    let totalValue = parseFloat(input.replace(/[^0-9]/g, ''));

    if (value !== 0) {
      if (material === '') {
        this.updateVocabularyTable({
          [`${vocabulary}`]: `${translatedVocabulary}`,
        });
        return 'Updated Vocabulary';
      } else {
        this.updateMaterialTable({
          [`${material}`]: totalValue / value,
        });
        return 'Updated Material Cost';
      }
    }
    return constants.error.defaultError;
  }
}

module.exports = DataInput;
