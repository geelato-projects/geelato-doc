# table

列表查询组件，提供以下特性

- 动态组合查询，基于gql的动态实体查询
- 列表可配置，展示列表项
- 工具条操作可配置，操作事件配置
- 选择列可配置，单选、多选、无选择列
- 操作列可配置，操作事件配置
- 对外接口
  - 获取选择中列数据

示例

```javascript
{
  code: 'sys_role_list',
  ui: {
  	component: 'table',
    // 模式有：query、select,默认为query
    mode:'',
    title: '角色信息',
  	entity: 'sys_role',
  	query: {
      // 是否隐藏整个查询区域
      hide: true,
      // null或''表示不展示tree过滤区域
      tree: null,
      // null或''表示不展示常用过滤器区域
      filter: null,
      // null或''表示不展示综合查询区域
      mix: {
        // 可用于查询的字段
        fields: [
          // cop：比较操作符，eq：等于；default：默认值
          {field: 'name', title: '名称', cop: 'eq', type: 'string',defalut:'张',placeholder:''},
          // cop：比较操作符，contains：包含；lop：逻辑操作符，or：或者
          {field: 'code', title: '编码', cop: 'contains', type: 'string', lop: 'or'},
          // and：并且
          {field: 'description', title: '描述', cop: 'contains', type: 'string', lop: 'and'}
        ]
       }
     },
     // --end query --
     toolbar:{
        title:'',
        dropdown:{
            title:'',
            actions:[
              {title:'创建',click:'open:modal',modal:{}},
              {title:'删除',click:'delete',comfirm:'确定删除？'},
              // 弹出页面提示导出多少条记录
              {title:'导出EXCEL',click:'export:xls'},
              // 弹出页面提示导出多少条记录
              {title:'导出PDF',click:'export:pdf'},
              // 默认打印当前列表，若print需要特殊的内容，可以用自定义javascrpt:;来实现
              {title:'打印',click:'print'}
            ]
        }
     },
     tips: {
       // 展示位置：header|footer|none，当为none或空时，则不展示。
       display:'header',
       // 提示内容，html格式
       html:'<div>这是提示内容<div>'
     },
     // 选择的行数据
     selected: [],
     table: {
       // type：checkbox、radio、button，默认值为checkbox；title默认为空，可选。
       // 值button，在mode为select时才有效，即选择当记录，直接返回
       select: {field: 'id', title: '选择', type: 'checkbox'},
       dropdown: {
         title: '操作',
         actions: [
           {title: '修改', click: 'open', disable: ':id > 0'},
           {
             title: '详细',
             click: 'open:modal',
             modal: {
               type: 'page',
               value: 'sys_role_list_detail',
               query: {}
             }
           },
           {title: '直接调用js', click: 'javascript:alert(\'aaaa\')'}]
            },
            columns: [
              {field: 'id', title: '序号', visible: false},
              {field: 'name', title: '名称', type: 'string', format: ''},
              {field: 'code', title: '编码', type: 'string', format: ''},
              {field: 'description', title: '描述', type: 'string', format: ''}
            ],
            p: '1,10',
            order: 'name|+'
          },
          stat: '',
          // 状态
          state: {
            selectedRows: {},
            clickedRow: {}
          }
        }
      }
```



应用场景1：列表查询，导出数据

应用场景2：选择多列数据返回、或点击一列数据直接返回。