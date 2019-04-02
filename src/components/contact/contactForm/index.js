import React from 'react';

const ContactForm = (props) => {
    const contactDetails = props.contactDetails;
    const sendForm = props.submitForm;
    const onFieldChange = props.onFieldChange;

    return (
        <div className="container pt-3">
            <form onSubmit={sendForm}>
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

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}


export default ContactForm;