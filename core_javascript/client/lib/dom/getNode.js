// node 한개 탐색
function getNode(node) {
  if(typeof node !== "string"){
    throw new Error("getNode 함수의 인자는 문자 타입 이여야 합니다.");
  }
  return document.querySelector(node);
}

// node 다수 탐색
function getNodes(node) {
  if(typeof node !== "string"){
    throw new Error("getNode 함수의 인자는 문자 타입 이여야 합니다.");
  }
  return document.querySelectorAll(node);
}