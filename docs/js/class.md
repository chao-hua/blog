# 创建对象的方法总结

[[toc]]

## 工厂模式

```js{2,7,10}
function createPerson(name) {
    var o = new Object();
    o.name = name;
    o.getName = function () {
        console.log(this.name);
    };
    return o;
}

var person1 = createPerson('kevin');
```

缺点：对象无法识别