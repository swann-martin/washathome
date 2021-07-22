import { connect } from 'react-redux';
import SearchBar from 'src/components/SearchBar';
import { inputChange, fetchMachinesByZipCode } from 'src/actions/machines';

const mapStateToProps = (state) => ({
  search: state.machines.inputs.search,
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, name) => {
    console.log(value, name);
    const action = inputChange({ [name]: value });
    dispatch(action);
  },
  handleSearchSubmit: () => {
    const action = fetchMachinesByZipCode();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
