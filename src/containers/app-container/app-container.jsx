import { connect } from 'react-redux';
import App from '../../components/app';
import { asyncGetTickets } from '../../reduxStore/action-creators';

const mapDispatchToProps = (dispatch) => ({
  asyncGetTicketsWithDispatch: () => dispatch(asyncGetTickets()),
});

export default connect(null, mapDispatchToProps)(App);
