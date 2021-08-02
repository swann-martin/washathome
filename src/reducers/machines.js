import { SET_MACHINES, SEARCH_INPUT_CHANGE, ADD_MACHINE_INPUT_CHANGE, ADD_MACHINE_FORM_SUBMIT } from 'src/actions/machines';
import { SET_LOADING } from 'src/actions/setLoading';

export const initialState = {
  foundMachines: [
    // {
    //   id: 50,
    //   capacity: 12,
    //   name: 'la machine de john',
    //   description: 'une machine fictive',
    //   zip_code: 13000,
    //   address: '11 avenue test',
    //   city: 'Marseille',
    //   price: 5,
    //   picture: 'https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    //   user_id: 2,
    //   latitude: 43.2498428,
    //   longitude: 5.553463,
    // },
    // {
    //   id: 51,
    //   capacity: 12,
    //   name: 'la super turbo',
    //   description: 'une machine fictive',
    //   zip_code: 13000,
    //   address: '11 avenue test',
    //   city: 'Marseille',
    //   price: 5,
    //   picture: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1023&q=80',
    //   user_id: 2,
    //   latitude: 43.297373,
    //   longitude: 5.3690226,
    // },
  ],
  loading: true,
  inputs: {
    title: '',
    address: '',
    zip_code: '',
    city: '',
    price: '',
    description: '',
    picture: '',
    search: '',
    capacity: '6',
  },
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_INPUT_CHANGE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload,
        },
      };

    case ADD_MACHINE_INPUT_CHANGE:
      return {
        ...state,
        inputs: {
          ...state.inputs,
          ...action.payload,
        },
      };
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
