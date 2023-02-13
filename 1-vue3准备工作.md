---
theme: channing-cyan
---
> 作者根据mini-vue学习的vue3源码。mini-vue介绍:只会涉及到核心逻辑，去除非核心逻辑，让代码更具备可读性，可以更好的理解。

vue3源码地址 https://github.com/vuejs/core
mini-vue源码地址 https://github.com/cuixiaorui/mini-vue.git

## 下载源码
````
git clone https://github.com/vuejs/core
````

## 装包
````
yarn
````
## 了解源码位置
> Vue 3和核心源码都在packages里面，并且是基于RollUp构建，其中每个目录代表的含义，如下所示：

├── packages              
│   ├── compiler-core    // 核心编译器（平台无关）
│   ├── compiler-dom     // dom编译器
│   ├── compiler-sfc     // vue单文件编译器
│   ├── compiler-ssr     // 服务端渲染编译
│   ├── global.d.ts      // typescript声明文件
│   ├── reactivity       // 响应式模块，可以与任何框架配合使用
│   ├── runtime-core     // 运行时核心实例相关代码（平台无关）
│   ├── runtime-dom      // 运行时dom 关api，属性，事件处理
│   ├── runtime-test     // 运行时测试相关代码
│   ├── server-renderer   // 服务端渲染
│   ├── sfc-playground    // 单文件组件在线调试器
│   ├── shared             // 内部工具库,不对外暴露API
│   ├── size-check          // 简单应用，用来测试代码体积
│   ├── template-explorer  // 用于调试编译器输出的开发工具
│   └── vue                 // 面向公众的完整版本, 包含运行时和编译器

## compiler和runtime区别

### compile
我们可以理解为程序编绎时，是指我们写好的源代码在被编译成为目标文件这段时间，可以通俗的看成是我们写好的源代码在被构建工具转换成为最终可执行的文件这段时间，在这里可以理解为我们将.vue文件编绎成浏览器能识别的.js文件的一些工作。
### runtime
我们可以理解为程序运行时，即是程序被编译了之后，在浏览器打开程序并运行它直到程序关闭的这段时间的系列处理。

> 菜鸟认知，请多指教。

下一篇，我们正式进入源码的学习。