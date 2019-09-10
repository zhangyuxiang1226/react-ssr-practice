// 服务器端入口文件
import React, { Component } from 'react'; // 要引入react
import { StaticRouter } from 'react-router-dom'; // StaticRouter用在服务器端
import routers from '../routers';
import Header from '../components/Header'
import { renderToString } from 'react-dom/server'
let express = require('express');
let app = express();
app.use(express.static('public')); // 把public当做静态文件中间件目录
app.get('*', function (req, res) { // get * 表示匹配所有路由
    let context = { name: 'zyx' }; // 组件上下文，可以在组件中 this.props.staticContext 这样获取
    let html = renderToString(
        <StaticRouter context={context} location={req.path}>
            <React.Fragment>
                <Header />
                <div className="container" style={{ marginTop: 70 }}>
                </div>
                {routers}
            </React.Fragment>
        </StaticRouter>
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
})
app.listen(3003, function () {
    console.log('server started at port 3003')
}); 