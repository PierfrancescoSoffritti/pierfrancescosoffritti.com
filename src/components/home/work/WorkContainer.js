import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

import Work from "./Work";
import ProjectDetails from "./projectDetails/ProjectDetails";

class WorkContainer extends Component {

    componentDidMount = () => {        
        this.props.history.listen(this.props.onShowProjectDetails);
    }

    render () {
        const { location } = this.props;
        
        const key = location.pathname.substring(1);

        return (
            <TransitionGroup className="work">
                <CSSTransition  key={key} classNames='route-fade' timeout={600} >
                    <Switch location={location} >             
                        <Route path={"/:projectId"} exact component={ProjectDetails} />  
                        <Route path={"/"}  component={Work} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        );
    }
}

export default withRouter(WorkContainer);