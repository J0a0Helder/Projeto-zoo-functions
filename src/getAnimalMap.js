const data = require('../data/zoo_data');

const { species } = data;

const locais = ['NE', 'NW', 'SE', 'SW'];

function noParameters() {
  const obj = {};
  locais.forEach((valor) => {
    obj[valor] = species.filter((specie) => specie.location.includes(valor))
      .map((specie) => specie.name);
  });
  return obj;
}

function includesNameESort(option) {
  const obj = {};
  locais.forEach((valor) => {
    obj[valor] = [];
  });

  species.map((specie) => {
    const obj2 = {};
    obj2[specie.name] = specie.residents.map((resident) => resident.name);

    if (option.includeNames && option.sorted) obj2[specie.name].sort();

    return obj[specie.location].push(obj2);
  });

  return obj;
}

function localNameAndSex(options) {
  const obj = {};
  locais.forEach((valor) => {
    obj[valor] = [];
  });

  species.map((specie) => {
    const animal = specie.residents
      .map((resident) => (resident.sex === options.sex ? resident.name : undefined));

    const filtroNomes = {};
    filtroNomes[specie.name] = animal.filter((sexo) => sexo !== undefined);

    if (options.sorted) filtroNomes[specie.name].sort();

    return obj[specie.location].push(filtroNomes);
  });

  return obj;
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) return noParameters();
  if (options.sex) return localNameAndSex(options);

  return includesNameESort(options);
}

module.exports = getAnimalMap;
