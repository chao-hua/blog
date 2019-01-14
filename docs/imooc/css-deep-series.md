# CSS 深入理解系列

[[toc]]

## `border`

- `border-width`
	+ 不支持百分比。
	+ 
- `border-style`
	+ `soild` 实线
		* 应用：三角形、梯形（上下梯形+矩形 模拟 IE 低版本圆角）。
	+ `dashed` 虚线
	+ `dotted` 点线
		* 在 Chrome/FireFox 中是小方块组成。
		* 在 IE 中是小圆点组成 - 应用：实现 IE 低版本中的圆角。
	+ `double` 双线 
		* 计算规则：双线宽度永远相等，中间间隔是宽度的 ±1。
		* 从 3px 开始与效果 - `border` 默认宽度是 3px 不是 1px。
		* 应用：三道杠图标。
- `border-color`
	+ `border-color` 默认值就是 `color`。
	+ 应用：可以直接改变 `color` 值来改变 `border-color`。
	+ `transparent` 属性应用
		* 三角、梯形。
		* 用透明边框优雅的增加点击区域，增加可视渲染区域。
		* `filter: drop-shadow` 给 png 图标变换颜色，使用透明边框，解决隐藏原始图标的问题（一般方式隐藏后，chrome 中 filter 将无效）。
- 布局中的应用
	+ `border` 与两栏等高布局
		* 不支持百分比宽度。
		* 因此适用于一侧宽度固定的两栏等高布局。

<Common-Democode title="基本用法" description="基本按钮用法">
  <test-test1></test-test1>
  <h1>11</h1>

```html
  <div class="demo-button">
    <div>
      <dt-button>默认按钮</dt-button>
      <dt-button type="primary">主要按钮</dt-button>
      <dt-button type="success">成功按钮</dt-button>
      <dt-button type="info">信息按钮</dt-button>
      <dt-button type="warning">警告按钮</dt-button>
      <dt-button type="danger">危险按钮</dt-button>
    </div>
  </div>
```


  <highlight-code slot="codeText" lang="html">
    <template>
      <div class="demo-button">
        <div>
          <dt-button>默认按钮</dt-button>
          <dt-button type="primary">主要按钮</dt-button>
          <dt-button type="success">成功按钮</dt-button>
          <dt-button type="info">信息按钮</dt-button>
          <dt-button type="warning">警告按钮</dt-button>
          <dt-button type="danger">危险按钮</dt-button>
        </div>
      </div>
    </template>


  </highlight-code>
</Common-Democode>
