# 快速上手
::: warning 注意
请确保你的 Node.js 版本 >= 8。
:::

## 运行客户端

下载[客户端工程（geelato-vue-sui-admin）](https://github.com/geelato-projects/geelato-ui/tree/master/geelato-vue-sui-admin)，打开**main.js**文件，修改服务端地址。目前已搭建了服务端（https://api.geelato.org:8080）可用于测试，你也可以自己下载服务端程序在本地部署，见运行服务端章节。

``` javascript
if (isRunInServer) {
    // geelato.setServerUrlRoot('服务端地址')
    geelato.setServerUrlRoot('https://api.geelato.org:8080')
} else {
    geelato.setServerUrlRoot('http://localhost:8080')
}
```

修性完成后，依据[指引信息](https://github.com/geelato-projects/geelato-ui/tree/master/geelato-vue-sui-admin)，运行客户端程序。

默认的登录账号密码为：super_admin/123456

## 运行服务端

TODO



一个平台有多个系统
一个系统有N个角色
一个角色有0~N个模块的权限
一个模块有一组菜单

TODO
