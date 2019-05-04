# 两端对齐

[[toc]]

## TODO

```css
.justify {
  display: inline-block;
  width: 50px;
  overflow: hidden;
  height: 32px;
  line-height: 32px;
  text-align: justify;

  &:after {
    content: " ";
    display: inline-block;
    width: 100%;
  }
}
```


***

参考：  
[display:inline-block/text-align:justify下列表的两端对齐布局](https://www.zhangxinxu.com/wordpress/2011/03/displayinline-blocktext-alignjustify%E4%B8%8B%E5%88%97%E8%A1%A8%E7%9A%84%E4%B8%A4%E7%AB%AF%E5%AF%B9%E9%BD%90%E5%B8%83%E5%B1%80/)  
