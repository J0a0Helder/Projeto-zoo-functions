const data = require('../data/zoo_data');

const { species } = data;
const animais = species.map((animalzinho) => animalzinho.name);
const quantidade = species.map((animalzinho) => animalzinho.residents.length);
const obj = {};
animais.forEach((valor, index) => { obj[valor] = quantidade[index]; });

function countAnimals(animal) {
  if (!animal) return obj;

  const { specie, sex } = animal;
  const animalFiltro = species.find((anml) => anml.name === specie);
  if (sex) return animalFiltro.residents.filter((element) => element.sex === sex).length;

  const anime = Object.values(animal).find((element) => typeof element === 'string');
  return obj[anime];
}

module.exports = countAnimals;
