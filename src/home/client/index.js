import React, { Component } from 'react';
import { Style } from 'radium'
import styles from './clientStyle'

class Client extends Component {
	state = { expanded: false }

	toggleExpanded = (e) => {
		e.preventDefault();
		this.setState({expanded: !this.state.expanded})
	}

	render() {
		const expandButtons = this.state.expanded
			? <i className="fas fa-caret-up text-info pl-2" onClick={this.toggleExpanded}></i>
			: <i className="fas fa-caret-down text-info pl-2 pt-3" onClick={this.toggleExpanded}></i>

		const client = this.props.client
		if (client) return (
			<li>
				<Style rules={styles} />
				<span>{client.name} </span>
				{ expandButtons }

				{	this.state.expanded ?
						<div className="client-item">
							<p>
								<span>{client.jobTitle } </span>
								<span>({client.when})</span>
							</p>

							<dl>
								<dt>Technolgies</dt>

								{ client.technologies.map((tech, i) => {
									return (<dd key={i}>
										{ tech.link
											? <a href={tech.link}>{tech.text}</a>
											: <span>{tech.text}</span>
										}
									</dd>)
								})}
							</dl>
						</div>
					: null
				}

			</li>
		)
		else return null;
	}
}

export default Client;
