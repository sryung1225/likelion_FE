
/* readyState
  0: uninitalized // 초기화
  1: loading // 로딩
  2: loaded // 로딩이 완료된
  3:interative // 인터렉티브
  4:complete // 완료
*/


// xhrData 함수 만들기 method, url
export function xhrData({
  url = "",
  method = "GET",
  body = null,
  onSuccess = null,
  headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  }
} = {}){
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  // console.log(xhr); // ? XMLHttpRequest {onreadystatechange: null, readyState: 1, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, …}

  // headers에 여러가지 넣을 경우를 대비하는 것... 이지만 오류 날까봐 나중에 이어하기로해서 주석처리
  // Object.entries(headers).forEach(([key, value]) => {
  //   xhr.setRequestHeader(key, value);
  // });

  xhr.addEventListener("readystatechange", () => {
    const {status, readyState, response} = xhr; // 객체 구조 분해 할당
    if(status >= 200 && status < 400){
      if(readyState === 4){
        console.log("통신 성공");
        onSuccess(JSON.parse(response));
      }
    } else {
      onFail("통신 실패");
    }
  })
  xhr.send(JSON.stringify(body));
}

xhrData.get = (url, onSuccess, onFail) => {
  xhrData({
    url,
    onSuccess,
    onFail
  })
}
xhrData.post = (url, body, onSuccess, onFail) => {
  xhrData({
    method: "POST",
    url,
    body,
    onSuccess,
    onFail
  })
}
xhrData.put = (body, url, onSuccess, onFail) => {
  xhrData({
    method: "PUT",
    body,
    url,
    onSuccess,
    onFail
  })
}
xhrData.delete = (body, url, onSuccess, onFail) => {
  xhrData({
    method: "DELETE",
    body,
    url,
    onSuccess,
    onFail
  })
}

// xhrData.get(
//   "https://jsonplaceholder.typicode.com/users",
//   (result) => {
//     console.log(result);
//   },
//   (err) => {
//     console.error(err);
//   }
// )



// promise API

const defaultOptions = {
  url: "",
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: null
}

export function xhrPromise(options = {}){
  const xhr = new XMLHttpRequest();
  const {method, url, body, headers} = Object.assign({}, defaultOptions, options);
  // const {method, url, body, headers} = {...defaultOptions, ...options}; // 도 위와 동일 (깊복 방법)
  
  if(!url) typeError("서버와 통신할 url 인자는 반드시 필요합니다."); // url 미지정 알럿 용도 조건
  xhr.open(method, url);
  xhr.send(body ? JSON.stringify(body) : null); // 기본값 자체가 null이지만 혹시나 하는 방어용 조건문 사용

  return new Promise((resolve,reject) => {
    xhr.addEventListener("readystatechange",() => {
      const {status, readyState, response} = xhr;

      if(status >=200 && status < 400) {
        if(readyState === 4){
          resolve(JSON.parse(response));
        }
      } else reject("에러입니다.");
    })
  })
}

xhrPromise.get = (url) => {
  return xhrPromise({
    url
  })
};
xhrPromise.post = (url, body) => {
  return xhrPromise({
    url,
    body,
    method:"POST"
  })
}
xhrPromise.put = (url, body) => {
  return xhrPromise({
    url,
    body,
    method:"PUT"
  })
}
xhrPromise.delete = (url) => {
  return xhrPromise({
    url,
    method:"DELETE"
  })
}

// xhrPromise
// .get("https://jsonplaceholder.typicode.com/users/1")
// .then((res) => {
//   insertLast("body", JSON.stringify(res));
// })
// .catch((err) => {
//   insertLast("body", "데이터 로딩에 실패했습니다.");
// });