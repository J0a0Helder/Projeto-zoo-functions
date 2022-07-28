const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};

  const dados = data.employees.find((element) => element.firstName === employeeName
  || element.lastName === employeeName);

  return dados;
}

module.exports = getEmployeeByName;
