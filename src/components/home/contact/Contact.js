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

    render () {
        let { socials } = this.props;

        const email = socials.find( social => social.name === "email");
        console.log(email)
        
        const index = socials.indexOf(email);
        socials = socials.splice(index, 1);

        return (
            <div className="home-section contact-container">
                <div>
                    Send me an email you want to talk about tech
                    <br/>or if you want to dicuss the the Ultimate Question of Life, the Universe and Everything ( .. the answer is 42, not much to dicuss here)
                </div>

                { email && <ContactItem icon={email.icon} text={email.text} /> }

                <div className="contact-social-group">
                    { socials.map( social => <ContactItem key={social.name} icon={social.icon} text={social.text} />) }
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