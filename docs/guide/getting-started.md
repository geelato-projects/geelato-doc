# 快速上手
完整的项目由前后端组成，由于前后端分离，需分别创建项目，便于开发调试。

## 客户端
### 环境准备
::: warning 注意
请确保你的 Node.js 版本 >= 8.9， (推荐 8.11.0+)。
:::
项目基于vue-cli3进行创建，并通过加载geelato插件的方式来启用。

 - [安装vue-cli3](https://cli.vuejs.org/zh/guide/installation.html)
 - [创建一个项目](https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create)
 - 加载geelato插件
    @vue/cli-plugin-geelato-ant-admin

    ``` bash
    vue add @vue/cli-plugin-geelato-ant-admin
    ```

## 服务端

### 环境准备

::: warning 注意
请确保已安装jdk1.8，mysql5.7+，Redis

:::

#### 创建数据库

创建数据库geelato

#### 下载并构建项目

下载项目[geelato-web-quickstart](https://github.com/geelato-projects/geelato-web-quickstart)，假设下载到D:\myws\geelato-web-quickstart-master，进入项目目录，执行bin目录下的build.bat。

```powershell
Microsoft Windows [Version 10.0.14393]
(c) 2016 Microsoft Corporation。保留所有权利。

C:\Users\Administrator>cd D:\myws\geelato-web-quickstart-master

C:\Users\Administrator>d:

D:\myws\geelato-web-quickstart-master>cd bin

D:\myws\geelato-web-quickstart-master\bin>build
```

#### 运行项目

构建成功，执行run.bat。(第一次运行，需执行run_with_db_reset.bat，自动建表、初始化数据)

```powershell
D:\myws\geelato-web-quickstart-master\bin>run.bat
D:\myws\geelato-web-quickstart-master\bin>java -Dfile.encoding=UTF-8 -jar ../target/geelato-web-quickstart-1.0.2-SNAPSHOT.jar
 _____           _       _          ______             _
|  __ \         | |     | |         | ___ \           | |
| |  \/ ___  ___| | __ _| |_  ___   | |_/ / ___   ___ | |_
| | __ / _ \/ _ \ |/ _` | __|/ _ \  | ___ \/ _ \ / _ \| __|
| |_\ \  __/  __/ | (_| | |_| (_) | | |_/ / (_) | (_) | |_
 \____/\___|\___|_|\__,_|\__|\___/  \____/ \___/ \___/ \__|
 :: Geelato Boot by geelato.org ::        (v1.0.2.SNAPSHOT)
...
[INFO ]26.771 o.g.w.q.QuickStartApplication 17- QuickStartApplication>run
[INFO ]26.773 o.g.w.platform.boot.BootApplication 64- [启动参数]：
[INFO ]26.774 o.g.w.platform.boot.BootApplication 65- [配置文件]：null
[INFO ]26.774 o.g.w.platform.boot.BootApplication 66- [启动应用]...ing
[INFO ]26.775 o.g.w.platform.boot.BootApplication 51- [操作系统]Windows 10
...
[INFO ]27.459 o.g.w.platform.boot.BootApplication 163- 未收到重置数据库命令，跳过创建表结构、跳过初始化表数据。
[INFO ]27.774 o.g.w.platform.boot.BootApplication 69- [启动应用]...OK
```

访问实体列表http://localhost:8080/api/meta/entityNames/，页面出现类似内容：

```json
{"msg":"","code":"0","data":["platform_file","platform_user","prj_comment","platform_dev_project","platform_rest_log","platform_dict","platform_user_config","platform_tree_node","platform_parameter","platform_role_r_permission","platform_area","platform_org","platform_role","platform_cache_item_meta","prj_attachment","platform_app","prj_iteration","prj_task","platform_province","prj_company","platform_dev_column","platform_role_r_user","platform_dev_table","platform_org_r_user","prj_team_member","platform_common_config","platform_menu_item","prj_task_type","platform_module","platform_permission","prj_project_info","platform_page_config","platform_resources","platform_city","platform_demo_entity"],"meta":null,"success":true}
```

