import React from 'react';
import { Style } from 'radium'
import styles from './contactSubmited'
import glenn from './GlennPacker.jpg'
import cat from './cat-waiting-for-the-mail.jpg'

const ContactSubmitted = () => {
    return (
        <div className="container pt-5">
            <Style rules={styles} />
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
    )
}

export default ContactSubmitted