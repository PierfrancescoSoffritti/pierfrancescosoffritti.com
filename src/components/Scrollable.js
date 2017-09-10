import React, { Component } from 'react';

export default class Scrollable extends Component {
    constructor(props) {
        super(props);

        this.state = { currentScroll: 0, currentSection: "" };
    }

    componentDidMount = () => {        
        window.addEventListener("scroll", this.handleScroll);
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = event => {
        this._updateCurrentScroll();
        this._updateCurrentSection();
    }

    _updateCurrentScroll = () => this.setState( { currentScroll: this._getCurrentScroll() } )
    _getCurrentScroll = () => (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    render () {
        return (
            <div></div>
        );
    }
}