import React, { Component } from "react";
import { bindActionCreators } from "redux";
import Client from "../client";
import * as clientActions from "../../../redux/actions/clientActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ClientList extends Component {
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
        <div className="container">
          <div className="row">
            {this.props.clients.map((client, i) => {
              return <Client key={i} index={i} client={client} />;
            })}
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

ClientList.propTypes = {
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
)(ClientList);
