const DataManager = require('./DataManager.js');

class Translator extends DataManager {
  constructor(props) {
    super(props);
  }

  vocabularyToRoman(vocabulary) {
    const vocabularyList = this.getVocabularyList();

    let selectedVocabularyValue = '';
    vocabularyList.forEach(selectedVocabulary => {
      if (selectedVocabulary === vocabulary) {
        selectedVocabularyValue = this.getSelectedVocabularyValue(
          selectedVocabulary,
        );
      }
    });

    return selectedVocabularyValue;
  }

  romanToNumeric(roman) {
    const romanList = this.getRomanNumeralList();

    let selectedNumericValue = '';
    romanList.forEach(selectedRomanValue => {
      if (selectedRomanValue === roman) {
        selectedNumericValue = this.getSelectedRomanValue(selectedRomanValue);
      }
    });

    return selectedNumericValue;
  }

  materialToCost(material) {
    const materialList = this.getMaterialList();

    let selectedCostValue = '';
    materialList.forEach(selectedMaterialValue => {
      if (selectedMaterialValue === material) {
        selectedCostValue = this.getSelectedMaterialValue(
          selectedMaterialValue,
        );
      }
    });

    return selectedCostValue;
  }

  parseVocabularyString(string) {
    const listOfPotentialVocabularies = string.split(' ');

    let translatedVocabulary = '';
    listOfPotentialVocabularies.forEach(potentialVocabulary => {
      const parsedVocabulary = this.vocabularyToRoman(potentialVocabulary);

      if (parsedVocabulary !== '') {
        translatedVocabulary += parsedVocabulary;
      }
    });

    return translatedVocabulary;
  }

  parseRomanString(string) {
    const listOfRomanString = string.split('');

    const listOfNumerals = [];
    listOfRomanString.forEach(romanCharacter => {
      const numeral = this.romanToNumeric(romanCharacter);
      listOfNumerals.push(numeral);
    });

    let amount = 0;
    listOfNumerals.forEach((currentAmount, index) => {
      const prevAmountThree = listOfNumerals[index - 3] || 0;
      const prevAmountTwo = listOfNumerals[index - 2] || 0;
      const prevAmount = listOfNumerals[index - 1] || 0;
      const nextAmount = listOfNumerals[index + 1] || 0;

      if (nextAmount < currentAmount) {
        let wildcardAmount = 0;
        if (prevAmount <= currentAmount) {
          wildcardAmount += prevAmount;
          if (prevAmountTwo === prevAmount) wildcardAmount += prevAmount;
          if (prevAmountThree === prevAmount) wildcardAmount += prevAmount;
        }

        if (nextAmount === 0 && prevAmount === currentAmount) {
          amount += currentAmount + wildcardAmount;
        } else {
          amount += currentAmount - wildcardAmount;
        }
      }
    });

    return amount;
  }
}

module.exports = Translator;
