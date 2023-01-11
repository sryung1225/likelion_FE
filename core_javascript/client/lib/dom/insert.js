// insertBefore : beforebegin
function insertBefore(node, text){
  if(typeof node == "string") node = getNode(node);
  if(node.nodeType !== document.ELEMENT_NODE){ // 작성 순서 유의. 위에서 string->node 우선 해줘야 함
    throw new TypeError("insertBefore 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.");
  }
  node.insertAdjacentHTML("beforebegin", text);
}

// insertFirst : afterbegin
function insertFirst(node, text){
  if(typeof node == "string") node = getNode(node);
  if(node.nodeType !== document.ELEMENT_NODE) TypeError("insertFirst 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.");
  node.insertAdjacentHTML("afterbegin", text);
}

// insertLast : beforeened
function insertLast(node, text){
  if(typeof node == "string") node = getNode(node);
  if(node.nodeType !== document.ELEMENT_NODE) TypeError("insertLast 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.");
  node.insertAdjacentHTML("beforeend", text);
}

// insertAfter : afterend
function insertAfter(node, text){
  if(typeof node == "string") node = getNode(node);
  if(node.nodeType !== document.ELEMENT_NODE) TypeError("insertAfter 함수의 첫 번째 인자는 ELEMENT 노드여야 합니다.");
  node.insertAdjacentHTML("afterend", text);
}