const fs = require('fs');
const DataManager = require('../../TraderBot/libs/DataManager');

describe('DataManager', () => {
  describe('List Retrival', () => {
    it('should be able to the list of vocabulary', () => {
      const dataManager = new DataManager();

      const list = dataManager.getVocabularyList();

      expect(list).toEqual(['glob', 'prok', 'pish', 'tegj']);
    });
    it('should be able to get the list of materials', () => {
      const dataManager = new DataManager();

      const list = dataManager.getMaterialList();

      expect(list).toEqual(['Gold', 'Silver', 'Iron']);
    });
    it('should be able to get the list of roman numerals', () => {
      const dataManager = new DataManager();

      const list = dataManager.getRomanNumeralList();

      expect(list).toEqual(['I', 'V', 'X', 'L', 'C', 'D', 'M']);
    });

    it('should get value from vocabulary Json', () => {
      const dataManager = new DataManager();

      const selectedVocabularyValue = dataManager.getSelectedVocabularyValue(
        'glob',
      );

      expect(selectedVocabularyValue).toEqual('I');
    });

    it('should get value from materials json', () => {
      const dataManager = new DataManager();

      const selectedMaterialValue = dataManager.getSelectedMaterialValue(
        'Silver',
      );

      expect(selectedMaterialValue).toEqual(17);
    });

    it('should get value from roman numerals json', () => {
      const dataManager = new DataManager();

      const selectedRomanValue = dataManager.getSelectedRomanValue('X');

      expect(selectedRomanValue).toEqual(10);
    });

    it('should get unique roman numeral from roman numerals json', () => {
      const dataManager = new DataManager();

      const selectedRomanList = dataManager.getUniqueRomanList();

      expect(selectedRomanList).toEqual(['V', 'L', 'D']);
    });

    it('should get deci roman numeral from roman numeral json', () => {
      const dataManager = new DataManager();

      const selectedDeciList = dataManager.getDeciRomanList();

      expect(selectedDeciList).toEqual(['I', 'X', 'C', 'M']);
    });
  });

  describe('Edit Table', () => {
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

    it.skip('should be able to update Material Table data', done => {
      const dataManager = new DataManager();
      const tableName = './TraderBot/data/materialTable.json';
      const originalData = JSON.stringify(
        JSON.parse(fs.readFileSync(tableName)),
      );
      const data = { test: 'test', test1: 'test2' };

      dataManager.updateMaterialTable(data);

      setTimeout(() => {
        fs.readFile(tableName, (err, fileData) => {
          if (err) throw err;
          const jsonData = JSON.parse(fileData);
          console.log(jsonData);
          expect(jsonData).toEqual(data);
        });
        fs.writeFileSync(tableName, originalData);
        done();
      }, 0);
    });

    it.skip('should be able to update Vocabulary Table data', () => {
      const dataManager = new DataManager();
      const tableName = './TraderBot/data/vocabularyTable.json';
      const originalData = JSON.stringify(
        JSON.parse(fs.readFileSync(tableName)),
      );
      const data = { test: 'test', test1: 'test2' };

      dataManager.updateVocabularyTable(data);

      fs.readFile(tableName, (err, fileData) => {
        if (err) throw err;
        const jsonData = JSON.parse(fileData);
        expect(jsonData).toEqual(data);
      });
      fs.writeFileSync(tableName, originalData);
    });
  });
});
