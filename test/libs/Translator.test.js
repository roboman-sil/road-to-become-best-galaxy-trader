const Translator = require('../../TraderBot/libs/Translator');

describe('Translator', () => {
  describe('Vocabulary to Roman Numerals', () => {
    it('should be able to translate vocabulary to roman numerals', () => {
      const translator = new Translator();

      const result1 = translator.vocabularyToRoman('pish tegj glob glob');
      const result2 = translator.vocabularyToRoman('glob prok');

      expect(result1).toBe('XLII');
      expect(result2).toBe('IV');
    });
  });
  describe('Roman Numerals to Numeric Numbers', () => {
    it('should be able to translate roman numerals to numeric numbers', () => {
      const translator = new Translator();

      const result1 = translator.vocabularyToRoman('XLII');
      const result2 = translator.vocabularyToRoman('MCMXLIV');
      const result3 = translator.vocabularyToRoman('MCMIII');
      const result4 = translator.vocabularyToRoman('DCLIIX');

      expect(result1).toBe(42);
      expect(result2).toBe(1944);
      expect(result3).toBe(1903);
      expect(result4).toBe(658);
    });

    it('should not be able to traslate when roman numerals break the rule ', () => {});
  });

  describe('Vocabulary to Numeric Numers', () => {
    it('should translate vocabulary to numeric numbers', () => {});
  });

  describe('Material to Cost', () => {
    it('should be able to translate material to cost', () => {});
  });
});
