class QuestionInput {
  isAValidQuestion(input) {
    const lowercasedInput = input.toLowerCase();

    if (
      lowercasedInput.includes('how many') ||
      lowercasedInput.includes('how much')
    ) {
      return true;
    }
    return false;
  }
}

module.exports = QuestionInput;
