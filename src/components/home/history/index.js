import React, { Component } from "react";
// children
import HistoriesContainer from "../historiesContainer";

// styling
import { Style } from "radium";
import styles from "./historyStyle";

class History extends Component {
  render() {
    return (
      <div className="card">
        <Style rules={styles} />
        <div className="card-header bg-success text-white">History</div>
        <div className="card-body history-card-body">
          <p className="card-text">
            With over 25 years experience in the IT industry from support,
            training and development.
          </p>
          <HistoriesContainer />
        </div>
      </div>
    );
  }
}

export default History;
