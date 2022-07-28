const handlerElephants = require('../src/handlerElephants');

// it('retorna 0 se nenhum argumento for passado', () => {
//  const actual = calculateEntry();
//  const expected = 0;
//  expect(actual).toEqual(expected);
// });

describe('Testes da função HandlerElephants', () => {
  it('retorna 4 quando o argumento passado for "count"', () => {
    const count = handlerElephants('count');
    const expected = 4;
    expect(count).toEqual(expected);
  });

  it('retornar um array de nomes que possui o nome Jefferson quando o argumento passado for "name"', () => {
    const count = handlerElephants('names');
    const expected = 'Jefferson';
    expect(count).toContain(expected);
  });

  it('retornar um número próximo a 10.5 quando o argumento passado for "averageAge"', () => {
    const count = handlerElephants('averageAge');
    const expected = 10.5;
    expect(count).toBeCloseTo(expected, 2);
  });

  it('retorna NW quando o argumento passado for "location"', () => {
    const count = handlerElephants('location');
    const expected = 'NW';
    expect(count).toEqual(expected);
  });

  it('retornar um número igual ou maior a 5 quando o argumento passado for "popularity"', () => {
    const count = handlerElephants('popularity');
    const expected = 5;
    expect(count).toBeGreaterThanOrEqual(expected);
  });

  it('retornar um array de dias da semana que não contém Monday quando o argumento passado for "availability"', () => {
    const count = handlerElephants('availability');
    const expected = 'Monday';
    expect(count).not.toContain(expected);
  });

  it('ser undefined quando não for passados argumentos', () => {
    const count = handlerElephants();
    expect(count).toBeUndefined();
  });

  it('retornar a string "Parâmetro inválido, é necessário uma string" quando o argumento passado for "{}"', () => {
    const count = handlerElephants({});
    const expected = 'Parâmetro inválido, é necessário uma string';
    expect(count).toEqual(expected);
  });

  it('ser undefined quando passados argumentos que não contempla uma funcionalidade', () => {
    const count = handlerElephants('Trybe');
    expect(count).toBeNull();
  });
});
