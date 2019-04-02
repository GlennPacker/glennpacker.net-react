import React, { Component } from 'react';
import { Style } from 'radium'
import styles from './historyItemStyle'

class HistoryItem extends Component {
	state = { expanded: false }

	toggleExpanded = (e) => {
		e.preventDefault();
		this.setState({expanded: !this.state.expanded});
	}

	render() {
		const historyItem = this.props.historyItem

		if (historyItem) return (
			<li>
				<Style rules={styles} />
				<span className="year">{historyItem.year}</span>
				<span className="pl-2">{historyItem.title}</span>
				{
					this.state.expanded
					? <i className="fas fa-caret-up text-info pl-2" onClick={this.toggleExpanded}></i>
					: <i className="fas fa-caret-down text-info pl-2" onClick={this.toggleExpanded}></i>
				}


				{	this.state.expanded ?
					<div className="history-item-item">
						{ historyItem.details.summary.map((item, i) => {
							return(<p key={i}>{item}</p>)
						}) }

						<dl>
							{ historyItem.details.title
								? <dt>{historyItem.details.title}</dt>
								: null
							}

							{ historyItem.details.listItems.map(listItem => {
								return (<dd key={listItem.id}>
									{ listItem.link
										? <a href={listItem.link}>{listItem.text}</a>
										: <span>{listItem.text}</span>
									}
								</dd>)
							})}
						</dl>
					</div>
					: null
				}
			</li>
		)
	}
}

export default HistoryItem;