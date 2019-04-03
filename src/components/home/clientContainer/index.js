import React, { Component } from "react";

// redux
import { bindActionCreators } from "redux";
import * as clientActions from "../../../redux/actions/clientActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// children
import Client from "../client";

class ClientContainer extends Component {
  componentDidMount() {
    const { actions, clients } = this.props;

    if (clients.length === 0) {
      actions.loadClients().catch(error => {
        alert("Loading courses failed" + error);
      });
    }
  }

  render() {
    return (
      <ul>
        {this.props.clients.map((client, i) => {
          return <Client key={i} client={client} />;
        })}
      </ul>
    );
  }
}

ClientContainer.propTypes = {
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
)(ClientContainer);
