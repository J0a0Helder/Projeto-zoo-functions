const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  return data.species.filter((parameter) => ids.includes(parameter.id));
}
getSpeciesByIds(data);
module.exports = getSpeciesByIds;
