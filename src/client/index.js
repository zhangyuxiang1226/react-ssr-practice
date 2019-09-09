import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import routes from '../routers';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.hydrate(<BrowserRouter>
    {routes}
</BrowserRouter>, document.getElementById('root'));