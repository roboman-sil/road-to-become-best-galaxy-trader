module.exports = Object.freeze({
  initiating: 'programme initiating...',
  completeInitialization:
    "Trading Bot has completed booting. If you wish to exit from the conversation at any point in time, just enter 'close'",
  greetings: 'Greetings Master, what is new on the galaxy market today?',
  farewell:
    'Master, I hope to see you again soon. I hope my assistance has made you wealthier.',
  updateMessage: {
    vocabulary: 'Updated Vocabulary',
    material: 'Updated Material Cost',
  },
  error: {
    tooMuchRepeats:
      'Error: The symbols "I", "X", "C", and "M" can be repeated three times in succession, but no more.',
    cannotRepeat: 'Error: The symbols "D", "L", and "V" can never be repeated.',
    subtractingInvalids: 'Error: "V", "L", and "D" can never be subtracted.',
    subtractingMismatch:
      'Error: "I" can be subtracted from "V" and "X" only. "X" can be subtracted from "L" and "C" only. "C" can be subtracted from "D" and "M" only',
  },
});
