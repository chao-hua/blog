# 两端对齐

[[toc]]

## 1.`text-align: justify;`

`text-align: justify;` 使文本行的左右两端都放在父元素的内边界上。然后，调整单词和字母间的间隔，使各行的长度恰好相等。  

### 1.1 单行文本设置 `text-align: justify;` 不起作用

原因： `text-align: justify;` 不会处理被打断的行和最后一行。被打断的行是指设置 `word-break: break-all;` 这种强制换行的属性；仅一行，也就是最后一行，故无效。

解决：  

- 只需加上 `text-align-last: justify;` 来处理对齐文本的最后一行，但是部分浏览器不支持。
- 对于不支持的浏览器，需要人为加上最后一行。可以使用伪元素（`:after`）来添加行，然后把该行隐藏掉（可以通过设置高度和行高来隐藏多行）。

### 1.2 IE 兼容问题

在 IE 下需要额外加上 `text-justify: inter-ideograph;` 来保证 `text-align: justify;` 达到预期效果。

### 1.3 FireFox 等其他浏览器兼容问题

在部分浏览器上，我们这样使用还是无效，需要额外用空格将每个字/字母分隔开。

### 1.4 FireFox 中中文多行文本参差不齐问题

多行文本在 FireFox 中，英文文本时 `text-align-last: justify;` 表现良好，包括最后一行。  
但是在中文文本时，右侧会出现文本参差不齐问题，可以设置 `word-break: break-all;` 来处理，但是最后一行还是无能为力。

<demo>
  <template slot="html">
    <css-justify-1></css-justify-1>
  </template>

```html
<section class="single">
    <div>姓 名</div>
    <div>手 机 号 码</div>
    <div>账 号</div>
    <div>身 份 证</div>
</section>
<section class="multiple">
    <div>英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营，等待凯特王妃产子。报道称，这些粉丝们身穿英国国旗式样的衣服，举着威廉王子夫妇的照片，在医院外表达着自己对于王妃即将产子的快乐心情。</div>
    <div>Some of the important features about Dark Mode addon are listed below. This is followed by an overview about this addon. This summary contains few words about the addon, its function and features. Next is FAQ, this section is useful to get information about how this addon works in your browser.</div>
</section>
<style>
.single {
    div {
        margin: 10px 0;
        border: 1px solid #3eaf7c;
        width: 100px;
        text-align: justify;
        text-align-last: justify;
        text-justify: inter-ideograph;
        word-break: break-all;
        height: 22px;
        line-height: 22px;
    }
    div:after {
        content: '';
        display: inline-block;
        width: 100%;
    }
}

.multiple {
    div {
        margin: 10px 0;
        border: 1px solid #3eaf7c;
        width: 400px;
        text-align: justify;
        text-align-last: justify;
        text-justify: inter-ideograph;
        word-break: break-all;
    }
}
</style>
```

</demo>

***

参考：  
[display:inline-block/text-align:justify下列表的两端对齐布局](https://www.zhangxinxu.com/wordpress/2011/03/displayinline-blocktext-alignjustify%E4%B8%8B%E5%88%97%E8%A1%A8%E7%9A%84%E4%B8%A4%E7%AB%AF%E5%AF%B9%E9%BD%90%E5%B8%83%E5%B1%80/)  
[使用text-align:justify，让内容两端对齐，兼容IE及主流浏览器的方法](https://www.cnblogs.com/zjjDaily/p/9525350.html)  
[css3总结之： text-align: justify （两端对齐）](https://570109268.iteye.com/blog/2409915)