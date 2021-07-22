import api from 'src/api';
import { FETCH_MACHINES_BY_ZIP_CODE } from '../actions/machines';


export default (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_MACHINES_BY_ZIP_CODE:
      store.dispatch(setLoading(true));
      api.get('/recipes')
        .then((result) => {
          // Extraction des machines par code postal
          const machinesFetched = result.data;
          // On ajoute machinesFetched
          // dans le store de redux, afin de pouvoir les utiliser
          // dans les différents composants
          // Donc on dispatch une nouvelle action de stockage
          // pour modifier le store
          store.dispatch(setMachines(machinesFetched));
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          store.dispatch(setLoading(false));
        });
      return next(action);
    default:
      return next(action);
  }
};
