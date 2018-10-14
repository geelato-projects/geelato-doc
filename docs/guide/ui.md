# 前端
## 依赖
### SemanticUI
目前已经有基于Vue2的成熟的UI框架，如ElementUI，为什么还要选择SemanticUI呢？用三个词来解释，语义化、灵活、丰富。例如，表示一个按钮可用ui button,表示一个蓝色按钮可用ui blue button，表示一个较小的蓝色按钮，可用ui mini blue button表示，很好理解，官方给出了很多的示例；灵活性方面，可以基于SemanticUI的基础元素集合成各种页面、页面模块；同时官方已内置了各种优秀组件，用户体验好。

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
