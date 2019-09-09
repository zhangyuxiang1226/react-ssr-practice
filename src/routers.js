import React, { Component, Fragment } from 'react'
import { Route } from 'react-router-dom';
import Home from './containers/Home';
import Counter from './containers/Counter';
export default (
    <Fragment>
        <Route exact path="/" component={Home} />
        <Route exact path="/counter" component={Counter} />
    </Fragment>
)