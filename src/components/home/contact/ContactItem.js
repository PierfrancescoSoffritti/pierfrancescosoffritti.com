import React from 'react';

import "./contactItem.css"

const ContactItem = ({ icon, text, url }) => {
    const className = "fa fa-" +icon;

    return (
        <a className="contact-item" href={url} target="blank">
            <span className="contact-item-icon contact-item-icon-margin">
                <i className={className} aria-hidden="true"></i>
            </span>
            <span className="contact-item-text">{text}</span>
        </a>
    );
}

export default ContactItem;