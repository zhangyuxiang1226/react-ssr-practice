import React, { Component } from 'react'; // 要引入react
// 服务器端入口文件
let express = require('express');
let app = express();

import Home from '../containers/Home'
import { renderToString } from 'react-dom/server'

app.get('/', function (req, res) {
    let html = renderToString(<Home />);
    res.send(
        `<html>
                <head>
                    <title>REACT SSR TRAIN</title>
                </head>
                <body>
                    <div id="root">
                    ${html}
                    </div>
                </body>
            </html>
        `
    )
})
app.listen(3003, function () {
    console.log('server started at port 3003')
});