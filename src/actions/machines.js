export const FETCH_MACHINES_BY_ZIP_CODE = 'FETCH_MACHINES_BY_ZIP_CODE';

export const fetchMachinesByZipCode = () => ({
  type: FETCH_MACHINES_BY_ZIP_CODE,
});

export const SET_MACHINES = 'SET_MACHINES';

export const setMachines = (machines) => ({
  type: SET_MACHINES,
  machines,
});

export const SEARCH_INPUT_CHANGE = 'SEARCH_INPUT_CHANGE';
export const inputChange = (payload) => ({
  type: SEARCH_INPUT_CHANGE,
  payload,
});

export const ADD_MACHINE_INPUT_CHANGE = 'ADD_MACHINE_INPUT_CHANGE';
export const addMachineInputChange = (payload) => ({
  type: ADD_MACHINE_INPUT_CHANGE,
  payload,
});

export const MACHINE_INPUT_CHANGE = 'MACHINE_INPUT_CHANGE';
export const machineInputChange = (payload) => ({
  type: MACHINE_INPUT_CHANGE,
  payload,
});

export const ADD_MACHINE_FORM_SUBMIT = 'ADD_MACHINE_FORM_SUBMIT';
export const addMachineFormSubmit = () => ({
  type: ADD_MACHINE_FORM_SUBMIT,
});

export const ADD_MACHINE_FORM_SUBMIT_SUCCESS = 'ADD_MACHINE_FORM_SUBMIT_SUCCESS';
export const addMachineFormSubmitSuccess = (payload) => ({
  type: ADD_MACHINE_FORM_SUBMIT_SUCCESS,
  payload,
});

export const UPDATE_MACHINE = 'UPDATE_MACHINE';
export const updateMachine = (payload) => ({
  type: UPDATE_MACHINE,
  payload,
});
export const DELETE_MACHINE = 'DELETE_MACHINE';
export const deleteMachine = () => ({
  type: DELETE_MACHINE,
});
export const DELETE_MACHINE_SUCCESS = 'DELETE_MACHINE_SUCCESS';
export const deleteMachineSuccess = () => ({
  type: DELETE_MACHINE_SUCCESS,
});
