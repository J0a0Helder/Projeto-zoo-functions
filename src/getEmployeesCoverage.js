const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;
const noParameters = [
  {
    id: 'c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1',
    fullName: 'Nigel Nelson',
    species: ['lions', 'tigers'],
    locations: ['NE', 'NW'],
  },
  {
    id: '0e7b460e-acf4-4e17-bcb3-ee472265db83',
    fullName: 'Burl Bethea',
    species: ['lions', 'tigers', 'bears', 'penguins'],
    locations: ['NE', 'NW', 'NW', 'SE'],
  },
  {
    id: 'fdb2543b-5662-46a7-badc-93d960fdc0a8',
    fullName: 'Ola Orloff',
    species: ['otters', 'frogs', 'snakes', 'elephants'],
    locations: ['SE', 'SW', 'SW', 'NW'],
  },
  {
    id: '56d43ba3-a5a7-40f6-8dd7-cbb05082383f',
    fullName: 'Wilburn Wishart',
    species: ['snakes', 'elephants'],
    locations: ['SW', 'NW'],
  },
  {
    id: '9e7d4524-363c-416a-8759-8aa7e50c0992',
    fullName: 'Stephanie Strauss',
    species: ['otters', 'giraffes'],
    locations: ['SE', 'NE'],
  },
  {
    id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad',
    fullName: 'Sharonda Spry',
    species: ['otters', 'frogs'],
    locations: ['SE', 'SW'],
  },
  {
    id: 'c1f50212-35a6-4ecd-8223-f835538526c2',
    fullName: 'Ardith Azevado',
    species: ['tigers', 'bears'],
    locations: ['NW', 'NW'],
  },
  {
    id: 'b0dc644a-5335-489b-8a2c-4e086c7819a2',
    fullName: 'Emery Elser',
    species: ['lions', 'bears', 'elephants'],
    locations: ['NE', 'NW', 'NW'],
  },
];

function getEmployess(obj) {
  const pessoa = employees.find((codigo) => codigo.id === obj.id
  || codigo.firstName === obj.name
  || codigo.lastName === obj.name);
  if (!pessoa) throw new Error('Informações inválidas');
  return pessoa;
}

function getSpecies(obj) {
  const pessoa = getEmployess(obj);

  const especies = species.filter((codigo) => codigo.id === pessoa.responsibleFor[0]
      || codigo.id === pessoa.responsibleFor[1]
      || codigo.id === pessoa.responsibleFor[2]
      || codigo.id === pessoa.responsibleFor[3]);

  return especies;
}

function getEmployeesCoverage(obj) {
  if (!obj) return noParameters;
  const especies = getSpecies(obj);
  const pessoa = getEmployess(obj);
  const fullName = `${pessoa.firstName} ${pessoa.lastName}`;
  const nomesDasEspecies = especies.map((nome) => nome.name);
  const localDasEspecies = especies.map((nome) => nome.location);

  const resultado = {
    id: pessoa.id,
    fullName,
    species: nomesDasEspecies,
    locations: localDasEspecies,
  };
  return resultado;
}

module.exports = getEmployeesCoverage;
