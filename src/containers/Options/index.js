import { connect } from 'react-redux';
import Options from 'src/components/Options';
import { bookingInputOptionsChange } from '../../actions/bookings';

const mapStateToProps = (state) => ({
  choices: state.bookings.choices,
});

const mapDispatchToProps = (dispatch) => ({
  changeSelect: (event) => {
    const action = bookingInputOptionsChange({ [event.target.name]: event.currentTarget.value });
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Options);
