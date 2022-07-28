const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = data.species.find(({ name: nome }) => nome === animal);
  const residentes = animais.residents;
  return residentes.every(({ age: idade }) => idade >= age);
}

module.exports = getAnimalsOlderThan;
