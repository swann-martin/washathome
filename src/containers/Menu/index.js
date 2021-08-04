import { connect } from 'react-redux';
import Menu from '../../components/Menu';
import { toggleMenu, userLogout } from '../../actions/user';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({

  handleLogout: () => {
    console.log('logout');
    const action = userLogout();
    dispatch(action);
  },
  handleOpenMenu: () => {
    const action = toggleMenu();
    dispatch(action);
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
