# `line-height`

[[toc]]

## 1.概念

- `line-height`：行高，两条基线（`baseline`）之间的距离
- 行高由于继承性，影响无处不在，即使单行文本也不例外
- 内联元素的高度是由 `line-height` 决定的
- 行高只是幕后黑手，高度的表现不是行高，而是内容区域高度和行间距
- 内容区域高度（content area）+ 行间距（vertical spacing）= 行高（line-height）
- 内容区域高度（content area）只与字号（font-size）以及字体（font-family）有关，与 line-height 没有任何关系
- 在 simsun 字体下，内容区域高度等于文字大小值 =》 在 simsun 字体下：font-size + 行间距 = line-height
- 半行间距 = 行间距 / 2
- 行高决定内联盒子高度；行间距是墙头草，可大可小（甚至是负值），保证高度正好等于行高


行内框盒子模型：
1、内容区域（content area），是一种围绕文字看不见的盒子。内容区域的大小与font-size大小相关
2、内联盒子（inline boxes），内联盒子不会让内容成块显示，而是排成一行。如果外部含inline水平的标签（span，a，em等），则属于内联盒子。如果是个光秃秃的文字，则属于匿名内联盒子。
3、行内盒子（line boxes），每一行就是一个行框盒子，每个行框盒子又是由一个一个内联盒子组成
4、包含盒子（containing box），此盒子由一行一行行框盒子组成

`line-height` 属性值：

- `normal`：跟用户浏览器走，且与元素字体关联 =》 body 中 reset line-height 保证良好的体验
- `<number>`：根据 `font-size` 大小计算
- `<length>`：具体长度值
- `<percent>`：相对于设置了该 `line-height` 属性的元素的 `font-size` 大小计算
- `inherit`：继承，input 等元素默认是 `normal` ，使用 `inherit` 可以让样式可控性更强

注意 

- `line-height: 1.5;` 所有可继承元素根据 `font-size` 重新计算行高；
- `line-height: 150%;` `line-height: 1.5em;` 当前元素根据 `font-size` 计算行高，继承给下面的元素


