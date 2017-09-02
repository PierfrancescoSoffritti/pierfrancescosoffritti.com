import React, { Component } from 'react';

import threeJsEntryPoint from "./threejs/threeJsEntryPoint"
import "./header.css"

export default class Header extends Component {
    
    componentDidMount() {
        threeJsEntryPoint(this.root);
    }

    render () {
        return (
            <div className="header-header" ref={element => this.root = element}></div>
        );
    }
}