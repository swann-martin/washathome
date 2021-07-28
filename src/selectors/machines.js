/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
* @param {Array} machines - toutes les machines
* @param {string} searchedId - le slug de la machine recherchée
* @return {Object} - La machine trouvée
*/
export function findMachine(machines, searchedId) {
  const machine = machines.find((testedMachine) => {
    console.log('testedMachineID', testedMachine.id);
    console.log('searchedId', searchedId);
    return testedMachine.id == searchedId;
  });
  return machine;
}
