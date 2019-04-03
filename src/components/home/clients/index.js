import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Client from "../client";
import * as clientActions from "../../../redux/actions/clientActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Style } from "radium";
import styles from "./clientsStyle";

class Clients extends Component {
  componentDidMount() {
    const { actions, clients } = this.props;

    if (clients.length === 0) {
      actions.loadClients().catch(error => {
        alert("Loading courses failed" + error);
      });
    }
  }

  render() {
    if (this.props.clients) {
      return (
        <div className="card">
          <Style rules={styles} />
          <div className="card-header bg-info text-white">Clients</div>
          <div className="card-body client-card-body">
            <p className="card-text">Previous clients in recent years:</p>
            <ul>
              {this.props.clients.map((client, i) => {
                return <Client key={i} client={client} />;
              })}
            </ul>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

Clients.propTypes = {
  actions: PropTypes.object.isRequired,
  clients: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    clients: state.clients
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadClients: bindActionCreators(clientActions.loadClients, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Clients);
