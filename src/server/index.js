// 服务器端入口文件
import render from './render';
let express = require('express');
let app = express();
app.use(express.static('public')); // 把public当做静态文件中间件目录
app.get('*', function (req, res) { // get * 表示匹配所有路由
    render(req, res);
})
app.listen(3003, function () {
    console.log('server started at port 3003')
}); 