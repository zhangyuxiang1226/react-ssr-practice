# react-ssr-practice
实现react ssr(服务器端渲染)

## 初始化项目
npm init -y

## 安装依赖
cnpm i express -S
cnpm i react react-dom -S

cnpm i webpack webpack-cli babel-loader @babel/core @babel/preset-env @babel/preset-react -D


## 启动服务
cmd： node ./src/server/index.js

可以安装nodemon ~  cnpm i -g nodemon；之后通过nodemon启动服务

## 写react组件

## renderToString
使用renderToString方法把例如Home组件转成字符串，插入到html中 

## 配置webpack实现资源打包
### 安装nodeExternal
cnpm i webpack-node-externals -D
安装这个模块是为了：在node环境运行下，我们不对类似fs这些核心模块进行打包

### 配置loader转译react

## 配置自动打包和更新
package.json
    "start": "nodemon build/server.js",
    "build": "webpack --config webpack.config.js --watch"

安装 npm-run-all -g
→ 改为并行执行
 "dev": "npm-run-all --parallel dev:**",
    "dev:start": "nodemon build/server.js",
    "dev:build": "webpack --config webpack.config.js --watch"

→ npm run dev

## 建立client目录，用于客户端的js
创建分别针对客户端和服务端的webpack配置文件
使client/index.js能打包到 public/client.js
然后通过server/index.js能够使用

## 路由
引入react-router-dom
创建routers.js
client/index.js中配置BrowserRouter，引入 routers.js

在server/index.js中添加引入StaticRouter，并配置属性，令其路由规则匹配

## 引入redux
本地数据 同步
服务器端数据  异步 

## 实现异步数据渲染，创建API服务器
初步，使用浏览器直接访问api接口服务器
1. api/server.js
2. 客户端获取数据
3. 安装axios
4. 配置CORS跨域
5. 写reducers/home.js，使用redux thunk处理异步

进阶：浏览器访问node服务器，node服务器再去访问api服务器

### 其他步骤
http://www.zhufengpeixun.cn/architecture/html/56.react-ssr.html

