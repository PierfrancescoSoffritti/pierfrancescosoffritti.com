import React, { Component } from 'react';

import "./navbar.css"

export default class Navbar extends Component {

    render () {

        let className = "navbar";
        if(this.props.currentScroll > 0)
            className += " elevated";

        return (
            <div className={className} >
                <span className="navbar-item">about</span>
                <span className="navbar-item">work</span>
                <span className="navbar-logo">logo</span>
                <span className="navbar-item">blog</span>
                <span className="navbar-item">contact</span>
            </div>
        );
    }
}