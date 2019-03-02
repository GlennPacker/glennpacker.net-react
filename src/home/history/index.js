import React, { Component } from 'react';
import './history.css';
import HistoryItem from '../historyItem'

class History extends Component {
	state = {};

	componentDidMount() {
		this.history();
	}

	history = ()  => {
		fetch('./history.json')
		.then(data => data.json())
		.then(historyData => {
			this.historyData = historyData;
			this.setState({ historyData });
		})
	}

	render() {
		if (this.state.historyData) {
			return (
				<div className="card">
					<div className="card-header bg-success text-white">
						History
					</div>
					<div className="card-body history-card-body">
						<p className="card-text">With over 25 years experience in the IT industry from support, training and development.</p>
						<ul>
							{ this.state.historyData.map((item, i) => {
								return (<HistoryItem key={i} historyItem={item} />)
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

export default History;