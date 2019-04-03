import React, { Component } from "react";
import Client from "../client";
import * as clientActions from "../../../redux/actions/clientActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ClientList extends Component {
  componentDidMount() {
    const { loadClients, clients } = this.props;

    if (clients.length === 0) {
      loadClients().catch(error => {
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
  loadClients: PropTypes.func.isRequired,
  clients: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    clients: state.clients
  };
}

const mapDispatchToProps = {
  loadClients: clientActions.loadClients
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientList);
