import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function historyReducer(state = initialState.histories, action) {
  switch (action.type) {
    case actionTypes.LOAD_HISTORIES_SUCCESS:
      return action.histories;
    default:
      return state;
  }
}
