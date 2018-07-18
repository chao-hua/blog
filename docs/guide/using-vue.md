# 在 Markdown 中使用 Vue

## 浏览器 API 访问限制

由于 VuePress 应用程序在生成静态构建文件时会在 Node.js 中进行服务器渲染，所以任何 Vue 用法都必须符合[通用代码要求](https://ssr.vuejs.org/en/universal.html)。简而言之，确保只在 `beforeMounted` 或 `mounted` 钩子中访问 Browser / DOM API。

如果你正在使用或演示非 SSR 友好的组件（比如说包含了自定义指令），则可以将它们包装在内置的 `<ClientOnly>` 组件中：

``` md
<ClientOnly>
  <NonSSRFriendlyComponent/>
</ClientOnly>
```

请注意，这不会修复**在 import** 时访问浏览器 API 的组件或库的问题 - 为了使用在导入时使用浏览器环境的代码，你需要将它们动态地导入到合适的生命周期钩子中：

``` vue
<script>
export default {
  mounted () {
    import('./lib-that-access-window-on-import').then(module => {
      // use code
    })
  }
}
</script>
```

## 模板(templating)

### 插值

每个 markdown 文件首先被编译成 HTML，然后作为 Vue 组件传递给 `vue-loader` 。这意味着你可以在文本中使用 Vue 风格的插值表达式：

**输入**

``` md
{{ 1 + 1 }}
```

**输出**

<div class="language-text"><pre><code>{{ 1 + 1 }}</code></pre></div>

### 指令

指令也起作用：

**输入**

``` md
<span v-for="i in 3">{{ i }} </span>
```

**输出**

<div class="language-text"><pre><code><span v-for="i in 3">{{ i }} </span></code></pre></div>

### 访问网站和页面数据

已编译的组件没有任何私有数据，但可以访问[网站元数据](./custom-themes.md#网站和网页元数据-site-and-page-metadata)。例如：

**输入**

``` md
{{ $page }}
```

**输出**

``` json
{
  "path": "/using-vue.html",
  "title": "Using Vue in Markdown",
  "frontmatter": {}
}
```

## 转义(escaping)

默认情况下，fenced 代码块会自动用 `v-pre` 包装。如果要在内联代码片段或纯文本内显示原始插值或特定于 Vue 的语法，则需要用 `v-pre` 自定义容器包装段落：

**输入**

``` md
::: v-pre
`{{ This will be displayed as-is }}`
:::
```

**输出**

::: v-pre
`{{ This will be displayed as-is }}`
:::

## 使用组件（Using Components）

`.vuepress / components` 中的任意 `* .vue` 文件都会自动注册为 [全局(global)](https://vuejs.org/v2/guide/components-registration.html#Global-Registration), [异步(async)](https://vuejs.org/v2/guide/components-dynamic-async.html#Async-Components) 组件。例如：

```
.
└─ .vuepress
   └─ components
      ├─ demo-1.vue
      ├─ OtherComponent.vue
      └─ Foo
         └─ Bar.vue
```

在任何 markdown 文件中，你可以直接使用这些组件（名称是从文件名推断的）：

``` md
<demo-1/>
<OtherComponent/>
<Foo-Bar/>
```

<demo-1></demo-1>

<OtherComponent/>

<Foo-Bar/>

::: warning 重要
确保自定义组件的名称包含连字符或符合 PascalCase 命名规则。否则，它将被视为内联元素，并被包裹在一个 `<p>` 标签内，这将导致 hydration （Vue 的渲染子过程）不匹配，因为 `<p>` 不允许块元素放置在其中。
:::

### 使用预处理器

VuePress 已经为如下预处理器内置了相关的 webpack 配置：`sass`, `scss`, `less`, `stylus` 和 `pug`。要使用它们你只需要在项目中安装对应的依赖即可。例如，要使用 `sass`，需要在项目中安装：

``` bash
yarn add -D sass-loader node-sass
```

接着你就可以在 Markdown 或者组件中使用如下代码：

``` vue
<style lang="sass">
.title
  font-size: 20px
</style>
```

使用 `<template lang="pug">` 需要安装 `pug` 和 `pug-plain-loader`：

``` bash
yarn add -D pug pug-plain-loader
```

::: tip
如果你是 Stylus 用户，那么不需要在项目中安装 `stylus` 和 `stylus-loader`，因为VuePress 内部已经使用了 Stylus。

对于没有内置 webpack 配置支持的预处理器，除了安装必要的依赖项外，还需要[扩展内部 webpack 配置](../config/README.md#configurewebpack)。
:::

## 脚本和样式提升

有时你可能需要将一些 JavaScript 或 CSS 仅用于当前页面。在这些情况下，你可以在 markdown 文件中直接编写根级别的 `<script>` 和 `<style>` 标签，它们会从编译的 HTML 中提取出来，并作为生成的 Vue 单文件组件的 `<script>` 和 `<style >` 标签。

<p class="demo" :class="$style.example"></p>

<style module>
.example {
  color: #41b883;
}
</style>

<script>
export default {
  mounted () {
    document.querySelector(`.${this.$style.example}`)
      .textContent = '这是通过内联脚本中的内嵌 CSS 样式渲染的。'
  }
}
</script>

## 内置组件

### OutboundLink <Badge text="stable"/>

它（<OutboundLink />）用于表示这是一个外部链接。在 VuePress 中，每个外部链接都跟着一个这样的组件。

### ClientOnly <Badge text="stable"/>

参考[浏览器 API 访问限制](#browser-api-access-restrictions)。

### Content <Badge text="beta" type="warn"/>

- **Props**:

  - `custom` - boolean

- **用法**：   
   
当前 `.md` 文件渲染的已编译内容。当你使用[自定义布局](../default-theme-config/README.md#自定义页面的-class)时，这将非常有用。

``` vue
<Content/>
```

**也可以参考：** 

- [自定义主题 > 获取渲染内容](./custom-themes.md#内容出口-content-outlet)

  
### Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>

- **Props**:

   - `text` - string
   - `type` - string, 可选值：`"tip"|"warn"|"error"`, 默认值是：`"tip"`.
   - `vertical` - string, 可选值：`"top"|"middle"`, 默认值是：`"top"`.

- **用法**:

你可以在标题文本的末尾，使用这个组件来为某些 API 添加一些状态：
   
``` md
### Badge <Badge text="beta" type="warn"/> <Badge text="0.10.1+"/>
```   
