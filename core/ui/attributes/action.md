# action

操作，用于渲染展示为按钮、链接等，action

示例

```javascript
{
  actions:[
    {
      // 打开modal,@see modal
      title:'详情',click:'open:modal',modal:{
          // @see modal
      },
    },
    {
      // 打开新的浏览器页面
      title:'打开新页面',click:'open:win',win:{
        title:'用户详细信息',
        style:{width:'80px',height:'90px'}
      }
    },
    {
      // 可以配置javascript:;，自行调用
      // 如点击后修改当前页面的字段值javascript:$('#some-field-id'.value('3'));
      // 如点击后执行当前页面的脚本方法javascript:someMethod(this);
      title:'调用JS',click:'javascript:;'
    },
    // 内置cancel，关闭窗口
    {title:'取消',click:'cancel'},
    // 内置close，关闭窗口
    {title:'关闭',click:'close'},
    // 内置save，相当于invoke:save,调用子组件的save方法
    {title:'保存',click:'save'},
    // getState：调用子组件的getState方法，获取子组件的状态信息并返回
    {title:'选择',click:'invoke:getState'},
    // 可以配置javascript:;，自行调用
    {title:'调用JS',click:'javascript:alert("hello");'}
  ]
}
```



参考：

[modal](modal.md)