const sub = require('./sub');

test('2 - 1 é igual a 1', () => {
  expect(sub(2, 1)).toBe(1);
});

test('30 - 25 é igual a 5', () => {
    expect(sub(30, 25)).toBe(5);
});