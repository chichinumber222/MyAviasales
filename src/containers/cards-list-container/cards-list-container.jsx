import { connect } from 'react-redux';
import CardsList from '../../components/cards-list';

const mapStateToProps = (state) => ({
  cards: state.tickets,
  error: state.error,
});

export default connect(mapStateToProps)(CardsList);
