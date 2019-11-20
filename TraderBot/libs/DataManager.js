const fs = require('fs');

class DataManager {
  updateData(tableName, data) {
    let stringifiedData = JSON.stringify(data);
    fs.writeFileSync(tableName, stringifiedData);
  }

  updateMaterialTable(data) {
    this.updateData('./MaterialTable.json', data);
  }

  updateVocabularyTable(data) {
    this.updateData('./VocabularyTable.json', data);
  }
}

module.exports = DataManager;
