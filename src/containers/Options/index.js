import { connect } from 'react-redux';
import Options from 'src/components/Options';

const mapStateToProps = (state) => ({
  option1: '',
  option2: '',
  option3: '',
  options: [
    {
      title: 'pas d\'option',
      price: 0,
    },
    {
      title: 'pliage',
      price: 2,
    },
    {
      title: 'repassage',
      price: 8,
    },
    {
      title: 'sèche linge',
      price: 3,
    },
    {
      title: 'séparation blanc/couleurs',
      price: 5,
    },
    {
      title: 'lingettes anti-décoloration',
      price: 2,
    },
  ],
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Options);
