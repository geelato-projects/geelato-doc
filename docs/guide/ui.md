# 前端
## 依赖
### SemanticUI
目前已经有基于Vue2的成熟的UI框架，如ElementUI，为什么还要选择SemanticUI呢？用三个词来解释，语义化、灵活、丰富。例如，表示一个按钮可用ui button,表示一个蓝色按钮可用ui blue button，表示一个较小的蓝色按钮，可用ui mini blue button表示，很好理解，官方给出了很多的示例；灵活性方面，可以基于SemanticUI的基础元素集合成各种页面、页面模块；同时官方已内置了各种优秀组件，用户体验好。

#### 自定义theme、编译

从官网下载源码包，解决压到目录 x，进入目录x；

在命令窗口执行cnpm install；

::: warning 注意
cnpm 是淘宝NPM镜像
:::

依据提示选择确认，关键点是，下面的选择，选“No Thank”，以便后续可以不用重新下载源即可进行编译；

```bash
? Should we remove set-up files? No Thanks

? Do you want to build Semantic now? Yes
```



完成以上初始编译之后，会在x/dist目录下输出最终js、css等。

::: warning 注意

在执行了一次cnpm install之后才会生成目录x/src/site，原始目录是x/src/_site

:::

若需修改全局样式，可进入x/src/site/globals/site.variables，加入代码，示例如下：

```css
/*-------------------
    Border Radius
--------------------*/

/* See Power-user section below
   for explanation of @px variables
*/
@relativeBorderRadius: 0px;
@absoluteBorderRadius: 0px;

@defaultBorderRadius: @absoluteBorderRadius;

/*-------------------
    Fonts
--------------------*/
@importGoogleFonts : false;
```

::: warning 注意

使用 Semantic-UI 官方的指引进行编译，不压缩 CSS 文件的问题，解决方法是：

打开tasks\build\css.js，注释掉一行代码

 // compressedStream   = stream.pipe(clone());

见：https://github.com/Semantic-Org/Semantic-UI/issues/6067

:::

再重新进入x目录，并在命令窗口执行glup build，完成之后进入x/dist目录将文件copy到项目中使用即可，示例如下：

