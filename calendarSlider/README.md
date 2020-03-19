## Usage
1.在组件使用页的.json文件中添加引入,例如:

```javascript
{
  "usingComponents": {"calendar":"组件路径"}
}
```

2.在使用页的.wxml文件中写入对应标签,绑定属性或事件:

```html
<calendar  bindOnDayClick="onDayClick" dateTotal="{{total}}"></calendar>
```
3.在使用页的.js文件中写入相关变量或事件:

```javascript
  data:{
    total:7,
  },
  onDayClick(e){
    console.log(e.detail);
  },
```
## API
|name|type|desc|
|--|--|--|
|sliderHeight|Number|滑块高度|
|dateTotal|Number|日历展示的时间段,今天~n天后|
|OnDayClick|function|点击某滑块触发的钩子|