const DataInput = require('../../TraderBot/libs/DataInput');

describe('DataInput', () => {
  it('should be able to detect if entered statement is a question', () => {
    const dataInput = new DataInput();

    const result = dataInput.isAValidDataInput('glob is X');
    const result2 = dataInput.isAValidDataInput(
      'glob glob glob Diamond is 5660 Credits',
    );

    expect(result).toBe(true);
    expect(result2).toBe(true);
  });

  it('should be able to detect if entered statement is not a question', () => {
    const dataInput = new DataInput();

    const result = dataInput.isAValidDataInput('Gob bog asd is in Credits');
    const result2 = dataInput.isAValidDataInput('Rock not Ding is Diamond');

    expect(result).toBe(false);
    expect(result2).toBe(false);
  });

  it('should be able to check input has roman numeral', () => {
    const dataInput = new DataInput();

    const result = dataInput.inputHasRomanNumeral('Glod is X');
    const result2 = dataInput.inputHasRomanNumeral('papa is V');

    expect(result).toBe(true);
    expect(result2).toBe(true);
  });
  it('should be able to check input has no roman numeral', () => {
    const dataInput = new DataInput();

    const result = dataInput.inputHasRomanNumeral('there is an Xios');
    const result2 = dataInput.inputHasRomanNumeral('Rock not Ding is Diamond');

    expect(result).toBe(false);
    expect(result2).toBe(false);
  });
});
