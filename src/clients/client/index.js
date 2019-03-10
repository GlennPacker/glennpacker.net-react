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
			? <i className="fas fa-caret-up  text-white pl-2"></i>
			: <i className="fas fa-caret-down  text-white pl-2"></i>
        
        const clientTech = (isBackEnd, client) => {
            return (client.technologies.some(item => item.isBackEnd === isBackEnd)
                ? <div>
                    {   isBackEnd
                        ? <dt>Back End</dt>
                        : <dt>Front End</dt>
                    }
                    <dl>{client.technologies.filter(item => item.isBackEnd === isBackEnd).map(be => be.text).join(', ')}</dl>
                </div>
                : null)
        }
        const clientTest = (client) => {
            return (
                client.testTech 
                ? <div>
                    <dt>TDD - Test Driven Development</dt>
                    <dl>{client.testTech.join(', ')}</dl>
                </div>
                : null
            )
        }
        const cardColor = (index) => {
            switch (index) {
                case 0:
                case 4:
                case 8: return 'border-success card'
                case 1:
                case 5:
                case 6: return 'border-danger card'
                default: return 'border-primary card'
            }
        }

        const cardHeaderColor = (index) => {
            switch (index) {
                case 0:
                case 4:
                case 8: return 'bg-success card-header text-white'
                case 1:
                case 5:
                case 6: return 'bg-danger card-header text-white'
                default: return 'bg-primary card-header text-white'
            }
        }

        const client = this.props.client
        const index = this.props.index
        
        if (client) return (
            <div className="col-4 pb-4">
                <Style rules={styles} />
                <div className={cardColor(index)} onClick={this.toggleExpanded}>
                    <div className={cardHeaderColor(index)}>{client.name} {expandButtons}</div>
                    <div className="card-body">
                        <p>
                            {client.summary} 
                        </p>
                        {
                            this.state.expanded ?
                            <div>
                                <dl>
                                    { client.projectStyle
                                        ? <dt>{client.projectStyle}</dt>
                                        : null
                                    }
                                </dl>
                                { clientTech(true, client) }
                                { clientTech(false, client) }
                                { clientTest(client)}    
                                <p>{client.when}</p>                                                                
                            </div>
                            : null
                        }
                    </div>
                </div>
            </div>
        ) 
        else return null;
    }
}
 
export default Client;