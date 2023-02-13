// 创建元素
export function createElement(type) {
  console.log("CreateElement", type);
  const element = document.createElement(type);
  return element;
}
export function createText(text) {

}
export function setText(node, text) {
}
export function setElementText(el, text) {
  el.textContent = text;
}
export function patchProp(el, key, preValue, nextValue) {

}
export function insert(child, parent, anchor = null) {
  console.log("Insert",child, parent, anchor );
  parent.insertBefore(child, anchor);
}
export function remove(child) {

}