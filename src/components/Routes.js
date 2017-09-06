import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './home/Home'
// import ProjectDetails from './projectDetails/ProjectDetails'
// import PageNotFound from './pageNotFound/PageNotFound'

const routes = [
    {
        name: "Home",
        path: "/",
        // exact: true,
        component: Home
    }, 
    // {
    //     name: "Project Details",
    //     path: "/:projectId",
    //     component: ProjectDetails
    // },
    // {
    //     name: "404 No match",
    //     component: PageNotFound
    // }
];

const Routes = () => {    
    return (
        <Router> 
            <Switch>               
                { routes.map( route => <Route key={route.name} exact={route.exact} path={route.path} component={route.component} /> ) }
            </Switch>
        </Router>
    );
}

export default Routes;