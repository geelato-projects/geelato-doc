# 介绍
Geelato基于Vue2、Ant Design、SpringBoot的全栈式开发框架，帮助你更愉快地、有创意地开发。

## 特性
+ 内置后台管理主题，采用响应式布局
+ 插件式的管理机制，模块化管理
+ 页面设计器+元数据+GQL组合


## 规划
Geelato 仍然处于开发中，这里有一些目前还不支持、但已经在计划中的特性：

- 组织用户
  - 用户管理
  - 组织管理
  - 岗位管理
- 权限管理
  - 角色设置
  - 菜单设置
  - 权限管理
- 平台设置
  - 参数设置
  - 数据字典
  - 个人设置
  - 外观设置
- 开发集成
  - 表单设计器
  - 报表设计器
  - 接口设计器
  - 元数据管理

## 工程
### geelato-doc
项目文档，基于vuepress，编译后发布到geelato-projects.github.io。
### geelato-projects.github.io
编译后的网站静态文件。
### 前端工程（geelato-ui）
 - geelato-ui-api
   客户端api，封装了登录、退出、元数据访问、组件页面查询、通用CRUD操作等api，与服务端geelato-web-platform对应。
 - geelato-aui
   基于Vue Ant Design的前端UI组件，包括页面表单、列表、树列表等，可快速实现增删改查。
 - geelato-aui-admin
   基于geelato-au的后台管理脚手架，见演示栏目。

### 后端工程
 - geelato-parent
   各工程公共依赖库。
 - geelato-utils
   各工程的基础工具包。
 - geelato-core
   核心包，实现gql解析与执行、orm封装等。
 - geelato-web-platform
   基于springboot的后端管理平台与geelato-aui-admin匹配，实现了系统管理、日志管理等基础平台功能。

我们欢迎你为 Geelato 的开发作出贡献。
