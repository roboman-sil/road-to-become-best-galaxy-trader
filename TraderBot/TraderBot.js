const readline = require('readline');
const DataInput = require('../TraderBot/libs/DataInput');
const QuestionInput = require('../TraderBot/libs/QuestionInput');

class TraderBot {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
  }

  run() {
    console.log('programme initiating...');
    console.log(
      `Trading Bot has completed booting. If you wish to exit from the conversation at any point in time, just enter 'close'`,
    );
    console.log('Greetings Master, what is new on the galaxy market today?');

    this.rl.question('', answer => this.question(answer, this.rl));
    return true;
  }

  question(answer, rl) {
    console.log(`Thank you for your valuable feedback: ${answer}`);

    let message = '';
    message = this.response(answer);
    if (message !== '') {
      console.log(message);
    }

    if (answer === 'close') {
      console.log(
        'Master, I hope to see you again soon. I hope my assistance has made you wealthier.',
      );
      return rl.close();
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
  }
}

module.exports = TraderBot;
