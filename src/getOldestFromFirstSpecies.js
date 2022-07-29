const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const resultado = [];
  const pessoa = employees.find((codigo) => codigo.id === id);
  const especies = species.filter((codigo) => codigo.id === pessoa.responsibleFor[0]);
  const residentes = especies[0].residents;
  const animalMaisVelho = residentes.reduce((acc, cur) => (acc.age > cur.age ? acc : cur), []);
  resultado.push(animalMaisVelho.name, animalMaisVelho.sex, animalMaisVelho.age);
  return resultado;
}

console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = getOldestFromFirstSpecies;
