import React, { Component } from 'react';

import "./navbar.css"

export default class Navbar extends Component {

    render () {

        const className = this.props.currentScroll === 0 ? "" : "elevated";

        return (
            <div>
                <div className={"navbar navbar-dimensions " +className} >
                    <span className="navbar-item">about</span>
                    <span className="navbar-item">work</span>
                    <span className="navbar-logo">logo</span>
                    <span className="navbar-item">blog</span>
                    <span className="navbar-item">contact</span>
                </div>
                <div className="navbar-dimensions"/>
            </div>
        );
    }
}