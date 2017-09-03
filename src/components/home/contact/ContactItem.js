import React, { Component } from 'react';

import "./contactItem.css"

export default class ContactItem extends Component {
    render () {

        const { icon, text } = this.props;

        const className = "fa fa-" +icon;

        return (
            <div className="contact-item">
                <span className="contact-item-icon">
                    <i className={className} aria-hidden="true"></i>
                </span>
                <span className="contact-item-text">{text}</span>
            </div>
        );
    }
}