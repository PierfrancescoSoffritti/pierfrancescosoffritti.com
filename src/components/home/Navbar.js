import React, { Component } from 'react';

import "./navbar.css"

export default class Navbar extends Component {

    render () {

        const className = this.props.currentScroll === 0 ? "" : "elevated";

        return (
            <div>
                <div className={"navbar navbar-dimensions " +className} >
                    <span className="navbar-item navbar-item-dimensions">about</span>
                    <span className="navbar-item navbar-item-dimensions">work</span>
                    <span className="navbar-logo">logo</span>
                    <span className="navbar-item navbar-item-dimensions">blog</span>
                    <span className="navbar-item navbar-item-dimensions">contact</span>
                </div>
                <div className="navbar-dimensions"/>
            </div>
        );
    }
}