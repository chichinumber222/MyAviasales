import { connect } from 'react-redux';
import CardsList from '../../components/cards-list';

const mapStateToProps = (state) => ({
  cards: state.tickets.slice(0, 5),
});

export default connect(mapStateToProps)(CardsList);
