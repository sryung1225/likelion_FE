
const defaultOptions = {
  method: 'GET',
  mode: 'cors',
  body:null,
  cache: 'no-cache',
  credential: 'same-origin',
  redirect:'follow',
  referrerPlicy:'no-reffere',
  headers:{
    'Content-Type':'application/json; charset=UTF-8'
  }
}

const eve = async (options = {}) => {
  const {url, ...restOptions} = {
    ...defaultOptions,
    ...options,
    headers: {...defaultOptions.headers, ...options.headers} // 깊은 복사
  }
  // console.log(restOptions); // ? {method: 'GET', mode: 'cors', body: null, cache: 'no-cache', credential: 'same-origin', …}

  let response = await fetch(url, restOptions);

  if(response.ok){
    response.data = await response.json();
  }
  // console.log(response);
  return response;
}
eve.get = (url, options) => {
  eve({
    url,
    ...options // 받는 options가 객체이기 때문에 펼쳐서 받음
  })
}
eve.post = (url, body, options) => {
  eve({
    method: "POST",
    url,
    body: JSON.stringify(body),
    ...options
  })
}
eve.put = (url, body, options) => {
  eve({
    method: "PUT",
    url,
    body: JSON.stringify(body),
    ...options
  })
}
eve.delete = (url, options) => {
  eve({
    method: "DELETE",
    url,
    ...options
  })
}

eve.post("https://jsonplaceholder.typicode.com/users/1", {name: "ryung"}, {mode: "cors", headers: {}});