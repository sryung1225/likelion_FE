// get
function getAttr(node, prop){
  if(typeof node == "string") node = getNode(node);
  return node.getAttribute(prop);
}

// set
function setAttr(node, prop, value){
  // validation : 확인
  if(typeof node == "string") node = getNode(node);
  if(typeof prop != "string") throw new TypeError("setAttr 함수의 두 번째 인자는 string이여야 합니다.");
  if(prop.includes("data")) node.dataset[prop.slice(5)] = value; // 고도화
  if(!value) throw new SyntaxError("setAttr 함수의 세 번째 인자는 필수값입니다.");
  
  node.setAttribute(prop, value);
  // return하지 않는 이유는? set만 하고 값을 내는 것이 아니기 때문
}

// get_set 모두 갖고 있는 attr
function attr(node, prop, value){
  return !value ? getAttr(node, prop) : setAttr(node, prop, value);
}
// const attr = (node, prop, value) => !value ? getAttr(node, prop) : setAttr(node, prop, value);