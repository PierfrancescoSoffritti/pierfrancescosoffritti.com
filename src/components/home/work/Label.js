import React, { Component } from 'react';

import "./label.css"

export default class Label extends Component {
    render () {
        const {label} = this.props;

        return (
            <label className="label" >{label}</label >    
        );
    }
}