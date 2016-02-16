$(function() {
    $('#layer_tip').on('click', function() {
        $.layer.tip('tip a message!');
    });

    $('#layer_alert').on('click', function() {
        $.layer.alert('弹出层');
    });

    $('#layer_confirm').on('click', function() {
        $.layer.confirm('请确认操作？', function() {
            alert('已经确认');
        });
    });

    $('#layer_box').on('click', function() {
        $.layer.box({
            title: '自定义弹窗',
            content: '<div>name: <input name="abc"><br/><br/>age: <input name="age"></div>',
            btns: ['确定', '关闭'],
            callback: function(listen) {
                listen('关闭', function(close, serialize) {
                    close();
                });

                listen('确定', function(close, serialize) {
                    alert(serialize);
                    close();
                });
            }
        });
    });


    $('#layer_iframe').on('click', function() {
        $.layer.iframe({
            title: 'My Blog',
            url: 'http://www.f00sun.com',
            width: '70%',
            height: '80%'
        });
    });
});