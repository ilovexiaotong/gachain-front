[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![](https://tokei.rs/b1/github/GACHAIN/gachain-front)](https://github.com/GACHAIN/gachain-front)
![](https://reposs.herokuapp.com/?path=GACHAIN/gachain-front&style=flat)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/GACHAIN?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)


## 政务链前端
该项目是基于 [Create React App](https://github.com/facebookincubator/create-react-app)。你可以在那里获取到它的大部分信息。

----------

## 安装
该项目需要安装 [Node.js v6+](https://nodejs.org/) 才能运行。

我们使用 [yarn](https://yarnpkg.com/en/docs/install) 作为包管理工具, 所以你也需要安装yarn。具体的安装方法请到 [npm官网](https://www.npmjs.com/)
安装项目依赖并启动服务器。

```bash
$ yarn install
$ yarn start
```

``yarn start`` 将请求服务器的地址默认绑定到``http://127.0.0.1:7079/api/v2``。 你还可以使用``yarn start-desktop``在桌面环境中调试项目。

如果你需要将请求地址绑定为其它的值，可以设置``REACT_APP_API_URL``这个参数来改变请求服务器的地址。

### 示例

```bash
$ REACT_APP_API_URL='http://example.org:8080/api/v2' yarn start
```

在开发服务器的环境下会发出某些错误警告，并以可读格式报告错误。你可以不用管它，注意：它只适合开发/测试。
如果要在生产环境中使用它，你需要构建项目。

----------

## 构建项目
如果你还没有安装项目依赖，请安装:
```bash
$ yarn install
```

如果你的后端使用的API地址不是默认的``http://127.0.0.1:7079/api/v2``， 那么你需要通过``REACT_APP_API_URL``参数手动指定请求的地址
### 示例

```bash
$ REACT_APP_API_URL='http://example.org:8080/api/v2' yarn build
```

项目构建完毕之后，在你的项目根目录下你会找到 *build/* 的文件夹。你可以使用任意网络服务器来访问它。

----------

## 构建桌面应用程序
如果你还没有安装项目依赖，请先安装：
```bash
$ yarn install
```

构建项目
手动指定``REACT_APP_API_URL``参数将应用程序绑定到后端使用的API

### 示例

```bash
$ REACT_APP_API_URL='http://example.org:8080/api/v2' yarn build-desktop
```

项目构建完成后，你需要使用``release``命令来打包你的应用程序。你还需要指``-publish neve``，这样你的项目就不会被发布到[github](https://github.com/)上。

可以用m/w/l参数的组合来指定需要构建应用程序的平台，其中``m``代表macOS，``w``代表windows，``l``代表linux。

### 示例

```bash
$ yarn release --publish never -mwl
```
将发布macOS，windows和linux的桌面应用程序。

----------

### 有问题

如果你在使用Gachain时遇到任何问题，请随时与我们联系 support@gachain.org 。
