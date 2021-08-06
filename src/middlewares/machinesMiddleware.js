import api from 'src/api';
import notify from 'src/notify';

import {
  FETCH_MACHINES_BY_ZIP_CODE,
  setMachines,
  ADD_MACHINE_FORM_SUBMIT,
  UPDATE_MACHINE,
  DELETE_MACHINE,
  addMachineFormSubmitSuccess,
  deleteMachineSuccess,
} from '../actions/machines';
import history from '../utils/history';

export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MACHINES_BY_ZIP_CODE: {
      const { search } = store.getState().machines.inputs;
      api.get(`/search/${search}`)
        .then((result) => {
          store.dispatch(setMachines(result.data));
          notify.info(`Il y a  ${result.data.length} résultats à votre recherche ${search}`);
          console.log('search result', result.data);
        })
        .catch((err) => {
          console.log('error pas de machine', err);
          notify.error(err.response.data.message);
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
        city,
        zip_code,
      } = store.getState().machines.inputs;
      const formData = new FormData();
      formData.append('address', address);
      formData.append('title', title);
      formData.append('picture', picture);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('capacity', capacity);
      formData.append('city', city);
      formData.append('zip_code', zip_code);
      api.post('/machine', formData, { headers: { 'content-type': 'multipart/form-data' } })
        .then((result) => {
          notify.success(result.data.message);
          console.log('result.data du post addwasher', result.data.machine);
          store.dispatch(addMachineFormSubmitSuccess(result.data.machine));
          history.push('/');
        })
        .catch((err) => {
          console.error(err);
          notify.error(err.response.data.message);
        });
      return next(action);
    }
    case UPDATE_MACHINE: {
      console.log('machine mise a jour', store.getState().user.machine[0]);
      api.patch('/machine',
        {
          id: store.getState().user.machine[0].id,
          address: store.getState().user.machine[0].address,
          title: store.getState().user.machine[0].title,
          picture: store.getState().user.machine[0].picture,
          description: store.getState().user.machine[0].description,
          price: store.getState().user.machine[0].price,
          capacity: store.getState().user.machine[0].capacity,
          zip_code: store.getState().user.machine[0].zip_code,
          city: store.getState().user.machine[0].city,
        })
        .then((result) => {
          console.log('result.data du post addwasher', result.data);
          notify.success(result.data.message);
          history.push('/');
        })
        .catch((err) => {
          console.error(err);
          notify.error(err.response.data.message);
        });
      return next(action);
    }
    case DELETE_MACHINE: {
      const machineId = store.getState().user.machine[0].id;
      api.delete(`/machine/${machineId}`)
        .then((result) => {
          console.log('result.data du delete addwasher', result.data);
          notify.success(result.data.message);
          history.push('/');
          store.dispatch(deleteMachineSuccess());
        })
        .catch((err) => {
          console.error(err);
          notify.error(err.response.data.message);
        });
      return next(action);
    }
    default:
      return next(action);
  }
};
