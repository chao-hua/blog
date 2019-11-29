# 图片(不失真)充满容器

[[toc]]

## 1.将图片作为背景图片

将图片作为容器的背景图片，主要使用 `background-size: cover;` 属性，可以使图片等比例缩放，适应容器，不留白边。  

- 优点：兼容性较好，IE8 以上支持；关于背景的属性多。
- 缺点：是 CSS 样式控制，无法处理图片加载错误、完成等进一步处理。

示例原图为 w:500px h:200px 

<img src="./img/css01.png" alt="原示意图"> 

<demo>
  <template slot="html">
    <css-full-img-1></css-full-img-1>
  </template>

```html
<section>
    <style>
    .container {
        height: 100px;
        width: 300px;
        background-repeat: no-repeat;
        background-image: url(./css01.png);
        background-size: cover;
        background-position: 50% 50%; 
    }
    </style>
    <div class="container">
    </div>
</section>
```

</demo>

## 2.`object-fit: cover`

使用 `<img>` 标签，配合 `object-fit: cover` 属性，可以使图片等比例缩放，适应容器，不留白边。  

- 优点：和使用背景图效果一致；可以对图片加载错误、完成等进一步处理。
- 缺点：[兼容性差，IE 全部不兼容](https://caniuse.com/#search=object-fit)。

<demo>
  <template slot="html">
    <css-full-img-2></css-full-img-2>
  </template>

```html
<section>
    <style>
    .container {
        height: 100px;
        width: 300px;
        overflow: hidden;
    }
    .container img {
        object-fit: cover;
        width: 100%;
        height: 100%;
    }
    </style>
    <div class="container">
      <img src="./css01.png" alt="">
    </div>
</section>
```

</demo>

## 3.min 方法

使用 `<img>` 标签，将图片的高度和宽度设置一个最小满屏值，再移动居中。 

- 优点：兼容性好。
- 缺点：图片高度或宽度任意一尺寸小于容器时，这个情况是正常的，但如果图片的高度和宽度尺寸都大于容器，图片也能铺满，但容器就只显示大图的中间部分。

<demo>
  <template slot="html">
    <css-full-img-3></css-full-img-3>
  </template>

```html
<section>
    <style>
    .container {
        height: 100px;
        width: 300px;
        overflow: hidden;
        position: relative;
    }
    .container img {
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        min-width: 100%;
        min-height: 100%;
        transform: translate(-50%, -50%);
    }
    </style>
    <div class="container">
      <img src="./css01.png" alt="">
    </div>
</section>
```

</demo>

***

参考：  
[如何用纯CSS将图片填满div，自适应容器大小，已有两个不太完善的方案](https://segmentfault.com/q/1010000007129840/a-1020000007130321)  
