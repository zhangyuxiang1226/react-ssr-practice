import React, { Component } from 'react'; // 要引入react
import { StaticRouter } from 'react-router-dom'; // StaticRouter用在服务器端
import routers from '../routers';
import Header from '../components/Header'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux';
import { getServerStore } from '../store'
export default function (req, res) {
    let context = { name: 'zyx' }; // 组件上下文，可以在组件中 this.props.staticContext 这样获取
    let store = getServerStore(); // 创建仓库的时候，仓库里的数据已经有了默认值
    let html = renderToString(
        <Provider store={store}>
            <StaticRouter context={context} location={req.path}>
                <React.Fragment>
                    <Header />
                    <div className="container" style={{ marginTop: 70 }}>
                    </div>
                    {routers}
                </React.Fragment>
            </StaticRouter>
        </Provider>
    );

    res.send(
        `<html>
                <head>
                    <title>REACT SSR TRAIN</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                </head>
                <body>
                    <div id="root">
                    ${html}
                    </div>
                    <script src="/client.js"></script>
                </body>
            </html>
        `
    )
}