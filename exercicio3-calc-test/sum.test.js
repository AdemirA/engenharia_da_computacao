const sum = require('./sum');

test('1 + 2 é igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('22 + 3 é igual a 25', () => {
    expect(sum(22, 3)).toBe(25);
});


// Teste forçado a dar erro
test('35 + 4 é igual a 40', () => {
    expect(sum(35, 4)).toBe(40);
});