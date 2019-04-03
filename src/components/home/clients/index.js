import React, { Component } from 'react';
import Client from '../client'
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Style } from 'radium'
import styles from './clientsStyle'

class Clients extends Component {
	render() {
		if (this.props.clients) {
			return (
				<div className="card">
					<Style rules={styles} />
					<div className="card-header bg-info text-white">
						Clients
					</div>
					<div className="card-body client-card-body">
						<p className="card-text">Previous clients in recent years:</p>
						<ul>
							{ this.props.clients.map((client, i) => {
								return (<Client key={i} client={client} />)
							})}
						</ul>
					</div>
				</div>
			)
		} else {
			return (null)
		}
	}
}

Clients.propTypes = {
	clients: PropTypes.array.isRequired
};

function mapStateToProps (state) {
	return {
		clients: state.clients
	}
}

export default connect(
	mapStateToProps
)(Clients);
