import {connect} from 'react-redux';
import TimeContainer from './time-container';
import {getTime, startAutoTime, startSocket} from '../../components/time/time-action-creators';

export const mapStateToProps = state => ({ time: state.time });
export const mapDispatchToProps = { startAutoTime, startSocket };

export default connect(mapStateToProps, mapDispatchToProps)(TimeContainer);
