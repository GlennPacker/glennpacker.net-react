import React, { useEffect } from "react";
import Client from "../client";
import { loadClients } from "../../../redux/actions/clientActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Client list to use hooks
function ClientList({ loadClients, clients }) {
  useEffect(() => {
    if (clients.length === 0) {
      loadClients().catch(error => {
        alert("Loading courses failed" + error);
      });
    }
  }, []); // empty array for the items to watch (will only run once if empty array)

  return (
    <div className="container">
      <div className="row">
        {clients.map((client, i) => {
          return <Client key={i} index={i} client={client} />;
        })}
      </div>
    </div>
  );
}

ClientList.propTypes = {
  loadClients: PropTypes.func.isRequired,
  clients: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    clients: state.clients.slice(0, Math.floor(state.clients.length / 3) * 3) // ensure there is only a multiple of three
  };
}

const mapDispatchToProps = {
  loadClients
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClientList);
