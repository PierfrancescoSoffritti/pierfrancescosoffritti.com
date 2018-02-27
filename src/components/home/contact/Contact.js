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

    _extractEmail = socials => {
        const email = socials.find( social => social.name === "email");
        
        const index = socials.indexOf(email);
        const filteredSocials = socials.splice(index, 1);

        return { filteredSocials, email}
    }    

    render () {
        const { socials } = this.props;
        const { email, filteredSocials } = this._extractEmail(socials);

        return (
            <div className="home-section contact-container">
                <div>
                    Send me an email if you want to talk about tech
                    <br/>or if you want to dicuss <a href="https://en.wikipedia.org/wiki/Phrases_from_The_Hitchhiker%27s_Guide_to_the_Galaxy#Answer_to_the_Ultimate_Question_of_Life.2C_the_Universe.2C_and_Everything_.2842.29" target="_blank" rel="noopener noreferrer">the Ultimate Question of Life, the Universe and Everything</a>
                </div>

                <div className="contact-social-group">
                    { email && <ContactItem icon={email.icon} text={email.text} url={email.url}/> }
                </div>

                <div className="contact-social-group">
                    { filteredSocials.map( social => <ContactItem key={social.name} icon={social.icon} text={social.text} url={social.url} />) }
                </div>
            </div>
        );
    }
}

const mapStateToProps = store => ({
    socials: store.socials
})

const mapDispatchToProps = dispatch => ({
    fetchSocials: (args) => dispatch(fetchSocials(args))
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact);