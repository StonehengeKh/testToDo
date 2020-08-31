import React from "react";
import {Switch, BrowserRouter as Router, Route, } from "react-router-dom";

import HomePage from '../screens/HomePage'
import Post from '../screens/Post'
import Hooks from "../screens/Hooks";
import Covid from '../screens/Covid';
import Weather from "../screens/Weather";
import Blockchain from '../screens/Blockchain';
import CurrenciesOfUkraine from '../screens/CurrenciesOfUkraine';
import News from '../screens/News';
import Dog from '../screens/DogVsCat';
import ColorChoice from "../screens/ColorChoice";

function RouterPosts() {

    return(
        <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/toDo:id" component={Post}/>
                <Route exact path="/hooks" component={Hooks}/>
                <Route exact path="/covid-19" component={Covid}/>
                <Route exact path="/weather" component={Weather}/>
                <Route exact path='/blockchain' component={Blockchain}/>
                <Route exact path='/currencies-ukraine' component={CurrenciesOfUkraine}/>
                <Route exact path='/news-ukraine' component={News}/>
                <Route exact path='/random-dog' component={Dog}/>
                <Route exact path='/color-picker' component={ColorChoice}/>
            </Switch>
        </Router>

    )}

export default RouterPosts

