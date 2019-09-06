// 客户端和服务端共享的部分
const path = require('path');
module.exports = {
    mode: 'development',
    // 负责检测所有，引入的核心模块，并且告诉webpack不要把核心模块打包
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        "@babel/preset-env",
                        "@babel/preset-react"
                    ],
                    plugins: [
                        "@babel/plugin-proposal-class-properties" // 支持新状态属性写法 state ={}
                    ]
                }
            },
        ]
    }
}