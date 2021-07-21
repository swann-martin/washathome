import { SET_MACHINES } from 'src/actions/machines';
import { SET_LOADING } from 'src/actions/setLoading';

export const initialState = {
  foundMachines: [],
  loading: true,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_MACHINES:
      return {
        // Pour l'instant le state C'EST list, donc déverser le state
        // avant de modifier list, n'a pour l'instant aucun intéret
        // Cependant si plus tard on modifie le state initial en rajoutant
        // une nouvelle propriété, on risque de tout faire planter
        // Dans le doute, on déverse le state, ça mange pas de pain
        ...state,
        // Puis on réécrit la liste des machines
        // En récupérant les recettes envoyées de puis l'action
        foundMachines: action.machines,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.state,
      };
    default:
      return state;
  }
};

export default reducer;
