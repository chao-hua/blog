# 文字超出省略

[[toc]]

## 1.单行文本

### 1.1 方案1

简介，有效，但是可能会有部分老浏览器不支持。

<demo column>
  <template slot="html">
    <css-ellipsis-1></css-ellipsis-1>
  </template>

```html
<section>
    <style>
    .ellipsis {
        border: solid 1px #3eaf7c;
        width: 200px;

        white-space: nowrap; /* 不允许折行 */
        text-overflow: ellipsis; /* 超出部分显示省略号 */
        -o-text-overflow: ellipsis; /* 兼容 opera */
        overflow: hidden; /* 超出部分隐藏 */
    }
    </style>
    <div class="ellipsis">
        <span>短的文字</span>
    </div>
    <br>
    <div class="ellipsis">
        <span>英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营，等待凯特王妃产子。</span>
    </div>
</section>
```

</demo>

### 1.2 方案2

兼容性更好，但是更复杂，且浏览器表现的有些许差异。

<demo column>
  <template slot="html">
    <css-ellipsis-2></css-ellipsis-2>
  </template>

```html
<section>
    <style>
    .ellipsis-box {
        border: solid 1px #3eaf7c;
        width: 200px;
        line-height: 1.3em;
        overflow: hidden;
        zoom: 1;
    }

    .ellipsis-box .ellipsis-con {
        float: left;
        height: 1.3em;
        margin-right: 1.5em;
        overflow: hidden;
    }

    .ellipsis-box .ellipsis-icon {
        width: 1.5em;
        float: right;
        margin-top: -1.3em;
    }
    </style>
    <div class="ellipsis-box">
        <div class="ellipsis-con">短的文字</div>
        <div class="ellipsis-icon">…</div>
    </div>
    <br>    
    <div class="ellipsis-box">
        <div class="ellipsis-con">英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营，等待凯特王妃产子。</div>
        <div class="ellipsis-icon">…</div>
    </div>
</section>
```

</demo>

## 2.多行文本

### 2.1 webkit 方案

<demo>
  <template slot="html">
    <css-ellipsis-3></css-ellipsis-3>
  </template>

```html
<section>
    <style>
    .line-camp {
        text-overflow: -o-ellipsis-lastline; /* 兼容 opera */
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box; /* 将对象作为弹性伸缩盒子模型显示 */
        -webkit-line-clamp: 2; /* webkit 专属属性，firefox 不支持 */
        /*! autoprefixer: off */
        -webkit-box-orient: vertical; /* 规定框的子元素应该被水平或垂直排列,在使用 webpack 打包的时候这段代码会被删除掉，原因是 optimize-css-assets-webpack-plugin 这个插件的问题 */
        /* autoprefixer: on */

        width: 400px;
        border: solid 1px #3eaf7c;
    }
    </style>
    <div class="line-camp">
        <span>英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营，等待凯特王妃产子。英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营，等待凯特王妃产子。</span>
    </div>
</section>
```

</demo>

### 2.2 firefox 方案

由于 firefox 不支持 `-webkit-line-clamp` 属性，因此需要特殊处理。

<demo>
  <template slot="html">
    <css-ellipsis-4></css-ellipsis-4>
  </template>

```html
<section>
    <style>
    .line-camp {
        width: 400px;
        border: solid 1px #3eaf7c;

        overflow: hidden;
        position: relative;
        line-height: 20px;
        max-height: 40px;
    }

    .line-camp:after {
        content: "...";
        position: absolute;
        bottom: 0;
        right: 0;
        padding-left: 20px;
        background: linear-gradient(to right, transparent, #fff 100%);
    }
    </style>
    <div class="line-camp">
        <span>英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营，等待凯特王妃产子。英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营，等待凯特王妃产子。</span>
    </div>
</section>
```

</demo>

***

参考：  
[关于文字内容溢出用点点点(…)省略号表示](https://www.zhangxinxu.com/wordpress/2009/09/%E5%85%B3%E4%BA%8E%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9%E6%BA%A2%E5%87%BA%E7%94%A8%E7%82%B9%E7%82%B9%E7%82%B9-%E7%9C%81%E7%95%A5%E5%8F%B7%E8%A1%A8%E7%A4%BA/)  
[自适应表格连续字符换行及单行溢出点点点显示](https://www.zhangxinxu.com/wordpress/2014/04/%E8%87%AA%E9%80%82%E5%BA%94%E8%A1%A8%E6%A0%BC-%E5%AD%97%E7%AC%A6%E6%8D%A2%E8%A1%8C-%E6%BA%A2%E5%87%BA%E7%82%B9%E7%82%B9%E7%82%B9-table-text-overflow-ellipsis-word-wrap-break-all/)