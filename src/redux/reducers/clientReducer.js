import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export default function clientReducer(state = initialState.clients, action) {
	switch (action.type) {
		case actionTypes.LOAD_CLIENTS_SUCCESS:
			return action.clients
		default:
			return state;
	}
}
