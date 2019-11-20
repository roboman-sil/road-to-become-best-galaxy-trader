const fs = require('fs');
const DataManager = require('../../TraderBot/libs/DataManager');

describe('DataManager', () => {
  const dummyTable = './dummyTable.json';

  it('should be able to update table data', () => {
    const dataManager = new DataManager();
    const data = { test: 'test', test1: 'test2' };

    dataManager.updateData(dummyTable, data);

    fs.readFile(dummyTable, (err, fileData) => {
      if (err) throw err;
      let jsonData = JSON.parse(fileData);
      expect(jsonData).toEqual(data);
    });
    fs.unlinkSync(dummyTable);
  });

  it('should be able to update Material Table data', () => {
    const dataManager = new DataManager();
    const tableName = './MaterialTable.json';
    const data = { test: 'test', test1: 'test2' };

    dataManager.updateMaterialTable(data);

    fs.readFile(tableName, (err, fileData) => {
      if (err) throw err;
      let jsonData = JSON.parse(fileData);
      expect(jsonData).toEqual(data);
    });
    fs.unlinkSync(tableName);
  });

  it('should be able to update Vocabulary Table data', () => {
    const dataManager = new DataManager();
    const tableName = './VocabularyTable.json';
    const data = { test: 'test', test1: 'test2' };

    dataManager.updateVocabularyTable(data);

    fs.readFile(tableName, (err, fileData) => {
      if (err) throw err;
      let jsonData = JSON.parse(fileData);
      expect(jsonData).toEqual(data);
    });
    fs.unlinkSync(tableName);
  });
});
