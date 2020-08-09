import { connect } from 'react-redux';
import CardsList from '../../components/cards-list';

const mapStateToProps = (state) => ({
  cards: state.tickets,
  error: state.error,
  checkboxes: state.checkboxes,
  tab: state.tab,
  hundredsСounterOfCard: state.hundredsСounterOfCard,
});

export default connect(mapStateToProps)(CardsList);
