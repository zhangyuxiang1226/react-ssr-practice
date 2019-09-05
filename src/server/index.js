// 服务器端入口文件
let express = require('express');
let app = express();
app.get('/', function (req, res) {
    res.send(
        `
            <html>
                <head>
                    <title>REACT SSR TRAIN</title>
                </head>
                <body>
                    <div id="root">hello</div>
                </body>
            </html>
        `
    )
})
app.listen(3003, function () {
    console.log('server started at port 3003')
});