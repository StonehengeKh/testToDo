import React from "react";
import {Switch, BrowserRouter as Router, Route, } from "react-router-dom";

import {DATA_FOR_CREATE_ROUTER} from './DATA_FOR_CREATE_ROUTER'

function RouterPosts() {

    return(
        <Router>
            <Switch>
                {DATA_FOR_CREATE_ROUTER.map(({path, component}) => (
                    <Route key={path} exact path={path} component={component} />
                ))}
            </Switch>
        </Router>

    )}

export default RouterPosts

