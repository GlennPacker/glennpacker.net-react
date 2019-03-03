import React, { Component } from 'react';
import Client from '../client'
import { Style } from 'radium'
import styles from './clientsStyle'

class Clients extends Component {
	state = {};

	componentDidMount() {
		this.clients();
	}

	clients = ()  => {
		fetch('./clients.json')
		.then(data => data.json())
		.then(clientsData => {
			this.clientsData = clientsData;
			this.setState({ clientsData });
		})
	}

	render() {
		if (this.state.clientsData) {
			return (
				<div className="card">
					<Style rules={styles} />
					<div className="card-header bg-info text-white">
						Clients
					</div>
					<div className="card-body client-card-body">
						<p className="card-text">Previous clients in recent years:</p>
						<ul>
							{ this.state.clientsData.map((client, i) => {
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


export default Clients;