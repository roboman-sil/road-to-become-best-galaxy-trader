const readline = require('readline');

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

    this.rl.question('', answer => this.questionResponse(answer, this.rl));
  }

  questionResponse(answer, rl) {
    console.log(`Thank you for your valuable feedback: ${answer}`);
    if (answer === 'close') {
      console.log(
        'Master, I hope to see you again soon. I hope my assistance has made you wealthier.',
      );
      return rl.close();
    }

    rl.question('', answer => this.questionResponse(answer, this.rl));
  }

  // input(rl) {
  //   rl.on('line', input => {
  //     console.log(`Received: ${input}`);

  //     this.input(rl);
  //   });
  // }
}

module.exports = TraderBot;
