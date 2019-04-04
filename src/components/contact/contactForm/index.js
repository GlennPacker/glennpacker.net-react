import React from "react";
import PropTypes from "prop-types";

function ContactForm({ contactDetails, submitForm, onFieldChange, sending }) {
  return (
    <div className="container pt-3">
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            placeholder="Enter name"
            name="name"
            value={contactDetails.name}
            onChange={onFieldChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            value={contactDetails.email}
            onChange={onFieldChange}
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
            value={contactDetails.message}
            onChange={onFieldChange}
          />
        </div>

        <button disabled={sending} type="submit" className="btn btn-primary">
          {sending ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  contactDetails: PropTypes.object.isRequired,
  submitForm: PropTypes.func.isRequired,
  onFieldChange: PropTypes.func.isRequired,
  sending: PropTypes.bool.isRequired
};

export default ContactForm;
