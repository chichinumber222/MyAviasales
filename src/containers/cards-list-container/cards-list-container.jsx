import { connect } from 'react-redux';
import CardsList from '../../components/cards-list';

const mapStateToProps = (state) => ({
  cards: state.tickets,
  checkboxes: state.checkboxes,
  tab: state.tab,
  ticketsPortionsСounter: state.ticketsPortionsСounter,
});

export default connect(mapStateToProps)(CardsList);
