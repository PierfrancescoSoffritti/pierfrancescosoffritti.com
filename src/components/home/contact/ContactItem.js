import React from 'react';

import "./contactItem.css"

import ReactGA from 'react-ga';

const ContactItem = ({ icon, text, url }) => {
    const className = icon;

    const onLinkClick = () => {
        ReactGA.event({
            category: 'User',
            action: 'Click on contact item: ' +url
        });
    }

    return (
        <a onClick={onLinkClick} className="contact-item" href={url} target="_blank" rel="me noopener noreferrer">
            <span className="contact-item-icon contact-item-icon-margin">
                <i className={className} aria-hidden="true"></i>
            </span>
            <span className="contact-item-text">{text}</span>
        </a>
    );
}

export default ContactItem;