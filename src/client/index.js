import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import routers from '../routers';
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import { getClientStore } from '../store';
let store = getClientStore();
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <React.Fragment>
                <Header />
                <div className="container" style={{ marginTop: 70 }}>
                </div>
                {routers}
            </React.Fragment>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));