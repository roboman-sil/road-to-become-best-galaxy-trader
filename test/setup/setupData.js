jest.mock('../../TraderBot/data/romanNumericTable.json', () => ({
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
}));
jest.mock('../../TraderBot/data/materialTable.json', () => ({
  Gold: 14450,
  Silver: 17,
  Iron: 195.5,
}));
jest.mock('../../TraderBot/data/vocabularyTable.json', () => ({
  glob: 'I',
  prok: 'V',
  pish: 'X',
  tegj: 'L',
}));