```bash
x>gulp build
[14:18:08] Using gulpfile D:\X\Semantic-UI-2.4.1\gulpfile.js
[14:18:08] Starting 'build'...
Building Semantic
[14:18:08] Starting 'build-javascript'...
Building Javascript
[14:18:08] Starting 'build-css'...
Building CSS
[14:18:08] Starting 'build-assets'...
Building assets
[14:18:09] Created: dist\components\site.js
[14:18:09] Created: dist\components\site.min.js
[14:18:09] Created: dist\components\form.js
[14:18:10] Created: dist\components\form.min.js
[14:18:10] Created: dist\components\accordion.js
[14:18:10] Created: dist\components\accordion.min.js
[14:18:10] Created: dist\components\checkbox.js
[14:18:11] Created: dist\components\reset.css
[14:18:11] Created: dist\components\reset.min.css
[14:18:11] Created: dist\components\checkbox.min.js
[14:18:11] Created: dist\components\dimmer.js
[14:18:11] Created: dist\components\site.css
[14:18:11] Created: dist\components\site.min.css
[14:18:11] Created: dist\components\dimmer.min.js
[14:18:12] Created: dist\components\dropdown.js
[14:18:13] Created: dist\components\dropdown.min.js
[14:18:13] Created: dist\components\button.css
[14:18:13] Created: dist\components\embed.js
[14:18:14] Created: dist\components\button.min.css
[14:18:14] Created: dist\components\embed.min.js
[14:18:14] Created: dist\components\modal.js
[14:18:14] Created: dist\components\container.css
[14:18:14] Created: dist\components\container.min.css
[14:18:14] Created: dist\components\modal.min.js
[14:18:14] Created: dist\components\nag.js
[14:18:14] Created: dist\components\nag.min.js
[14:18:14] Created: dist\components\popup.js
[14:18:15] Created: dist\components\divider.css
[14:18:15] Created: dist\components\divider.min.css
[14:18:15] Created: dist\components\popup.min.js
[14:18:15] Created: dist\components\progress.js
[14:18:16] Created: dist\components\progress.min.js
[14:18:16] Created: dist\components\rating.js
[14:18:16] Created: dist\components\flag.css
[14:18:16] Created: dist\components\flag.min.css
[14:18:16] Created: dist\components\rating.min.js
[14:18:16] Created: dist\components\search.js
[14:18:16] Created: dist\components\header.css
[14:18:16] Created: dist\components\header.min.css
[14:18:16] Created: dist\components\search.min.js
[14:18:16] Created: dist\components\shape.js
[14:18:17] Created: dist\components\shape.min.js
[14:18:17] Created: dist\components\sidebar.js
[14:18:18] Created: dist\components\icon.css
[14:18:18] Created: dist\components\icon.min.css
[14:18:18] Created: dist\components\sticky.js
[14:18:18] Created: dist\components\sidebar.min.js
[14:18:18] Created: dist\components\tab.js
[14:18:18] Created: dist\components\sticky.min.js
[14:18:18] Created: dist\components\image.css
[14:18:18] Created: dist\components\image.min.css
[14:18:18] Created: dist\components\transition.js
[14:18:19] Created: dist\components\tab.min.js
[14:18:19] Created: dist\components\input.css
[14:18:19] Created: dist\components\input.min.css
[14:18:19] Created: dist\components\api.js
[14:18:19] Created: dist\components\transition.min.js
[14:18:19] Created: dist\components\visibility.js
[14:18:19] Created: dist\components\api.min.js
[14:18:19] Created: dist\components\label.css
[14:18:19] Created: dist\components\label.min.css
[14:18:20] Created: dist\components\visibility.min.js
[14:18:20] Starting 'package compressed js'...
[14:18:20] Starting 'package uncompressed js'...
[14:18:20] Finished 'build-javascript' after 12 s
[14:18:20] Created: dist\components\list.css
[14:18:20] Created: dist\components\list.min.css
[14:18:20] Created: dist\components\loader.css
[14:18:20] Created: dist\components\loader.min.css
[14:18:20] Created: dist\components\placeholder.css
[14:18:20] Created: dist\components\placeholder.min.css
[14:18:20] Created: dist\components\rail.css
[14:18:20] Created: dist\components\rail.min.css
[14:18:20] Created: dist\components\reveal.css
[14:18:20] Created: dist\components\reveal.min.css
[14:18:21] Finished 'build-assets' after 13 s
[14:18:21] Created: dist\components\segment.css
[14:18:21] Created: dist\components\segment.min.css
[14:18:26] Created: dist\semantic.min.js
[14:18:26] Finished 'package compressed js' after 6.76 s
[14:18:26] Created: dist\semantic.js
[14:18:26] Finished 'package uncompressed js' after 6.74 s
[14:18:26] Created: dist\components\step.min.css
[14:18:26] Created: dist\components\step.css
[14:18:26] Created: dist\components\breadcrumb.min.css
[14:18:26] Created: dist\components\breadcrumb.css
[14:18:27] Created: dist\components\form.css
[14:18:27] Created: dist\components\form.min.css
[14:18:27] Created: dist\components\grid.css
[14:18:27] Created: dist\components\grid.min.css
[14:18:27] Created: dist\components\menu.css
[14:18:27] Created: dist\components\menu.min.css
[14:18:27] Created: dist\components\message.css
[14:18:27] Created: dist\components\message.min.css
[14:18:27] Created: dist\components\table.css
[14:18:28] Created: dist\components\table.min.css
[14:18:28] Created: dist\components\ad.css
[14:18:28] Created: dist\components\ad.min.css
[14:18:28] Created: dist\components\card.css
[14:18:28] Created: dist\components\card.min.css
[14:18:28] Created: dist\components\comment.css
[14:18:28] Created: dist\components\comment.min.css
[14:18:28] Created: dist\components\feed.css
[14:18:28] Created: dist\components\feed.min.css
[14:18:28] Created: dist\components\item.css
[14:18:28] Created: dist\components\item.min.css
[14:18:28] Created: dist\components\statistic.css
[14:18:28] Created: dist\components\statistic.min.css
[14:18:28] Created: dist\components\accordion.css
[14:18:28] Created: dist\components\accordion.min.css
[14:18:28] Created: dist\components\checkbox.css
[14:18:28] Created: dist\components\checkbox.min.css
[14:18:29] Created: dist\components\dimmer.css
[14:18:29] Created: dist\components\dimmer.min.css
[14:18:29] Created: dist\components\dropdown.css
[14:18:29] Created: dist\components\dropdown.min.css
[14:18:29] Created: dist\components\embed.css
[14:18:29] Created: dist\components\embed.min.css
[14:18:29] Created: dist\components\modal.css
[14:18:29] Created: dist\components\modal.min.css
[14:18:29] Created: dist\components\nag.css
[14:18:29] Created: dist\components\nag.min.css
[14:18:29] Created: dist\components\popup.css
[14:18:29] Created: dist\components\popup.min.css
[14:18:29] Created: dist\components\progress.min.css
[14:18:29] Created: dist\components\progress.css
[14:18:29] Created: dist\components\rating.min.css
[14:18:29] Created: dist\components\rating.css
[14:18:29] Created: dist\components\search.min.css
[14:18:29] Created: dist\components\search.css
[14:18:30] Created: dist\components\shape.min.css
[14:18:30] Created: dist\components\shape.css
[14:18:30] Created: dist\components\sidebar.min.css
[14:18:30] Created: dist\components\sidebar.css
[14:18:30] Created: dist\components\sticky.min.css
[14:18:30] Created: dist\components\sticky.css
[14:18:30] Created: dist\components\tab.min.css
[14:18:30] Created: dist\components\tab.css
[14:18:30] Created: dist\components\transition.min.css
[14:18:30] Starting 'package compressed css'...
[14:18:30] Created: dist\components\transition.css
[14:18:30] Starting 'package uncompressed css'...
[14:18:41] Created: dist\semantic.min.css
[14:18:41] Finished 'package compressed css' after 11 s
[14:18:41] Created: dist\semantic.css
[14:18:41] Finished 'package uncompressed css' after 11 s
[14:18:41] Finished 'build-css' after 33 s
[14:18:41] Finished 'build' after 33 s
```



