import * as actionTypes from "./actionTypes";

export function loadHistoriesSuccess(histories) {
  return { type: actionTypes.LOAD_HISTORIES_SUCCESS, histories };
}

export function loadHistories() {
  return function(dispatch) {
    return fetch("./history.json")
      .then(data => data.json())
      .then(histories => dispatch(loadHistoriesSuccess(histories)));
  };
}
