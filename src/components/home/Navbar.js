import React, { Component } from 'react';

import "./navbar.css"

export default class Navbar extends Component {
    render () {
        return (
            <div className="navbar">
                <span className="navbar-item">about</span>
                <span className="navbar-item">work</span>
                <span className="navbar-logo">logo</span>
                <span className="navbar-item">blog</span>
                <span className="navbar-item">contact</span>
            </div>
        );
    }
}