## 插件
两种方式，一种是基于webpack dependencies的方式加载到node_modules中，另一种方式是基于vue-cli3的插件机制，将插件以源代码的方式加载到工程的src目录。

## 组件
### 表单
基于json格式渲染的表单，格式如下：
``` javascript
{
    type: 'object',
    // 表单可绑定多实体，这是默认第一实体
    defaultEntity: 'platformUser',
    properties: {
        name: {
            control: 'input',
            title: '名称',
            // 是否禁用
            disabled: true,
            // 是否只读
            readonly: false,
            // 是否隐藏
            hidden: false,
        },
        loginName: {
            control: 'input',
            title: '登录名',
            rules: [
                {
                    type: 'empty',
                    prompt: '请输入登录名'
                }
            ]
        },
        password: {
            control: 'password',
            title: '密码',
            tips: '至少6位',
            rules: [
                {
                    type: 'empty',
                    prompt: '请输入密码'
                },
                {
                    type: 'minLength[6]',
                    prompt: '密码长度至少6位'
                }
            ]
        },
        confirmPassword: {
            control: 'password',
            title: '确认密码',
            rules: [
                {
                    type: 'match[password]',
                    prompt: '两次输入的密码不一致'
                }
            ]
        },
        email: {
            control: 'email',
            title: '邮箱',
            placeholder: 'xxx@xxx.xxx',
        },
        age: {
            control: 'input',
            title: '年龄',
            // 值
            value: '20',
        },
        sex: {
            control: 'dropdown',
            title: '性别',
            // 若数据是动态生产成，可配置ds，基于ds加载的数据最终会设置到data中
            data: [
                {text: '保密', value: ''},
                {text: '男', value: 'male'},
                {text: '女', value: 'female'}
            ],
            value: ''
        },
        tel: {
            control: 'input',
            title: '电话',
            field: 'telephone',
            // 若字段需绑定其它实体，该通过该属性设置
            entity: 'platformUser',
            placeholder: '电话号码',
            rules: [
                {
                    type: 'empty',
                    prompt: '请输入电话号码'
                }
            ]
        },
        province: {
            control: 'dropdown',
            title: '省份',
            ds: 'province',
            // 广东省
            value: '440000'
        },
        city: {
            control: 'dropdown',
            title: '城市',
            // 基于数据源，数源名称可自取，如cityDS，不一定需等于本属性名
            ds: 'city'
        },
        enable: {
            control: 'checkbox',
            title: '启用',
            value: true
        },
        description: {
            control: 'textarea',
            title: '描述',
        }
    },
    layout: {
        type: 'table',
        data: [
            // [label col-num,field col-num]
            [{name: [4, 8]}, {loginName: [4, 8]}],
            [{email: [4, 8]}, {age: [4, 8]}],
            [{sex: [4, 8]}, {tel: [4, 8]}],
            [{province: [4, 8]}, {city: [4, 8]}],
            [{password: [4, 8]}, {confirmPassword: [4, 8]}],
            [{enable: [4, 8]}, {'': [4, 8]}],
            [{description: [4, 20]}]
        ]
    },
    ds: {
        province: {
            entity: 'platform_province',
            // default false
            lazy: false,
            // 支持字段重命名
            fields: 'name text,code value',
            description:'这是一个拉列表数据源'
        },
        city: {
            entity: 'platform_city',
            lazy: true,
            fields: 'name text,code value',
            // 带参数查询的数据源
            params: {
                // 该信息会自动加入计算属性中，当province的值变动时，该数据源会重新加载计算
                provinceCode: 'gs:$ctx.form.province'
            },
            description:'这是一个拉列表数据源，带参数'
        }
    },
    vars: {
        myVarA: {
            description:'这是一个变量，常量名字为myVarA，值为30',
            value:'30'
        }
    }
}
```

#### gs表达式
  gs表达式，可引用解析上下变量信息，从而达到动态灵活控制表单的目的，变量如下：
- $ctx          当前表单执行的上下文
- $ctx.form     当前表单的属性信息，对于配置中的properties
- $ctx.profile  当前登录用户信息、组织信息、角色信息（未支持）
- $ctx.vars     当前表单的变量信息，对于配置中的vars
  如：$ctx.form.province即表示获取from中名为province的字段值

#### 表单验证
参见 [Semantic UI Form Validation](https://semantic-ui.com/behaviors/form.html)
