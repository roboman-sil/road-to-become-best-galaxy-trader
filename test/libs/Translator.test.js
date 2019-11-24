const Translator = require('../../TraderBot/libs/Translator');

describe('Translator', () => {
  describe('Basic Translation', () => {
    it('should be able to translate vocabulary to roman numerals', () => {
      const translator = new Translator();

      const result1 = translator.vocabularyToRoman('pish');
      const result2 = translator.vocabularyToRoman('glob');

      expect(result1).toBe('X');
      expect(result2).toBe('I');
    });

    it('should be able to translate roman numerals to numeric numbers', () => {
      const translator = new Translator();

      const result1 = translator.romanToNumeric('X');
      const result2 = translator.romanToNumeric('M');
      const result3 = translator.romanToNumeric('D');

      expect(result1).toBe(10);
      expect(result2).toBe(1000);
      expect(result3).toBe(500);
    });

    it('should be able to translate material to cost', () => {
      const translator = new Translator();

      const result1 = translator.materialToCost('Gold');
      const result2 = translator.materialToCost('Silver');
      const result3 = translator.materialToCost('Iron');

      expect(result1).toBe(200);
      expect(result2).toBe(17);
      expect(result3).toBe(195.5);
    });
  });

  describe('Vocabulary String to Roman String', () => {
    it('Should be able to translate a vocabulary string to roman string', () => {
      const translator = new Translator();

      const result1 = translator.parseVocabularyString('pish tegj glob glob');
      const result2 = translator.parseVocabularyString('glob prok');

      expect(result1).toBe('XLII');
      expect(result2).toBe('IV');
    });

    it('should not be allowed to translate a vocabulary string to roman string with more then three successions', () => {
      const translator = new Translator();

      const result1 = translator.parseVocabularyString('glob glob glob glob');
      const result2 = translator.parseVocabularyString('pish pish pish pish');

      expect(result1).toBe(null);
      expect(result2).toBe(null);
    });

    it('should not be allowed to translate a vocabulary string to roman string with some characters more then two successions', () => {
      const translator = new Translator();

      const result1 = translator.parseVocabularyString('tegj tegj');
      const result2 = translator.parseVocabularyString('prok prok');

      expect(result1).toBe(null);
      expect(result2).toBe(null);
    });
  });

  describe('Roman String to Numeric Numbers', () => {
    it('should be able to translate roman numeric string to numeric numbers', () => {
      const translator = new Translator();

      const result1 = translator.parseRomanString('XLII');
      const result2 = translator.parseRomanString('MCMXLIV');
      const result3 = translator.parseRomanString('MCMIII');
      const result4 = translator.parseRomanString('DCLIIX');
      const result5 = translator.parseRomanString('XXX');

      expect(result1).toBe(42);
      expect(result2).toBe(1944);
      expect(result3).toBe(1903);
      expect(result4).toBe(658);
      expect(result5).toBe(30);
    });

    it('should not be allowed to translate a roman numeric string to numeric numbers with disallowed subtractions', () => {
      const translator = new Translator();

      const result1 = translator.parseRomanString('VV');
      const result2 = translator.parseRomanString('XXM');

      expect(result1).toBe(null);
      expect(result2).toBe(null);
    });
  });
});
