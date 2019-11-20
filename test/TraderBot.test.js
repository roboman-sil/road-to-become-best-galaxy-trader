const TraderBot = require('../TraderBot');

describe('TraderBot', () => {
  it('should be able to run', () => {
    const traderBot = new TraderBot();
    const value = traderBot.run();

    expect(value).toBe(true);
  });
});
