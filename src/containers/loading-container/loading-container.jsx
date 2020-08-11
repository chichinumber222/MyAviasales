import { connect } from 'react-redux';
import Loading from '../../components/loading';

const mapStateToProps = (state) => ({
  successfulDownload: state.successfulDownload,
  error: state.error,
})

export default connect(mapStateToProps)(Loading);