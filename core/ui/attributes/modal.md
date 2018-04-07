# modal

模态窗口

```javascript
{
  // 模态窗口的标题
  title:'用户详细信息',
  // 模态窗口大小的样式
  style:{width:'800px',height:'600px'},
  // type：page|html|href
  // page即引用配置页面，此时属性value的值为pageCode，如sys_role_list_detail
  // html即直接在配置中写html的内容，此时属性value的值为html代码,如'<p>html代码</p>'
  // href即用iframe引入外部页面，此时属性value的值为url地址，如'http://www.geelato.org'
  type:'page'
  value:'sys_role_list_detail'
  // 参数
  param:{
      id:'201709082291'
  }
  // 模态窗口下方的操作按钮
  actions:[
    // 内置cancel，关闭窗口
    {title:'取消',click:'cancel'},
    // 内置close，关闭窗口
    {title:'关闭',click:'close'},
    // 内置save，相当于invoke:save,调用子组件的save方法
    {title:'保存',click:'save'},
    {title:'选择',click:'invoke:getState'},
    {title:'调用JS',click:'javascript:alert("hello");'}
  ],
  data:[
 	 // @see data
  ]
}
```


参考：

[data](data.md)