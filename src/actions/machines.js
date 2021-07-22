export const FETCH_MACHINES_BY_ZIP_CODE = 'FETCH_MACHINES_BY_ZIP_CODE';

export const fetchMachinesByZipCode = () => ({
  type: FETCH_MACHINES_BY_ZIP_CODE,
});

export const SET_MACHINES = 'SET_MACHINES';

export const setMachines = (machines) => ({
  type: SET_MACHINES,
  machines,
});

export const INPUT_CHANGE = 'INPUT_CHANGE';
export const inputChange = (payload) => ({
  type: INPUT_CHANGE,
  payload,
});
