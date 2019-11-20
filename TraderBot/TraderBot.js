const readline = require('readline');

class TraderBot {
  run() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.question(rl);
  }

  question(rl) {
    rl.question('What do you think of Node.js? ', answer => {
      // TODO: Log the answer in a database
      console.log(`Thank you for your valuable feedback: ${answer}`);

      if (answer === 'close') {
        rl.close();
      }
      this.input(rl);
    });
  }

  input(rl) {
    rl.on('line', input => {
      console.log(`Received: ${input}`);

      this.input(rl);
    });
  }
}

module.exports = TraderBot;
