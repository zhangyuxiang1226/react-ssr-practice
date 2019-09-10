import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import routers from '../routers';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
ReactDOM.hydrate(<BrowserRouter>
    <React.Fragment>
        <Header />
        <div className="container" style={{ marginTop: 70 }}>
        </div>
        {routers}
    </React.Fragment>

</BrowserRouter>, document.getElementById('root'));