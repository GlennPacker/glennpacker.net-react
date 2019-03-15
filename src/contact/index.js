import React, { Component } from "react";

class Contact extends Component {
	constructor() {
		super();

		this.state = {
			contactDetails: {
				name: '',
				email: '',
				message: ''
			}
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
		console.log(this.state.contactDetails)
		event.preventDefault()
	}

	render() {
		return (
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
		);
	}
}

export default Contact
