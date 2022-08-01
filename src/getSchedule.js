const data = require('../data/zoo_data');

const { hours, species } = data;
const semana = Object.keys(hours).map((key) => hours[key]);
const dias = Object.keys(hours);
const monday = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };

const todosOsAnimais = species.map((animalzinho) => animalzinho.name);

function noParameters(str) {
  const obj = {};
  dias.forEach((valor, index) => {
    obj[valor] = {
      officeHour: `Open from ${semana[index].open}am until ${semana[index].close}pm`,
      exhibition: species.filter((specie) => specie.availability.includes(valor))
        .map((specie) => specie.name),
    };
  });
  delete obj.Monday;
  const resultado = Object.assign(obj, monday);
  if (dias.includes(str)) return { [str]: resultado[str] };
  return resultado;
}

function getAnimal(str) {
  const animal = species.filter((animalzinho) => str === animalzinho.name);
  return animal[0].availability;
}

function getSchedule(scheduleTarget) {
  if (todosOsAnimais.includes(scheduleTarget)) return getAnimal(scheduleTarget);

  return noParameters(scheduleTarget);
}

module.exports = getSchedule;
