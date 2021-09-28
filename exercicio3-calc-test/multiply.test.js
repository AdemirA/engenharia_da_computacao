const multiply = require('./multiply');

test('10 * 70 é igual a 700', () => {
  expect(multiply(10, 70)).toBe(700);
});

test('5 * 10 é igual a 50', () => {
    expect(multiply(5, 10)).toBe(50);
});