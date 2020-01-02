(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{305:function(l,v,_){"use strict";_.r(v);var i=_(1),e=Object(i.a)({},(function(){var l=this,v=l.$createElement,_=l._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":l.$parent.slotKey}},[_("h1",{attrs:{id:"《四大维度解锁-webpack-前端工程化》笔记"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#《四大维度解锁-webpack-前端工程化》笔记"}},[l._v("#")]),l._v(" 《四大维度解锁 Webpack 前端工程化》笔记")]),l._v(" "),_("ul",[_("li",[l._v("为什么前端需要构建\n"),_("ul",[_("li",[l._v("开发复杂化")]),l._v(" "),_("li",[l._v("框架去中心化")]),l._v(" "),_("li",[l._v("语言编译化")]),l._v(" "),_("li",[l._v("开发模块化")])])]),l._v(" "),_("li",[l._v("JS 模块化\n"),_("ul",[_("li",[l._v("命名空间\n"),_("ul",[_("li",[l._v("库名.类别名.方法名")]),l._v(" "),_("li",[l._v("容易命名冲突，覆盖")]),l._v(" "),_("li",[l._v("必须知晓具体命名，才能使用方法")])])]),l._v(" "),_("li",[l._v("CommonJS\n"),_("ul",[_("li",[l._v("一个文件为一个模块")]),l._v(" "),_("li",[l._v("通过 "),_("code",[l._v("module.exports")]),l._v(" 暴露模块接口")]),l._v(" "),_("li",[l._v("通过 "),_("code",[l._v("require")]),l._v(" 引入模块")]),l._v(" "),_("li",[l._v("同步执行")])])]),l._v(" "),_("li",[l._v("AMD\n"),_("ul",[_("li",[l._v("Async Module Definition")]),l._v(" "),_("li",[l._v("使用 "),_("code",[l._v("define")]),l._v(" 定义模块")]),l._v(" "),_("li",[l._v("使用 "),_("code",[l._v("require")]),l._v(" 加载模块")]),l._v(" "),_("li",[l._v("RequireJS")]),l._v(" "),_("li",[l._v("依赖前置，提前执行（与 CMD 重要区别）")])])]),l._v(" "),_("li",[l._v("CMD\n"),_("ul",[_("li",[l._v("Common Module Definition")]),l._v(" "),_("li",[l._v("一个文件为一个模块")]),l._v(" "),_("li",[l._v("使用 "),_("code",[l._v("define")]),l._v(" 定义模块")]),l._v(" "),_("li",[l._v("使用 "),_("code",[l._v("require")]),l._v(" 加载模块")]),l._v(" "),_("li",[l._v("SeaJS")]),l._v(" "),_("li",[l._v("尽可能懒执行（与 AMD 重要区别）")])])]),l._v(" "),_("li",[l._v("UMD\n"),_("ul",[_("li",[l._v("Universal Module Definition")]),l._v(" "),_("li",[l._v("通用解决方案")]),l._v(" "),_("li",[l._v("三步骤\n"),_("ul",[_("li",[l._v("判断是否支持 AMD")]),l._v(" "),_("li",[l._v("判断是否支持 CommonJS")]),l._v(" "),_("li",[l._v("如果都不支持，使用全局变量 - 命名空间")])])])])]),l._v(" "),_("li",[l._v("ES6 module\n"),_("ul",[_("li",[l._v("EcmaScripte Module")]),l._v(" "),_("li",[l._v("一个文件为一个模块")]),l._v(" "),_("li",[_("code",[l._v("export")]),l._v(" "),_("code",[l._v("import")])])])]),l._v(" "),_("li",[l._v("Webpack 支持的模块化方式\n"),_("ul",[_("li",[l._v("AMD(RequireJS)")]),l._v(" "),_("li",[l._v("ES Module(推荐)")]),l._v(" "),_("li",[l._v("CommonJS")])])])])]),l._v(" "),_("li",[l._v("CSS 模块化\n"),_("ul",[_("li",[l._v("OOCSS\n"),_("ul",[_("li",[l._v("Object Oriented CSS：面向对象的 CSS")]),l._v(" "),_("li",[l._v("原则\n"),_("ul",[_("li",[l._v("Separate structure and skin（分离结构和主题）")]),l._v(" "),_("li",[l._v("Separate container and content（分离容器和内容）")])])])])]),l._v(" "),_("li",[l._v("SMACSS\n"),_("ul",[_("li",[l._v("Scalable and Modular Architecture for CSS")]),l._v(" "),_("li",[l._v("划分为 5 个类别：Base, Layout, Module, State, Theme or Skin")])])]),l._v(" "),_("li",[l._v("Atomic CSS\n"),_("ul",[_("li",[l._v("原子化 CSS")]),l._v(" "),_("li",[_("code",[l._v("mt-10")])])])]),l._v(" "),_("li",[l._v("MCSS\n"),_("ul",[_("li",[l._v("Multilayer CSS：多层级 CSS")])])]),l._v(" "),_("li",[l._v("AMCSS\n"),_("ul",[_("li",[l._v("通过属性进行 CSS 设计")]),l._v(" "),_("li",[_("code",[l._v('am-szie="large" am-disabled')])])])]),l._v(" "),_("li",[l._v("BEM\n"),_("ul",[_("li",[l._v("Block__Element-Modifier")])])]),l._v(" "),_("li",[l._v("CSS Modules")])])]),l._v(" "),_("li",[l._v("Webpack 核心概念\n"),_("ul",[_("li",[l._v("Entery\n"),_("ul",[_("li",[l._v("代码入口")]),l._v(" "),_("li",[l._v("打包入口")]),l._v(" "),_("li",[l._v("单个或者多个（多页面程序等）")])])]),l._v(" "),_("li",[l._v("Output\n"),_("ul",[_("li",[l._v("打包成的文件（bundle）")]),l._v(" "),_("li",[l._v("单个或者多个")]),l._v(" "),_("li",[l._v("自定义规则")])])]),l._v(" "),_("li",[l._v("Loaders\n"),_("ul",[_("li",[l._v("处理文件（除去 js 以外的其他文件）")]),l._v(" "),_("li",[l._v("将文件转化成模块（js 可以识别的模块）")])])]),l._v(" "),_("li",[l._v("Plugins\n"),_("ul",[_("li",[l._v("参与打包整个过程")]),l._v(" "),_("li",[l._v("打包优化和压缩")]),l._v(" "),_("li",[l._v("配置编译时的变量")]),l._v(" "),_("li",[l._v("极其灵活")])])])])]),l._v(" "),_("li",[l._v("Babel\n"),_("ul",[_("li",[l._v("babel-polyfill\n"),_("ul",[_("li",[l._v("全局垫片")]),l._v(" "),_("li",[l._v("为应用准备")]),l._v(" "),_("li",[_("code",[l._v("import 'bable-polyfill'")])])])]),l._v(" "),_("li",[l._v("babel-plugin-transform-runtime\n"),_("ul",[_("li",[l._v("局部垫片")]),l._v(" "),_("li",[l._v("为开发框架准备")])])])])]),l._v(" "),_("li",[l._v("TypeScript\n"),_("ul",[_("li",[l._v("ts-loader")]),l._v(" "),_("li",[l._v("tsconfig.json\n"),_("ul",[_("li",[l._v("compilerOptions")]),l._v(" "),_("li",[l._v("include")]),l._v(" "),_("li",[l._v("exclude")]),l._v(" "),_("li",[l._v("typeRoots: 类型提示: typings @type/")])])])])]),l._v(" "),_("li",[l._v("提取公共代码\n"),_("ul",[_("li",[l._v("减少代码冗余")]),l._v(" "),_("li",[l._v("提高加载速度")]),l._v(" "),_("li",[l._v("plugins 中 "),_("code",[l._v("new webpack.optimize.CommonsChunkPlugin(option)")]),l._v(" "),_("ul",[_("li",[l._v("minChunks: 最少出现次数")]),l._v(" "),_("li",[l._v("async")]),l._v(" "),_("li",[l._v("children")])])]),l._v(" "),_("li",[l._v("4.0 不在 plugins 中设置，在 optimization.splitChunks 中设置")])])]),l._v(" "),_("li",[l._v("代码分割和懒加载\n"),_("ul",[_("li",[l._v("webpack methods\n"),_("ul",[_("li",[l._v("require.ensure")]),l._v(" "),_("li",[l._v("require.include")])])]),l._v(" "),_("li",[l._v("ES5 Loader Spec\n"),_("ul",[_("li",[l._v("import(/* webpackChunkName:... */, '...').then() 通过注释指定名字等")])])])])]),l._v(" "),_("li",[l._v("CSS 处理\n"),_("ul",[_("li",[l._v("引用 CSS\n"),_("ul",[_("li",[l._v("style-loader\n"),_("ul",[_("li",[l._v("/url 将直接插入样式，变成 link 引用，多个样式多个引用")]),l._v(" "),_("li",[l._v("/useable 可以对引用的 css 对象，使用 "),_("code",[l._v("use()")]),l._v(" 和 "),_("code",[l._v("unuse()")]),l._v(" 方法在运行环境中启用或停用样式")]),l._v(" "),_("li",[l._v("options\n"),_("ul",[_("li",[l._v("insertAt 插入位置")]),l._v(" "),_("li",[l._v("insertInto 插入到 Dom")]),l._v(" "),_("li",[l._v("singleton 只使用一个 style 标签")]),l._v(" "),_("li",[l._v("transform 样式插入浏览器时执行转换")])])])])]),l._v(" "),_("li",[l._v("css-loader\n"),_("ul",[_("li",[l._v("options\n"),_("ul",[_("li",[l._v("alias 解析别名")]),l._v(" "),_("li",[l._v("importLoader")]),l._v(" "),_("li",[l._v("minimize 是否压缩")]),l._v(" "),_("li",[l._v("module 启用 CSS-Modules")])])]),l._v(" "),_("li",[l._v("CSS-Modules\n"),_("ul",[_("li",[l._v(":local")]),l._v(" "),_("li",[l._v(":global")]),l._v(" "),_("li",[l._v("compose")]),l._v(" "),_("li",[l._v("compose ... from path")])])])])]),l._v(" "),_("li",[l._v("配置 Less / Sass\n"),_("ul",[_("li",[l._v("less-loader less")]),l._v(" "),_("li",[l._v("sass-loader node-sass")])])])])]),l._v(" "),_("li",[l._v("提取 CSS\n"),_("ul",[_("li",[l._v("extract-loader")]),l._v(" "),_("li",[l._v("extract-text-webpack-plugin\n"),_("ul",[_("li",[l._v("extract")]),l._v(" "),_("li",[l._v("use")])])])])]),l._v(" "),_("li",[l._v("PostCSS\n"),_("ul",[_("li",[l._v("autoprefixer")]),l._v(" "),_("li",[l._v("CSS-nano 压缩")]),l._v(" "),_("li",[l._v("CSS-next 新语法支持")])])])])]),l._v(" "),_("li",[l._v("Tree Shaking\n"),_("ul",[_("li",[l._v("JS Tree Shaking\n"),_("ul",[_("li",[l._v("Webpack.optimize.UglifyJsPlugin")]),l._v(" "),_("li",[l._v("4.0 不在 plugins 中设置，在 optimization.splitChunks 中设置")]),l._v(" "),_("li",[l._v("或者直接指定 mode: 'production' 将自动完成")])])]),l._v(" "),_("li",[l._v("CSS Tree Shaking\n"),_("ul",[_("li",[l._v("purifycss-webpack\n"),_("ul",[_("li",[l._v("paths:glob.sync({})")]),l._v(" "),_("li",[l._v("npm install glob-all")])])])])])])]),l._v(" "),_("li",[l._v("图片处理\n"),_("ul",[_("li",[l._v("file-loader")]),l._v(" "),_("li",[l._v("url-loader")]),l._v(" "),_("li",[l._v("img-loader")]),l._v(" "),_("li",[l._v("postcss-spirtes")])])]),l._v(" "),_("li",[l._v("第三方库\n"),_("ul",[_("li",[l._v("webpack.ProvidePlugin\n"),_("ul",[_("li",[l._v("node-modules 中直接引用")]),l._v(" "),_("li",[l._v("自己路径 可以借助 resolve.alias 指定路径加载")])])]),l._v(" "),_("li",[l._v("imports-loader")]),l._v(" "),_("li",[l._v("window: CDN上的通用库，可以直接再加 HTML 中")])])]),l._v(" "),_("li",[l._v("生成 HTML\n"),_("ul",[_("li",[l._v("html-webpack-plugin\n"),_("ul",[_("li",[l._v("template")]),l._v(" "),_("li",[l._v("filename")]),l._v(" "),_("li",[l._v("minify")]),l._v(" "),_("li",[l._v("chunks")]),l._v(" "),_("li",[l._v("inject")]),l._v(" "),_("li",[l._v("favicon")])])]),l._v(" "),_("li",[l._v("html-loader\n"),_("ul",[_("li",[l._v("在 HTML 中引用图片")]),l._v(" "),_("li",[l._v("也可以直接在 src 中使用 "),_("code",[l._v("${require('...')}")]),l._v(" 来引用图片")])])])])]),l._v(" "),_("li",[l._v("提前载入 webpack 加载代码\n"),_("ul",[_("li",[l._v("inline-manifest-webpack-plugin")]),l._v(" "),_("li",[l._v("html-webpack-inline-chunk-plugin")])])]),l._v(" "),_("li",[l._v("搭建开发环境\n"),_("ul",[_("li",[l._v("webpack watch mode\n"),_("ul",[_("li",[l._v("webpack -w 启动")])])]),l._v(" "),_("li",[l._v("webpack-dev-server\n"),_("ul",[_("li",[l._v("live reoading")]),l._v(" "),_("li",[l._v("路径重定向")]),l._v(" "),_("li",[l._v("https")]),l._v(" "),_("li",[l._v("接口代理 proxy")]),l._v(" "),_("li",[l._v("模块热更新\n"),_("ul",[_("li",[l._v("hot:true")]),l._v(" "),_("li",[l._v("new webpack.HotModuleReplacementPlugin()")])])]),l._v(" "),_("li",[l._v("devServer 中配置各种参数")])])]),l._v(" "),_("li",[l._v("express + webpack-dev-middleware\n"),_("ul",[_("li",[l._v("更灵活")]),l._v(" "),_("li",[l._v("Express or Koa")]),l._v(" "),_("li",[l._v("webpack-dev-middleware")]),l._v(" "),_("li",[l._v("webpack-hot-middleware")]),l._v(" "),_("li",[l._v("http-proxy-middleware")]),l._v(" "),_("li",[l._v("connect-history-api-fallback")]),l._v(" "),_("li",[l._v("opn")])])]),l._v(" "),_("li",[l._v("Source Map 调试\n"),_("ul",[_("li",[l._v("将生成代码与原始代码形成映射，便于调试自己的代码")]),l._v(" "),_("li",[l._v("devtool 开发时通常使用 'cheap-module-eval-source-map'")]),l._v(" "),_("li",[l._v("css 需要在 options 中加上 sourceMap: true")])])])])]),l._v(" "),_("li",[l._v("EsLint 代码检查\n"),_("ul",[_("li",[l._v("eslint")]),l._v(" "),_("li",[l._v("eslint-loader")]),l._v(" "),_("li",[l._v("eslint-plugin-html")]),l._v(" "),_("li",[l._v("eslint-friendly-formatter")]),l._v(" "),_("li",[l._v(".eslintrc.js 文件设置规范")]),l._v(" "),_("li",[l._v("overlay: true")])])]),l._v(" "),_("li",[l._v("开发环境和生产环境\n"),_("ul",[_("li",[l._v("开发\n"),_("ul",[_("li",[l._v("模块热更新")]),l._v(" "),_("li",[l._v("SourceMap")]),l._v(" "),_("li",[l._v("接口代理")]),l._v(" "),_("li",[l._v("代码规范检查")])])]),l._v(" "),_("li",[l._v("生产\n"),_("ul",[_("li",[l._v("提取公用代码")]),l._v(" "),_("li",[l._v("压缩混淆")]),l._v(" "),_("li",[l._v("文件压缩、Base64编码")]),l._v(" "),_("li",[l._v("除去无用代码 Tree Shaking")])])]),l._v(" "),_("li",[l._v("共同点\n"),_("ul",[_("li",[l._v("同样的入口")]),l._v(" "),_("li",[l._v("同样的代码处理 loader")]),l._v(" "),_("li",[l._v("同样的解析配置")])])])]),l._v(" "),_("ul",[_("li",[l._v("怎么做\n"),_("ul",[_("li",[l._v("webpack-merge 合并配置")]),l._v(" "),_("li",[l._v("webpack.dev.config.js")]),l._v(" "),_("li",[l._v("webpack.prod.config.js")]),l._v(" "),_("li",[l._v("webpack.base.config.js")])])])])]),l._v(" "),_("li",[l._v("打包分析\n"),_("ul",[_("li",[l._v("offical analyse tool\n"),_("ul",[_("li",[l._v("stats.json")]),l._v(" "),_("li",[l._v("上传 http://webpack.github.io/analyse 可视化分析，建议")])])]),l._v(" "),_("li",[l._v("webpack-bundle-analyzer\n"),_("ul",[_("li",[l._v("插件 BundleAnalyzerPlugin")]),l._v(" "),_("li",[l._v("命令行 webpack-bundle-analyzer stats.json")]),l._v(" "),_("li",[l._v("vue-cli 中直接 npm run build --report 打包完成后直接生成分析")])])])])]),l._v(" "),_("li",[l._v("优化打包速度\n"),_("ul",[_("li",[l._v("原因\n"),_("ul",[_("li",[l._v("文件多")]),l._v(" "),_("li",[l._v("依赖多")]),l._v(" "),_("li",[l._v("loader 使用方式")])])]),l._v(" "),_("li",[l._v("分析\n"),_("ul",[_("li",[l._v("分开 vendor 和 app\n"),_("ul",[_("li",[l._v("DllPlugin")]),l._v(" "),_("li",[l._v("DllReferencePligin")])])]),l._v(" "),_("li",[l._v("UglifyJsPlugin 混淆\n"),_("ul",[_("li",[l._v("parallel: true 多线程处理")]),l._v(" "),_("li",[l._v("cache: true 利用缓存")])])]),l._v(" "),_("li",[l._v("happypack\n"),_("ul",[_("li",[l._v("loader 多线程")])])]),l._v(" "),_("li",[l._v("babel-loader\n"),_("ul",[_("li",[l._v("cacheDirectory")]),l._v(" "),_("li",[l._v("include")]),l._v(" "),_("li",[l._v("exclude")])])]),l._v(" "),_("li",[l._v("上线去除 SourceMap")])])])])]),l._v(" "),_("li",[l._v("长缓存优化\n"),_("ul",[_("li",[l._v("只改变 app 代码，vender 不变\n"),_("ul",[_("li",[l._v("提取 vender")]),l._v(" "),_("li",[l._v("hash -> chunkhash")]),l._v(" "),_("li",[l._v("提取 webpack runtime")]),l._v(" "),_("li",[l._v("引入新模块，vender hash 变化\n"),_("ul",[_("li",[l._v("NamedChunksPlugin")]),l._v(" "),_("li",[l._v("NamedModulesPlugin")])])]),l._v(" "),_("li",[l._v("动态进入模块，vender hash 变化\n"),_("ul",[_("li",[l._v("定义动态模块的 chunk name")])])])])])])]),l._v(" "),_("li",[l._v("多页应用\n"),_("ul",[_("li",[l._v("特点\n"),_("ul",[_("li",[l._v("多入口 entry")]),l._v(" "),_("li",[l._v("多页面 html")]),l._v(" "),_("li",[l._v("每个页面有不同的 chunk")]),l._v(" "),_("li",[l._v("每个页面有不同的参数")])])]),l._v(" "),_("li",[l._v("实现\n"),_("ul",[_("li",[l._v("多配置\n"),_("ul",[_("li",[l._v("parallel-webpack")]),l._v(" "),_("li",[l._v("webpack 3.0 之后支持")]),l._v(" "),_("li",[l._v("优点\n"),_("ul",[_("li",[l._v("利用 parallel-webpack 更快速")]),l._v(" "),_("li",[l._v("配置灵活，独立")])])]),l._v(" "),_("li",[l._v("缺点\n"),_("ul",[_("li",[l._v("不能多页面之间共享代码")])])])])]),l._v(" "),_("li",[l._v("单配置\n"),_("ul",[_("li",[l._v("优点\n"),_("ul",[_("li",[l._v("可以共享各个 entry 之间公用代码")])])]),l._v(" "),_("li",[l._v("缺点\n"),_("ul",[_("li",[l._v("把包慢")]),l._v(" "),_("li",[l._v("输出内容比较复杂")])])])])])])])])]),l._v(" "),_("li",[l._v("vue-cli 中 webpack 应用\n"),_("ul",[_("li",[l._v("模板类型\n"),_("ul",[_("li",[l._v("https://github.com/vuejs-templates")])])]),l._v(" "),_("li",[l._v("优化")])])]),l._v(" "),_("li",[l._v("webpack interview\n"),_("ul",[_("li",[l._v("webpack 与 grunt/gulp 不同？\n"),_("ul",[_("li",[l._v("相同点：都可以用于项目打包、文件压缩、文件监测等。")]),l._v(" "),_("li",[l._v("webpack 是一个模块打包器（module bundler），他可以递归的打包项目中的所有模块，最终生成几个打包好的文件。他支持 code-splitting(代码分割)、模块化(AMD,ESM,CommonJS)、全局模块化。主要侧重于模块的打包，适合于单页面的项目，开发中的所有资源（图片、js、css 等）都看成模块，通过 loader 和 plugins 对资源进行处理，打包成符合生产环境部署的前端资源。")]),l._v(" "),_("li",[l._v("grunt/gulp 是自动化构建工具（tast runner），就是用来代替手工执行机械重复的事情。侧重于前端开发的工作流程，通过配置一系列的task，定义执行顺序，从而构建项目的整个前端开发流程。")])])]),l._v(" "),_("li",[l._v("什么是 bundle，什么是 chunk，什么是 module？\n"),_("ul",[_("li",[l._v("bundle 是 webpack 打包出来的文件")]),l._v(" "),_("li",[l._v("chunk 是 webpack 在进行模块依赖分析时，代码分割出来的代码块，最终打包成 bundle")]),l._v(" "),_("li",[l._v("module 是开发中的单独模块")])])]),l._v(" "),_("li",[l._v("什么是 loader，什么是 plugin？\n"),_("ul",[_("li",[l._v("loader 是告诉 webpack 如何转化处理某一类型的文件，并且引入到打包出的文件中")]),l._v(" "),_("li",[l._v("plugin 是自定义 webpack 打包过程的方式，一个插件是包含 apply 方法的一个对象，通过这个方法可以参与到整个 webpack 打包的各个流程（真个生命周期）")])])]),l._v(" "),_("li",[l._v("webpack-dev-server 和 http 服务器 nigix 有是没区别？\n"),_("ul",[_("li",[l._v("webpack-dev-server(本质 express + webpack-dev-middleware) 使用内存来存储 webpack 开发环境下的打包文件，并且可以使用模块热更新，比传统的 http 服务对开发更简单高效")])])]),l._v(" "),_("li",[l._v("什么是长缓存，在 webpack 中如何做到长缓存优化？\n"),_("ul",[_("li",[l._v("浏览器在用户访问页面时，为了加快加载速度，会对用户访问的静态资源进行存储。但是每次更新、代码升级，都需要浏览器重新下载新的代码，最简单的更新方式就是引入新的文件名称。")]),l._v(" "),_("li",[l._v("在 webpack 中可以在 output 中给输出文件指定 filename 为 chunkhash")]),l._v(" "),_("li",[l._v("分类业务代码和框架代码（引入第三方模块、webpack runtime、等）")]),l._v(" "),_("li",[l._v("通过 NamedModulesPlugin 或 HashedModuleIdsPlugin 使得没有更新的业务代码文件名不变")])])])])]),l._v(" "),_("li",[l._v("webpack3 与 webpack4\n"),_("ul",[_("li",[l._v("新增 mode\n"),_("ul",[_("li",[l._v("production 默认开起了很多代码优化（minify, splite）")]),l._v(" "),_("li",[l._v("development")]),l._v(" "),_("li",[l._v("none 取消所有默认设置")])])]),l._v(" "),_("li",[l._v("移除 CommonsChunkPlugin，变更为 optimization.splitChunks，optimization.runtimeChunk")]),l._v(" "),_("li",[l._v("ExtractTextWebpackPlugin 调整，建议使用新的 CSS 提取插件 mini-css-extract-plugin")]),l._v(" "),_("li",[l._v("支持 ES 6的方式导入 JSON 文件")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);