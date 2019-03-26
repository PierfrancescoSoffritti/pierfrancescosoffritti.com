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
                    If you want to say something you can send me an email, or reach out on social media :)
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