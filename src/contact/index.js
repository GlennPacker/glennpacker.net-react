import React, { Component } from "react";
import axios from 'axios';
import { Style } from 'radium'
import styles from './contactStyle'
import glenn from './GlennPacker.jpg'
import cat from './cat-waiting-for-the-mail.jpg'

class Contact extends Component {
	constructor() {
		super();

		this.state = {
			contactDetails: {
				name: '',
				email: '',
				message: ''
			},
			submitted: false,
			serverFail: false
		}
		this.onFieldChange = this.onFieldChange.bind(this);
		this.sendContactDetails = this.sendContactDetails.bind(this)
	}

	onFieldChange(event) {
		this.setState({
			contactDetails: {
				...this.state.contactDetails,
				[event.target.name]: event.target.value
			}
		});
	}

	sendContactDetails(event) {
		axios.post('http://glennpacker.net/api/contact', this.state.contactDetails).then(() => {
			this.setState({submitted: true})
		}).catch(() => {
			this.setState({serverFail: true})
		})

		event.preventDefault()
	}

	render() {
		return (
			<div>
			<Style rules={styles} />
			{
				this.state.submitted ?
					<div className="container pt-3">
						<form onSubmit={this.sendContactDetails}>
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input
									required
									type="text"
									className="form-control"
									placeholder="Enter name"
									name="name"
									value={this.state.name}
									onChange={this.onFieldChange}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="email">Email address</label>
								<input
									type="email"
									className="form-control"
									placeholder="Enter email"
									name="email"
									value={this.state.email}
									onChange={this.onFieldChange}
								/>
							</div>

							<div className="form-group">
								<label htmlFor="message">Message</label>
								<textarea
									required
									className="form-control"
									placeholder="Enter message"
									rows="3"
									name="message"
									value={this.state.message}
									onChange={this.onFieldChange}
								/>
							</div>

							<button type="submit" className="btn btn-primary">Submit</button>
						</form>
					</div>
				: !this.state.serverFail ?
					<div className="container pt-5">
						<div className="row">
							<div className="col-sm">
								<img src={glenn} className="contact-img" alt="contact glenn" />
							</div>
							<div className="col-sm">
								<h1>Thank you</h1>
								<p className="pt-3">I will get back to you as soon as we can.</p>
							</div>
							<div className="col-sm">
								<img src={cat} className="contact-img" alt="mailman waiting" />
							</div>
						</div>
					</div>
				: <div>yikes</div>
			}
		</div>
		)
	}
}

export default Contact
