import React, { Component } from 'react';
import Client from '../client';

class ClientList extends Component {
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
                <div className="container">
                    <div className="row">
                        { this.state.clientsData.map((client, i) => { 
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

 
export default ClientList;