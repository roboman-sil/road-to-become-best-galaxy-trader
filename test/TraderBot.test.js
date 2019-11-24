const TraderBot = require('../TraderBot/TraderBot');

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
    it.skip('should be able to trigger question input', () => {
      const traderBot = new TraderBot();

      const result1 = traderBot.response();

      expect().toBe();
    });
    it.skip('should be able to response with an error when input does not match', () => {});
  });
});
