const data = require('../data/zoo_data');

const { prices } = data;
const { adult, senior, child } = prices;

function countEntrants(entrants) {
  const crianca = entrants.filter((idade) => idade.age < 18).length;
  const adulto = entrants.filter((idade) => idade.age >= 18 && idade.age < 50).length;
  const idoso = entrants.filter((idade) => idade.age >= 50).length;
  const quantidades = { child: crianca, adult: adulto, senior: idoso };
  return quantidades;
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) return 0;
  const pessoa = countEntrants(entrants);
  return ((pessoa.adult * adult) + (pessoa.child * child) + (pessoa.senior * senior));
}

module.exports = { calculateEntry, countEntrants };
