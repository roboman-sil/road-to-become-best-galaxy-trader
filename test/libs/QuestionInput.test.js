const QuestionInput = require('../../TraderBot/libs/QuestionInput');

describe('QuestionInput', () => {
  it('should be able to detect if entered statement is a question', () => {
    const questionInput = new QuestionInput();

    const result = questionInput.isAValidQuestion(
      'how much is pish tegj glob glob ',
    );
    const result2 = questionInput.isAValidQuestion(
      'how many Credits is glob prok Silver ?',
    );

    expect(result).toBe(true);
    expect(result2).toBe(true);
  });

  it('should be able to detect if entered statement is not a question', () => {
    const questionInput = new QuestionInput();

    const result = questionInput.isAValidQuestion(
      'what is pish tegj glob glob ',
    );
    const result2 = questionInput.isAValidQuestion(
      'is there glob prok Silver left?',
    );

    expect(result).toBe(false);
    expect(result2).toBe(false);
  });
});
