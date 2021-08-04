import { currentMachineUpdate } from 'src/actions/bookings';
import store from 'src/store';
/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
* @param {Array} machines - toutes les machines
* @param {string} searchedId - le slug de la machine recherchée
* @return {Object} - La machine trouvée
*/
export function findMachine(machines, searchedId) {
  const machine = machines.find((testedMachine) => {

    return testedMachine.id == searchedId;
  });
  const action = currentMachineUpdate({
    machineId: machine.id,
    washerId: machine.user_id,
  });
  store.dispatch(action);
  return machine;
}
