import React from 'react';

import profilePic from "../../../assets/images/profile.jpg"

import "../../_common/common.css"
import "./about.css"

import ReactGA from 'react-ga';

const About = () => {

    const onLinkClick = () => {
        ReactGA.event({
            category: 'User',
            action: 'Click on CV'
        });
    }

    return (
        <div className="home-section container-about">        
            <img className="profile-picture-about" alt="profilepic" src={profilePic} />
            <div className="about-text">
                <span className="about-text-main">Hi! I'm <span className="about-name">Pier</span></span>
                <br/><span className="about-text-subtitle">I'm a software engineer</span>
                <br/><br/>I like to build things with code
                <br/>Some of my interests are: Android, UI/UX design, Web development, games development, VR and computer graphics.
                <br/><br/>If you want to know more: <a onClick={onLinkClick} href="https://docs.google.com/document/d/1fAmPU_8BsL2XIksU9V86YQ7ea3YRO7_Da1s5N555XIU/edit?usp=sharing" target="_blank" rel="noopener noreferrer"><span className="about-cv">HERE is my CV.</span></a>
                <br/><br/>Keep scrolling to see some of the projects I've worked on.
            </div>                
        </div>
    );
}

export default About;