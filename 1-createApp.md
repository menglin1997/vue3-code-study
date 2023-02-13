---
theme: channing-cyan
---
## 前言
> 本文主要介绍vue3源码中createApp模块
作者根据mini-vue学习的vue3源码。mini-vue介绍:只会涉及到核心逻辑，去除非核心逻辑，让代码更具备可读性，可以更好的理解。

vue3源码地址 https://github.com/vuejs/core
mini-vue源码地址 https://github.com/cuixiaorui/mini-vue.git

先看一段代码
````vue
// 先导入createApp模块
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');
````

分析:
上方代码我们可以看出,在Vue3 中，通过使用 createApp 函数来创建应用，使用vue库的createApp方法传入基组件生成vm，然后再调用vm的mount方法传入选择器将实例挂载在dom节点上

我们打开vue3源码，在编辑器中搜索createApp可以看到下边的代码:
````
// packages/runtime-dom/src/index.ts
export const createApp = ((...args) => {
  const app = ensureRenderer().createApp(...args)
  ...
  const { mount } = app
  app.mount = (containerOrSelector: Element | ShadowRoot | string): any => {
   ...
  }
  return app
}) as CreateAppFunction<Element>

````
上方代码是精简之后的代码 我们先看这些其他的暂时不用管是什么意思


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0201f97ffa1c40d2808d74f9d346cc71~tplv-k3u1fbpfcp-watermark.image?)
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0576f49228b14c31b939dba4c86f62a6~tplv-k3u1fbpfcp-watermark.image?)
从上述源码中我们可以了解到，`render`参数是一个`Function`类型，接收两个参数，一个是`VNode`虚拟dom，一个是`container`真实的dom元素，由此我们可以预想，`render`的作用是：**将虚拟dom渲染到真实的dom中**

### 1. app

-   uid：用于标识组件唯一id
-   _component：存放当前组件通过编译后的数据
-   _props：当前组件接受的参数
-   _container：当前组件对应的要渲染的真实dom位置
-   _context：当前组件上下文对象，其中包含config，app等
-   _instance：当前组件实例对象
-   config: 配置信息，也就是 context中的config信息，存放一些全局信息
-   installedPlugins：用来保存安装过的插件，使用`Set`代替了之前的`数组`，有效避免了重复安装
-   use：用来注册插件
-   mixin：用来混入全局数据
-   component：用于注册组件
-   mount：执行挂载操作
-   provide：为子组件提供可用参数 接下来让我们一个个分析其详细实现。

  ### `mount` 该API是最重要的 
该方法传入三个参数，但是我们只讲第一个参数`rootContainer`，该参数值是一个真实**dom元素**，但是我们在使用时只是传入一个id`app.mount('#app')`，而获取**dom**的过程则是在编译器`compiler`中完成。因此我们打印参数**rootContainer**的值并不是`#app`，而是一个真实的**dom元素**。  
该方法内部，主要执行了两个API，先通过`createVNode`将我们的根组件`App`转换成`VNode`，然后执行`render`将虚拟dom渲染为真实dom。  
`createVNode`和`VNode`的具体实现将在后续文章中专门讲解，在此不做详细解释。
### 总结
到此，我们的`createApp`从构建到执行，到组件挂载全部执行完毕。大致过程如下:

> 生成render−>createAppAPI−>createApp−>初始化并构建app−>执行app.mount−>createVNode−>render生成render -> createAppAPI -> createApp ->初始化并构建app -> 执行app.mount -> createVNode -> render生成render−>createAppAPI−>createApp−>初始化并构建app−>执行app.mount−>createVNode−>render 由此，我们的页面就会展现到浏览器中。\

菜鸟认知,请多指教。