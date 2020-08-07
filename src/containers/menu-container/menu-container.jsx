import { connect } from 'react-redux';
import Menu from '../../components/menu';

const mapStateToProps = (state) => ({
  checkboxes: { ...state.checkboxes },
  name: state.name,
});

export default connect(mapStateToProps)(Menu);
