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
  describe('Roman Numerals to Numeric Numbers', () => {
    it('should not be able to traslate when roman numerals break the rule ', () => {});
  });

  // describe('Vocabulary to Roman Numerals', () => {
  //   it('should be able to translate vocabulary to roman numerals', () => {
  //     const translator = new Translator();

  //     const result1 = translator.vocabularyToRoman('pish tegj glob glob');
  //     const result2 = translator.vocabularyToRoman('glob prok');

  //     expect(result1).toBe('XLII');
  //     expect(result2).toBe('IV');
  //   });
  // });
  // describe('Roman Numerals to Numeric Numbers', () => {
  //   it('should be able to translate roman numerals to numeric numbers', () => {
  //     const translator = new Translator();

  //     const result1 = translator.vocabularyToRoman('XLII');
  //     const result2 = translator.vocabularyToRoman('MCMXLIV');
  //     const result3 = translator.vocabularyToRoman('MCMIII');
  //     const result4 = translator.vocabularyToRoman('DCLIIX');

  //     expect(result1).toBe(42);
  //     expect(result2).toBe(1944);
  //     expect(result3).toBe(1903);
  //     expect(result4).toBe(658);
  //   });

  //   it('should not be able to traslate when roman numerals break the rule ', () => {});
  // });
});
