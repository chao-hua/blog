# 文字超出省略

[[toc]]

```html
.line-camp( @clamp:2 ) {
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: @clamp;
    /*! autoprefixer: off */
    -webkit-box-orient: vertical; 
    /* autoprefixer: on */
}

<section>
    <style>
    div.ellipsis {
        border: solid 1px #3eaf7c;
        width: 200px;

        white-space: nowrap;
        text-overflow: ellipsis;
        -o-text-overflow: ellipsis;
        overflow: hidden;
    }
    </style>
    <div class="ellipsis">
        <span>英国王室的拥趸正在伦敦圣玛丽医院林都院区外扎营，等待凯特王妃产子。</span>
    </div>
</section>
<section>
    <style>
    .zxx_text_overflow_4 {
        border: solid 1px #3eaf7c;
        width: 200px;
        line-height: 1.3em;
        overflow: hidden;
        zoom: 1;
    }

    .zxx_text_overflow_4 .text_con {
        float: left;
        height: 1.3em;
        margin-right: 1.5em;
        overflow: hidden;
    }

    .zxx_text_overflow_4 .text_dotted {
        width: 1.5em;
        float: right;
        margin-top: -1.3em;
    }
    </style>
    <div class="zxx_text_overflow_4">
        <div class="text_con">这是一段比较长的文字，用来测试是否文字溢出时会用省略号显示。</div>
        <div class="text_dotted">…</div>
    </div>
</section>
```

-webkit-box-orient: vertical 在使用 webpack 打包的时候这段代码会被删除掉，原因是 optimize-css-assets-webpack-plugin 这个插件的问题。

***

参考：  
[关于文字内容溢出用点点点(…)省略号表示](https://www.zhangxinxu.com/wordpress/2009/09/%E5%85%B3%E4%BA%8E%E6%96%87%E5%AD%97%E5%86%85%E5%AE%B9%E6%BA%A2%E5%87%BA%E7%94%A8%E7%82%B9%E7%82%B9%E7%82%B9-%E7%9C%81%E7%95%A5%E5%8F%B7%E8%A1%A8%E7%A4%BA/)  
[自适应表格连续字符换行及单行溢出点点点显示](https://www.zhangxinxu.com/wordpress/2014/04/%E8%87%AA%E9%80%82%E5%BA%94%E8%A1%A8%E6%A0%BC-%E5%AD%97%E7%AC%A6%E6%8D%A2%E8%A1%8C-%E6%BA%A2%E5%87%BA%E7%82%B9%E7%82%B9%E7%82%B9-table-text-overflow-ellipsis-word-wrap-break-all/)