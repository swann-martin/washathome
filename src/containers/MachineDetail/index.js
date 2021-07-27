import { connect } from 'react-redux';
import MachineDetail from 'src/components/MachineDetail';

const mapStateToProps = (state) => ({
  picture: 'https://tse2.mm.bing.net/th?id=OIP.oWpu66uGtQSD5b4Z2175yQHaFE&pid=Api&P=0&w=254&h=175',
  city: 'Bastia',
  zip_code: '20200',
  title: "La machine d'Ange",
  days: ['21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier', '21 janvier'],
  hours: ['13h', '13h', '13h', '13h', '13h', '13h', '13h', '14h'],
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MachineDetail);
