import React, { Component } from 'react';
import Client from '../client';
import PropTypes from "prop-types";
import { connect } from "react-redux";

class ClientList extends Component {
    render() {
        if (this.props.clients) {
            return (
                <div className="container">
                    <div className="row">
                        { this.props.clients.map((client, i) => {
                            return (<Client key={i} index={i} client={client}/>)})
                        }
                    </div>
                </div>
            )
        } else {
            return null
        }
    }
}

ClientList.propTypes = {
	clients: PropTypes.array.isRequired
};

function mapStateToProps (state) {
	return {
		clients: state.clients
	}
}

export default connect(
	mapStateToProps
)(ClientList);
