const divide = require('./divide');

test('10 / 2 é igual a 5', () => {
  expect(divide(10, 2)).toBe(5);
});


test('250 / 5 é igual a 50', () => {
    expect(divide(250, 5)).toBe(50);
});