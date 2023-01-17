
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