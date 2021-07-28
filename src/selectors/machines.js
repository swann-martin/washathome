/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
* @param {Array} machines - toutes les machines
* @param {string} searchedSlug - le slug de la machine recherchée
* @return {Object} - La machine trouvée
*/
export function findMachine(machines, searchedSlug) {
  const machine = machines.find((testedMachine) => {
    return testedMachine.slug === searchedSlug;
  });
  return machine;
}
