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
    defaultEntity: 'platformUser', // 表单可绑定多实体，这是默认第一实体
    properties: {
        name: {
            control: 'input',
            title: '名称',
            placehoder: '名称',
            disabled: false, // 是否禁用
            readonly: false, // 是否只读
            hidden: false, // 是否隐藏
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
        },
        age: {
            control: 'input',
            title: '年龄',
        },
        sex: {
            control: 'dropdown',
            title: '性别',
            //---专有属性
            options: [
                {text: '男', value: 'male'},
                {text: '女', value: 'female'}
            ],
        },
        tel: {
            control: 'input',
            title: '电话',
            field: 'telephone',
            entity: 'platformUser', // 若字段需绑定其它实体，该通过该属性设置
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
            options: [
                {text: '男', value: 'male'},
                {text: '女', value: 'female'}
            ],
        },
        city: {
            control: 'dropdown',
            title: '城市',
            options: [
                {text: '男', value: 'male'},
                {text: '女', value: 'female'}
            ],
            ds: 'city'
        },
        enable: {
            control: 'checkbox',
            title: '启用'
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
            [{password: [4, 8]}, {confirmPassword: [4, 8]}],
            [{enable: [4, 8]}, {$null: [4, 8]}],
            [{description: [4, 20]}]
        ]
    },
    ds: {
        province: {
            entity: 'basedata_province',
            lazy: true, // default false
            alias: {
                text: 'name',
                value: 'id'
            },
            description:'这是一个拉列表数据源'
        },
        city: {
            entity: 'basedata_city',
            lazy: true, // default false
            alias: {
                text: 'name',
                value: 'id'
            },
            where: {
                provinceId: 'gs:$form.province'
            },
            description:'这是一个拉列表数据源，带参数'
        }
    },
    const:{
        tilte:'这是一个常量，常量名字为title'
    }
}
```

#### gs表达式
  gs表达式，可引用解析上下变量信息，从而达到动态灵活控制表单的目的，变量如下：
- $form  上下文，包括当前表单的属性信息
- $user  当前登录用户信息
- $const 表单的常量信息
- $null  用于layout渲染为空标题


#### 表单验证
参见 [Semantic UI Form Validation](https://semantic-ui.com/behaviors/form.html)
