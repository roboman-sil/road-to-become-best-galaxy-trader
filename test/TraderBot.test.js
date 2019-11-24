const TraderBot = require('../TraderBot/TraderBot');
const constants = require('../TraderBot/constants');

describe('TraderBot', () => {
  it('should be able to run', () => {
    const traderBot = new TraderBot();
    const value = traderBot.run();

    expect(value).toBe(true);
  });

  describe('Response', () => {
    it('should be able to trigger data input', () => {
      const traderBot = new TraderBot();

      const result1 = traderBot.response('how much is pish tegj glob glob ?');
      const result2 = traderBot.response(
        'how many Credits is glob prok Iron ?',
      );
      const result3 = traderBot.response(
        'how many Credits is glob prok Silver ?',
      );
      const result4 = traderBot.response(
        'how many Credits is glob prok Gold ?',
      );

      expect(result1).toBe('pish tegj glob glob is 42');
      expect(result2).toBe('glob prok Iron is 782 Credits');
      expect(result3).toBe('glob prok Silver is 68 Credits');
      expect(result4).toBe('glob prok Gold is 57800 Credits');
    });
    it('should be able to trigger question input', () => {
      const traderBot = new TraderBot();

      const result1 = traderBot.response('glob is I');
      const result2 = traderBot.response('prok is V');
      const result3 = traderBot.response('pish is X');
      const result4 = traderBot.response('tegj is L');
      const result5 = traderBot.response('glob glob Silver is 34 Credits');
      const result6 = traderBot.response('glob prok Gold is 57800 Credits');
      const result7 = traderBot.response('pish pish Iron is 3910 Credits');

      expect(result1).toBe('Updated Vocabulary');
      expect(result2).toBe('Updated Vocabulary');
      expect(result3).toBe('Updated Vocabulary');
      expect(result4).toBe('Updated Vocabulary');
      expect(result5).toBe('Updated Material Cost');
      expect(result6).toBe('Updated Material Cost');
      expect(result7).toBe('Updated Material Cost');
    });

    it('should be able to return a default error if message is not understood', () => {
      const traderBot = new TraderBot();

      const result1 = traderBot.response('asdasd');
      const result2 = traderBot.response('how much wood does a wood chuck');
      const result3 = traderBot.response('dumb dumb is dodo');

      expect(result1).toBe(constants.error.defaultError);
      expect(result2).toBe(constants.error.defaultError);
      expect(result3).toBe(constants.error.defaultError);
    });
  });
});
