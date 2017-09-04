import React, { Component } from 'react';

import "./contactItem.css"

export default class ContactItem extends Component {
    render () {

        const { icon, text, url } = this.props;

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
}