const fs = require('fs');
const DataManager = require('../../TraderBot/libs/DataManager');

describe('DataManager', () => {
  const dummyTable = './dummyTable.json';

  it('should be able to update existing table data', () => {
    const dataManager = new DataManager();
    const data = { test: 'test', test1: 'test2' };

    dataManager.updateData(dummyTable, data);
    const newData = { test1: 'test22', test2: 'test3' };
    dataManager.updateData(dummyTable, newData);

    fs.readFile(dummyTable, (err, fileData) => {
      if (err) throw err;
      let jsonData = JSON.parse(fileData);
      expect(jsonData).toEqual({ ...data, ...newData });
    });
    fs.unlinkSync(dummyTable);
  });

  it('should be able to update Material Table data', () => {
    const dataManager = new DataManager();
    const tableName = './TraderBot/data/MaterialTable.json';
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
    const tableName = './TraderBot/data/VocabularyTable.json';
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
