import { connect } from 'react-redux';
import Cards from 'src/components/Cards';

const mapStateToProps = (state) => ({
  machines: state.machines.foundMachines,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
