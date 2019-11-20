const TraderBot = require('../TraderBot/TraderBot');

describe.skip('TraderBot', () => {
  it('should be able to run', () => {
    const traderBot = new TraderBot();
    const value = traderBot.run();

    expect(value).toBe(true);
  });
});
