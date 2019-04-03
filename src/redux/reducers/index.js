import { combineReducers } from 'redux';
import clients from './clientReducer';

const rootReducer = combineReducers({
	clients
});

export default rootReducer;
