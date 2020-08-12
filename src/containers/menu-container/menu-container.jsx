import { connect } from 'react-redux';
import Menu from '../../components/menu';
import imitationScroll from '../../services/imitation-scroll-event';

const mapStateToProps = (state) => ({
  checkboxes: { ...state.checkboxes },
});

const mapDispatchToProps = (dispatch) => ({
  customDispatch: (value, actionCreator) => {
    dispatch(actionCreator(value));
    imitationScroll();
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
