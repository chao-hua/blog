# Vue 源码分析-源码目录

Vue.js 的源码都在 src 目录下，其目录结构如下：

```
src
├── compiler            # 编译相关 
├── core                # 核心代码 
│   ├── components      # 内置组件
│   ├── global-api      # 全局 API
│   ├── instance        # Vue 实例化
│   ├── observer        # 观察者，双向数据绑定
│   ├── util            # 工具函数
│   ├── vdom            # 虚拟 DOM
├── platforms           # 不同平台的支持
│   ├── web             # web 平台
│   ├── weex            # weex 平台
├── server              # 服务端渲染
├── sfc                 # .vue 文件解析
├── shared              # 共享代码（常量、工具方法）
```