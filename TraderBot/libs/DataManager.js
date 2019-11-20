const fs = require('fs');

class DataManager {
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
    this.updateData('./TraderBot/data/MaterialTable.json', data);
  }

  updateVocabularyTable(data) {
    this.updateData('./TraderBot/data/VocabularyTable.json', data);
  }
}

module.exports = DataManager;
