## Usage
1.在组件使用页的.json文件中添加引入,例如:

```javascript
{
  "usingComponents": {"rate":"组件路径"}
}
```

2.在使用页的.wxml文件中写入对应标签,绑定属性或事件:

```html
<rate  rateScore="{{level}}" bindOnRateChange="levelRateChange" isEditable="{{isEditable}}" ></rate>
```
3.在使用页的.js文件中写入相关变量或事件:

```javascript
  data:{
    isEditable:true,
    level:3,
  },
  levelRateChange(e){
    console.log(e.detail);
  },
```
## API
|name|type|desc|
|--|--|--|
|rateNum|Number|评分个数|
|rateScore|Number|初始评分|
|isEditable|Boolean|是否可点击|
|OnRateChange|function|点击某分数块触发的钩子|
