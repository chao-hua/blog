# `vertical-align`

[[toc]]

## 1.概念

<demo column>
  <template slot="html">
    <css-vertical-align-2></css-vertical-align-2>
  </template>

```html
<section style="font-size: 12px;">
    <p>
        <label for="checkbox1">checkbox1</label>
        <input type="checkbox" name="checkbox" id="checkbox1">
        <label for="checkbox2">checkbox2</label>
        <input type="checkbox" name="checkbox" id="checkbox2">
    </p>
    <p>
        <label for="male">Male</label>
        <input type="radio" name="radio" id="male">
        <label for="female">Female</label>
        <input type="radio" name="radio" id="female">
    </p>
</section>
```


</demo>

## 2.运用

### 2.1 复选框、单选框与文字对齐问题

在字体 12px 情况下，主流浏览器都存在复选框、单选框与文字对不齐的问题。

<demo>
  <template slot="html">
    <css-vertical-align-1></css-vertical-align-1>
  </template>

```html
<section style="font-size: 12px;">
    <p>
        <label for="checkbox1">checkbox1</label>
        <input type="checkbox" name="checkbox" id="checkbox1">
        <label for="checkbox2">checkbox2</label>
        <input type="checkbox" name="checkbox" id="checkbox2">
    </p>
    <p>
        <label for="male">Male</label>
        <input type="radio" name="radio" id="male">
        <label for="female">Female</label>
        <input type="radio" name="radio" id="female">
    </p>
</section>
```

</demo>

可以通过给复选框、单选框设置 `vertical-align` 来解决：

- `vertical-align: middle;`
- `vertical-align: bottom;`
- `vertical-align: -3px;`

***

参考：  
[深入理解 vertical-align](https://blog.csdn.net/u012062760/article/details/52999416)  
[复选框单选框与文字对齐问题的研究与解决](https://www.zhangxinxu.com/wordpress/2009/08/%E5%A4%8D%E9%80%89%E6%A1%86%E6%88%96%E5%8D%95%E9%80%89%E6%A1%86%E4%B8%8E%E6%96%87%E5%AD%97%E5%AF%B9%E9%BD%90%E7%9A%84%E9%97%AE%E9%A2%98%E7%9A%84%E6%B7%B1%E5%85%A5%E7%A0%94%E7%A9%B6%E4%B8%8E%E4%B8%80/)  
[css行高line-height的一些深入理解及应用](https://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/)  
[我对CSS vertical-align的一些理解与认识（一）](https://www.zhangxinxu.com/wordpress/2010/05/%E6%88%91%E5%AF%B9css-vertical-align%E7%9A%84%E4%B8%80%E4%BA%9B%E7%90%86%E8%A7%A3%E4%B8%8E%E8%AE%A4%E8%AF%86%EF%BC%88%E4%B8%80%EF%BC%89/)  
[CSS vertical-align的深入理解(二)之text-top篇](https://www.zhangxinxu.com/wordpress/2010/06/css-vertical-align%E7%9A%84%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%EF%BC%88%E4%BA%8C%EF%BC%89%E4%B9%8Btext-top%E7%AF%87/)  
[CSS深入理解vertical-align和line-height的基友关系](https://www.zhangxinxu.com/wordpress/2015/08/css-deep-understand-vertical-align-and-line-height/) 
