const readline = require('readline');
const DataInput = require('../TraderBot/libs/DataInput');
const QuestionInput = require('../TraderBot/libs/QuestionInput');
const constants = require('./constants');

class TraderBot {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  run() {
    console.log(constants.initiating);
    console.log(constants.completeInitialization);
    console.log(constants.greetings);

    this.rl.question('', answer => this.question(answer, this.rl));
    return true;
  }

  question(answer, rl) {
    let message = '';

    if (answer === 'close') {
      console.log(constants.farewell);
      return rl.close();
    }

    message = this.response(answer);
    if (message !== '') {
      console.log(message);
    }

    rl.question('', answer => this.question(answer, this.rl));
  }

  response(answer) {
    const dataInput = new DataInput();
    const questionInput = new QuestionInput();

    if (dataInput.isAValidDataInput(answer)) {
      return dataInput.manageDataInput(answer);
    }
    if (questionInput.isAValidQuestion(answer)) {
      return questionInput.manageQuestionInput(answer);
    }

    return constants.error.defaultError;
  }
}

module.exports = TraderBot;
