import React from "react";
import {Switch, BrowserRouter as Router, Route, } from "react-router-dom";

import HomePage from '../screens/HomePage'
import Post from '../screens/Post'

function RouterPosts() {

    return(
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/toDo:id" component={Post}>
                </Route>
            </Switch>
        </Router>

    )}

export default RouterPosts

