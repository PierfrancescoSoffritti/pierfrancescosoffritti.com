import React, { Component } from 'react';

import { connect } from 'react-redux';

class Home extends Component {
    render () {
        return (
            <div>Home</div>
        );
    }
}

const mapStateToProps = store => ( {
    projects: store.projects
} );

export default connect(mapStateToProps)(Home);