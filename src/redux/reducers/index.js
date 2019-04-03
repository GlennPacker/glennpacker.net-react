import { combineReducers } from "redux";
import clients from "./clientReducer";
import histories from "./historyReducer";

const rootReducer = combineReducers({
  clients,
  histories
});

export default rootReducer;
