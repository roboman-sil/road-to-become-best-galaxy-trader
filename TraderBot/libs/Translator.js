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
}

module.exports = Translator;
