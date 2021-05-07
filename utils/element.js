export function createElement(tagName, { children, ...props } = {}) {
  const element = document.createElement(tagName);
  Object.assign(element, props);
  if (children) {
    element.append(...children);
  }
  return element;
}

export function removeAllChildren(element) {
  element.innerHTML = '';
}
