import React, { Component } from "react";
import ContactForm from "./contactForm";
import ConstactSubmitted from "./contactSubmited";
import ServerProblems from "./serverProblems";
import axios from "axios";

class Contact extends Component {
  constructor() {
    super();

    this.state = {
      sending: false,
      contactDetails: {
        name: "",
        email: "",
        message: ""
      },
      submitted: false,
      serverFail: false
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.sendContactDetails = this.sendContactDetails.bind(this);
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
    debugger;
    this.setState({ ...this.state, sending: true });

    axios
      .post("http://glennpacker.net/api/contact", this.state.contactDetails)
      .then(() => {
        this.setState({ submitted: true, sending: false });
      })
      .catch(() => {
        this.setState({ serverFail: true, sending: false });
      });

    event.preventDefault();
  }

  render() {
    return !this.state.submitted ? (
      <ContactForm
        contactDetails={this.state.contactDetails}
        submitForm={this.sendContactDetails}
        onFieldChange={this.onFieldChange}
        sending={this.state.sending}
      />
    ) : this.state.serverFail ? (
      <ServerProblems />
    ) : (
      <ConstactSubmitted />
    );
  }
}

export default Contact;
