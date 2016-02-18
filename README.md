# The jQuery Plugin of layer


# Getting Started
Add the stylesheet, jquery and jquery.layer plugin in you web page. [see homepage & demo](http://kyo4311.github.io/jquery.layer/) [download the zip](http://kyo4311.github.io/jquery.layer/jquery.layer.rar)
```html
<link rel="stylesheet" href="jquery.layer.min.css" />
<script src="jquery.js"></script>
<script src="jquery.layer.min.js"></script>
```

# tip
```js
$.layer.tip('tip a message!');
```

# alert
```js
$.layer.alert('弹出层');
```

# confirm
```js
$.layer.confirm('请确认操作？', function(){
    alert('已经确认');
});
```
# iframe
```js
$.layer.iframe({
    title : 'My Blog',
    url : 'http://www.f00sun.com',
    width : '70%',
    height : '80%'
});
```

# box
```js
$.layer.box({
    title : '自定义弹窗',
    // width:'600px',
    // height: '400px',
    content : '<div>name: <input name="abc"><br/><br/>age: <input name="age"></div>',
    btns : ['确定', '关闭'],
    callback:function(listen){
        listen('关闭', function(close, serialize){
            close();
        });

        listen('确定', function(close, serialize){
            alert(serialize);
            close();
        });
    }
});
```

# form
```js
$.layer.form({
    title: '修改用户',
    content: '<div><input value="#{name}"></div>',  //这里模板
    getUrl: 'url', //取数据接口会用get
    postUrl: 'url', //存数据接口会用post
    //提交之前
    beforeSubmit: function(serialize, serializeArray) {
        //console.log(serialize, serializeArray); //表单数组
        //console.log(this); //this指向弹出的层
        return true; //return false将不会被提交
    },
    postSuccess: function(close, data) { //保存成功
        // data是长这样子的
        //{
        //    name : 'zhangsan'    
        //}

        if (!data.error) {
            close();
            table.init();
        }
    }
});
```


# License
Copyright (c) 2016 guosheng 
Licensed under the [MIT License](https://github.com/umdjs/umd/blob/master/LICENSE.md).
