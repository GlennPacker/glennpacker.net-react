import * as actionTypes from "./actionTypes";

export function loadClientsSuccess(clients) {
  return { type: actionTypes.LOAD_CLIENTS_SUCCESS, clients };
}

export function loadClients() {
  return function(dispatch) {
    return fetch("./clients.json")
      .then(data => data.json())
      .then(clients => dispatch(loadClientsSuccess(clients)));
  };
}
