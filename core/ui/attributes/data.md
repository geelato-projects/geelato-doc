# data

数据源，可为本地静态的数据或远程服务端动态生成的数据，一般配置在组件的第一子级。

```javascript
{
  // data的值为Array类型，表示有零到多个数据对象
  data:[
    {
      // 数据源的名称，用于外部引用
      name:'user_list',
      // 数据源的类型，包括static、gql，其中static是默认类型可以不写
      type:'static',
      // 描述该数据源，便于维护管理
      description:'用户列表信息',
      // 数据源的值，由于是static类型，数据内容直接配置填写，可为Array格式或Object格式，此为Array格式
      value:[
        {id:1,name:'张三',description:'管理员'},
        {id:1,name:'李四',description:'普通用户'}
      ]
    },
    {
      name:'user_info',
      type:'static',
      description:'用户列表信息',
      // 数据源的值，此为Object格式
      value:{
        id:1,
        name:'张三',
        description:'管理员'
      }
    },
    {
      name:'user_admin_list',
      // 数据源的类型，gql表示动态数据，需将value发到服务端执行查询，返回查询结果
      type:'gql',
      description:'用户列表信息',
      value:{
        // 以下为gql对象
        sys_user:{
          '@p':'0,1',
          '@fs':'id,name,loginName',
          'name|sw':'管',
          '@order':'name|+'
        }
      }
    }
  ]
}
```
