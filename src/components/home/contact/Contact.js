import React, { Component } from 'react';
import { connect } from 'react-redux';

import ContactItem from "./ContactItem"

import { fetchSocials } from "../../../redux/actions/socials";

import "../../_common/common.css"
import "./contact.css"

class Contact extends Component {

    componentWillMount = () => {
        this.props.fetchSocials()
    }

    _handleWaypointEnter = () => {
        console.log("enter contact")
    }

    render () {
        let { socials, name, onEnter } = this.props;

        const email = socials.find( social => social.name === "email");
        
        const index = socials.indexOf(email);
        socials = socials.splice(index, 1);

        return (
            <div className="home-section contact-container">
                <div>
                    Send me an email you want to talk about tech
                    <br/>or if you want to dicuss the Ultimate Question of Life, the Universe and Everything ( <a href="https://en.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy#Answer_to_the_Ultimate_Question_of_Life.2C_the_Universe.2C_and_Everything_.2842.29" target="blank">6 &#215; 9</a> )
                </div>

                <div className="contact-social-group">
                    { email && <ContactItem icon={email.icon} text={email.text} url={email.url}/> }
                </div>

                <div className="contact-social-group">
                    { socials.map( social => <ContactItem key={social.name} icon={social.icon} text={social.text} url={social.url} />) }
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    socials: store.socials
})

const mapDispatchToProps = dispatch => ({
    fetchSocials: () => dispatch(fetchSocials)
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact);