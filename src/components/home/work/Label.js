import React, { Component } from 'react';

import "./label.css"

export default class Label extends Component {
    render () {

        const {label, minimalStyle, commonAction} = this.props;
        const className = minimalStyle ? "label-minimal" : commonAction ? "label common-label " : "label special-label ";

        return (
            <label className={className} >{label}</label >    
        );
    }
}