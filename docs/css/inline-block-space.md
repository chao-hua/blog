# 去除 `inline-block` 元素间间距

`inline-block` 水平呈现的元素间，由于换行、空格分隔的情况下会产生间距。  

```html
<section>
    <style>
    .space a {
        display: inline-block;
        padding: 5px 10px ;
        background-color: #cad5eb;
        border: solid 1px #ccc;
    }
    </style>
    <div class="space">
        <a href="##">连接1</a>
        <a href="##">连接2</a>
        <a href="##">连接3</a>
    </div>
</section>
```

## 解决方法：

- 移除空格
    + 代码可读性性差
- `font-size: 0;`
    + 常用方法
- 使用 `margin` 负值
- 使用 `letter-spacing`
    + `letter-spacing` 属性增加或减少字符间的空白，外层减少间距，内层默认（normal/0）
    + `.space { letter-spacing: -10px;}` 超过一定大小就没必要再大，不会重叠
    + `.space a { letter-spacing: 0;}`
- 使用 `word-spacing`
    + `word-spacing` 属性增加或减少单词间的空白，外层减少间距，内层默认（normal/0）
    + `.space { word-spacing: -10px;}` 超过一定大小，会重叠
    + `.space a { word-spacing: 0;}`
- 其他
    + YUI 3 CSS Grids 使用 `letter-spacing` 和 `word-spacing` 去除格栅单元见间隔方法（注意，其针对的是block水平的元素，因此对IE8-浏览器做了hack处理）

```css
.yui3-g {
    letter-spacing: -0.31em; /* webkit */
    *letter-spacing: normal; /* IE < 8 重置 */
    word-spacing: -0.43em; /* IE < 8 && gecko */
}

.yui3-u {
    display: inline-block;
    zoom: 1; *display: inline; /* IE < 8: 伪造 inline-block */
    letter-spacing: normal;
    word-spacing: normal;
    vertical-align: top;
}
```

***

参考：  
[去除inline-block元素间间距的N种方法](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)  
