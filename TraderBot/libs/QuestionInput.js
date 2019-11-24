const Translator = require('./Translator');

class QuestionInput extends Translator {
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

  manageQuestionInput(input) {
    const { translatedVocabulary, vocabulary } = this.parseVocabularyString(
      input,
    );
    const value = this.parseRomanString(translatedVocabulary);

    const { translatedMaterial, material } = this.parseMaterialString(input);

    if (material === '') {
      return `${vocabulary} is ${value}`;
    } else {
      return `${vocabulary} ${material} is ${value *
        translatedMaterial} Credits`;
    }
  }
}

module.exports = QuestionInput;
