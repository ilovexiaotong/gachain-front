[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Build Status](https://travis-ci.org/GACHAIN/gachain-front.svg?branch=master)](https://travis-ci.org/GACHAIN/gachain-front)
[![](https://tokei.rs/b1/github/GACHAIN/gachain-front)](https://github.com/GACHAIN/gachain-front)
![](https://reposs.herokuapp.com/?path=GACHAIN/gachain-front&style=flat)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/GACHAIN?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


# Govis

- 为政务链提供用户界面。
- 提供开发应用程序的IDE。
- 存储用户帐户的私钥并执行授权。
- 从数据库请求应用程序的页面数据并向用户展示。
- 通过REST API将事务发送到后端。
- 为需要事务的用户操作自动创建事务。例如，当应用程序开发人员从IDE执行合约时，Govis会将此操作转换为事务。

## 快速开始

> 该项目基于react，所以你必须安装 Nodejs v6+ 并且使用`yarn`管理第三方依赖

**注意：yarn start 将请求服务器的地址默认绑定到http://127.0.0.1:7079/api/v2。 可以使用yarn start-desktop在桌面环境中调试项目。如果需要自定义更多的API请求服务器的地址，需在public目录下创建settings.json文件，示例配置在public目录下settings.json.dist。**

### 配置示例

### 获取代码
`$ git clone https://github.com/GACHAIN/gachain-front.git`

### 安装依赖
`$ yarn install`

### 在浏览器启动
`$ yarn start`

---

## 桌面客户端

> 如果你想构建桌面应用程序只需如下2步就可以轻松搞定（请确保所有依赖已经安装完毕，并且已经在浏览器正常运行）。

`$ yarn build-desktop`

`$ yarn release --publish never -mwl`

> -mwl 参数代表 mac os, windows, linux，该参数可指定编译不同的操作系统