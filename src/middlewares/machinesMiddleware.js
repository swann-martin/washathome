import api from 'src/api';

import { FETCH_MACHINES_BY_ZIP_CODE, setMachines, ADD_MACHINE_FORM_SUBMIT, UPDATE_MACHINE, DELETE_MACHINE, } from '../actions/machines';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MACHINES_BY_ZIP_CODE: {
      const { search } = store.getState().machines.inputs;
      api.get(`/search/${search}`)
        .then((result) => {
          store.dispatch(setMachines(result.data));
          console.log('search result', result.data);
        })
        .catch((err) => {
          console.log('error pas de machine', err);
        });
      return next(action);
    }

    // ajouter des machines grâce à un formulaire
    case ADD_MACHINE_FORM_SUBMIT: {
      const {
        address,
        title,
        picture,
        description,
        price,
        capacity,
        zip_code,
        city,
      } = store.getState().machines.inputs;
      api.post('/machine', { title, address, zip_code, city, picture, description, price, capacity })
        .then((result) => {
          console.log('result.data du post addwasher', result.data);
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    case UPDATE_MACHINE: {
      const { machineId } = store.getState().machine.machineId;
      const {
        address,
        title,
        picture,
        description,
        price,
        capacity,
        zip_code,
        city,
      } = store.getState().user.machine;
      api.patch(`/machine/${machineId}`)
        .then((result) => {
          console.log('result.data du post addwasher', result.data);
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    case DELETE_MACHINE: {
      const { machineId } = store; getState().machine[0].id;
      api.delete(`/machine/${machineId}`)
        .then((result) => {
          console.log('result.data du post addwasher', result.data);
        })
        .catch((err) => {
          console.error(err);
        });
      return next(action);
    }
    default:
      return next(action);
  }
};