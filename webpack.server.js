// 服务器端webpack配置
const path = require('path');
const nodeExternal = require('webpack-node-externals');
const merge = require('webpack-merge')
const base = require('./webpack.base');
module.exports = merge(base, {
    target: 'node', // 告诉webpack打包的是node环境的文件
    entry: './src/server/index.js',
    output: {
        path: path.resolve('build'),
        filename: 'server.js',

    },
    // 负责检测所有，引入的核心模块，并且告诉webpack不要把核心模块打包
    externals: [nodeExternal()],
});