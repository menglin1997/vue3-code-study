---
theme: channing-cyan
---
> 本文将介绍vue源码的目录结构以及怎么进行vue3代码的调试

vue3源码地址 https://github.com/vuejs/core

## 下载代码
````
git clone https://github.com/vuejs/core.git
````

## 装包
````
yarn
````
## 目录结构
> Vue 3核心源码都在packages里面，并且是基于RollUp构建，其中每个目录代表的含义，如下所示：

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
程序编绎时，是指我们写好的源代码在被编译成为目标文件这段时间，可以通俗的看成是我们写好的源代码在被构建工具转换成为最终可执行的文件这段时间，在这里可以理解为我们将.vue文件编绎成浏览器能识别的.js文件的一些工作。
### runtime
我们可以理解为程序运行时，即是程序被编译了之后，在浏览器打开程序并运行它直到程序关闭的这段时间的系列处理。

## 调试源代码
### 启用source map
打开`package.json`文件，dev脚本中添加`--sourcemap`配置,如下
````
"dev": "node scripts/dev.js --sourcemap"
````
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eef987d90ff64204bc70fc0c1e562b40~tplv-k3u1fbpfcp-watermark.image?)

### 本地启动
- 在vue根目录下执行`yarn dev`启动vue
- 
> 菜鸟认知，请多指教。

下一篇，我们正式进入源码的学习。