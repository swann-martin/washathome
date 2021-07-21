export const FETCH_MACHINES = 'FETCH_MACHINES';

export const fetchMachines = () => ({
  type: FETCH_MACHINES,
});

export const SET_MACHINES = 'SET_MACHINES';

export const setMachines = (machines) => ({
  type: SET_MACHINES,
  machines,
});
