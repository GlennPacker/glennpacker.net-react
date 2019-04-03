import React, { Component } from "react";

// children
import ClientContainer from "../clientContainer";

// styles
import { Style } from "radium";
import styles from "./clientsStyle";

class Clients extends Component {
  render() {
    return (
      <div className="card">
        <Style rules={styles} />
        <div className="card-header bg-info text-white">Clients</div>
        <div className="card-body client-card-body">
          <p className="card-text">Previous clients in recent years:</p>
          <ClientContainer />
        </div>
      </div>
    );
  }
}

export default Clients;
