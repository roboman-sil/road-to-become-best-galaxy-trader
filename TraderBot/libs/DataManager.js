const fs = require('fs');
const romanNumericTable = require('../data/romanNumericTable.json');
const materialTable = require('../data/materialTable.json');
const vocabularyTable = require('../data/vocabularyTable.json');

class DataManager {
  getRomanNumeralList() {
    return Object.keys(romanNumericTable);
  }

  getMaterialList() {
    return Object.keys(materialTable);
  }

  getVocabularyList() {
    return Object.keys(vocabularyTable);
  }

  getSelectedMaterialValue(key) {
    return materialTable[key];
  }

  getSelectedVocabularyValue(key) {
    return vocabularyTable[key];
  }

  getSelectedRomanValue(key) {
    return romanNumericTable[key];
  }

  updateData(tableName, data) {
    let updatedData = data;
    if (fs.existsSync(tableName)) {
      const fileData = fs.readFileSync(tableName);
      const jsonData = JSON.parse(fileData);
      updatedData = { ...jsonData, ...data };
    }

    const stringifiedData = JSON.stringify(updatedData);
    fs.writeFileSync(tableName, stringifiedData);
  }

  updateMaterialTable(data) {
    this.updateData('./TraderBot/data/materialTable.json', data);
  }

  updateVocabularyTable(data) {
    this.updateData('./TraderBot/data/vocabularyTable.json', data);
  }
}

module.exports = DataManager;
