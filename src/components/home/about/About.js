import React, { Component } from 'react';

import profilePic from "../../../assets/images/circle.PNG"

import "../../_common/common.css"
import "./about.css"

export default class About extends Component {
    render () {
        return (
            <div className="home-section container-about">                
                <img className="profile-picture-about" alt="profilepic" src={profilePic} />
                <div>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>                
            </div>
        );
    }
}