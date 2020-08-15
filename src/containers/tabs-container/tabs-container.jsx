import { connect } from 'react-redux';
import Tabs from '../../components/tabs';
import { selectTab } from '../../reduxStore/action-creators';

const mapStateToProps = (state) => ({
  activeTab: state.tab,
});

const mapDispatchToProps = (dispatch) => ({
  selectTabDispatch: (value) => dispatch(selectTab(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
