import { createElement,
  createText,
  setText,
  setElementText,
  patchProp,
  insert,
  remove, } from './runtime-dom.js'
  
function getShapeFlag(type) {
    return typeof type === "string"
        ? 1
        : 4;
}
// 该函数中初始化了一些数据，并且对传入的组件做了一些处理，如果传入的组件已经是一个虚拟dom，则直接对其克隆并返回，同时也对异步组件做了兼容处理，同时确定了shapeFlag属性,该属性标识了该VNode的类型（ELEMENT | SUSPENSE | TELEPORT），
// 版权声明：本文为CSDN博主「石头山_S」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/SK_study/article/details/124974479
export const createVNode = (type,props,children) => {
  console.log(type,props,children);
  const vnode = {
    el:null,
    component: null,
    key: props?.key,
    type,
    props: props || {},
    children,
    shapeFlag: getShapeFlag(type),
  }
  return vnode
}
function createAppAPI(render) {
  return function createApp(rootComponent) {
    const app = {
      mount(rootContainer) {
        console.log('基于根组件创建 vnode')
        const vnode = createVNode(rootComponent);
        console.log(vnode,'rootContainer')
        render(vnode, rootContainer);
      }
    }
    return app
  }
}
function createRenderer(options) {
  const render = (vnode, container) => {
    const el = createElement('h1')
    setElementText(el,'Hello World!')
    insert(el,container,null)
  };
  return {
    createApp: createAppAPI(render)
  }
}
export function createApp(...args) {
  return createRenderer({
    createElement,
    createText,
    setText,
    setElementText,
    patchProp,
    insert,
    remove,
}).createApp(...args)
}
