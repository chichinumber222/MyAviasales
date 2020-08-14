import { connect } from 'react-redux';
import CardsList from '../../components/cards-list';
import { showMoreCards } from '../../reduxStore/actions';

const mapStateToProps = (state) => ({
  cards: state.tickets,
  checkboxes: state.checkboxes,
  tab: state.tab,
  ticketsPortionsСounter: state.ticketsPortionsСounter,
  successfulDownload: state.successfulDownload,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  showMoreCardsWithDispatch: () => dispatch(showMoreCards()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
