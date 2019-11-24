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

  parseMaterialString(string) {
    const listOfPotentialMaterial = string.split(' ');

    let translatedMaterial = '';
    let material = '';
    listOfPotentialMaterial.forEach(potentialMaterial => {
      const parsedMaterial = this.materialToCost(potentialMaterial);

      if (parsedMaterial !== '') {
        translatedMaterial += parsedMaterial;
        material = `${potentialMaterial}`;
      }
    });

    return { translatedMaterial, material };
  }

  parseVocabularyString(string) {
    const listOfPotentialVocabularies = string.split(' ');

    let translatedVocabulary = '';
    let vocabulary = '';
    listOfPotentialVocabularies.forEach(potentialVocabulary => {
      const parsedVocabulary = this.vocabularyToRoman(potentialVocabulary);

      if (parsedVocabulary !== '') {
        translatedVocabulary += parsedVocabulary;
        vocabulary += `${potentialVocabulary} `;
      }
    });

    const errorMessage = this.checkRomanRules(translatedVocabulary);
    if (errorMessage !== '') {
      console.log(errorMessage);
      return null;
    }

    return { translatedVocabulary, vocabulary: vocabulary.trim() };
  }

  checkRomanRules(romanString) {
    const listOfDeciRoman = this.getDeciRomanList();
    const listOfUniqueRoman = this.getUniqueRomanList();

    const errorListDeciMultiple = listOfDeciRoman.map(
      roman => `${roman}${roman}${roman}${roman}`,
    );
    const errorListUniqueMultiple = listOfUniqueRoman.map(
      roman => `${roman}${roman}`,
    );

    let errorMessage = '';
    errorListDeciMultiple.forEach(errorCombination => {
      if (romanString.includes(errorCombination)) {
        errorMessage =
          'Error: The symbols "I", "X", "C", and "M" can be repeated three times in succession, but no more.';
      }
    });

    errorListUniqueMultiple.forEach(errorCombination => {
      if (romanString.includes(errorCombination)) {
        errorMessage =
          'Error: The symbols "D", "L", and "V" can never be repeated.';
      }
    });

    return errorMessage;
  }

  parseRomanString(string) {
    const listOfRomanString = string.split('');

    const listOfNumerals = [];
    listOfRomanString.forEach(romanCharacter => {
      const numeral = this.romanToNumeric(romanCharacter);
      listOfNumerals.push(numeral);
    });

    let amount = 0;
    let errorMessage = '';
    listOfNumerals.forEach((currentAmount, index) => {
      const prevAmountThree = listOfNumerals[index - 3] || 0;
      const prevAmountTwo = listOfNumerals[index - 2] || 0;
      const prevAmount = listOfNumerals[index - 1] || 0;
      const nextAmount = listOfNumerals[index + 1] || 0;

      if (nextAmount < currentAmount) {
        let wildcardAmount = 0;
        if (prevAmount <= currentAmount) {
          if (errorMessage === '') {
            errorMessage = this.checkSubtractionError(
              prevAmount,
              currentAmount,
            );
          }
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

    if (errorMessage !== '') {
      console.log(errorMessage);
      return null;
    }

    return amount;
  }

  checkSubtractionError(prevAmount, currentAmount) {
    let errorMessage = '';

    if (prevAmount.toString().includes('5')) {
      errorMessage = 'Error: "V", "L", and "D" can never be subtracted.';
    } else {
      const reminder = currentAmount / prevAmount;

      if (prevAmount !== 0 && reminder > 10) {
        errorMessage =
          'Error: "I" can be subtracted from "V" and "X" only. "X" can be subtracted from "L" and "C" only. "C" can be subtracted from "D" and "M" only';
      }
    }

    return errorMessage;
  }
}

module.exports = Translator;
