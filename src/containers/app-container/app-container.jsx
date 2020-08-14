import { connect } from 'react-redux';
import App from '../../components/app';
import { asyncGetTickets } from '../../reduxStore/actionCreators';

const mapDispatchToProps = (dispatch) => ({
  asyncGetTicketsWithDispatch: () => dispatch(asyncGetTickets()),
});

export default connect(null, mapDispatchToProps)(App);
