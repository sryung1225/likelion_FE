## 1

Q. `h3` 태그를 사용해 자기소개를 해보세요!

A.
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>코드라이언 퀴즈</title>
</head>
<body>
    <!-- 이 문구 아래에 정답을 써주세요! -->
    <h3>안녕하세요! 이성령입니다 ㅎㅎ</h3>
</body>
</html>
```

## 2

Q. HTML 문서에 '멋쟁이 사자처럼' 이라는 텍스트가 있습니다. 이 요소는 lion이라는 클래스를 가지고 있어요.

이 요소에 다음과 같이 스타일을 적용 해 주세요!

- 폰트 색상 : orange
- 폰트 크기 : 30px
- 폰트 굵기 : 600

A.
```css
/* codelion.css 파일입니다. 이 문구 아래에 답안을 작성해주세요. */
.lion {
    color: orange;
    font-size: 30px;
    font-weight: 600;
}
```

## 3

Q. 다음과 같은 html문서가 있습니다.
```html
<div class="float-wrap">
    <p class="left-item"> left </p>
    <p class="right-item"> right </p>
</div>
<h1 class="item"> item </h1>
```
두개의 p 태그가 각각 왼쪽,오른쪽 정렬되도록 알맞은 속성을 css로 작성 해 보세요.

p 태그를 감싸고 있는 div 태그에 알맞은 css 속성을 작성하여 h1 태그와 p 태그가 겹치지 않게 해보세요.

A.
```css
/* codelion.css 파일입니다. 알맞은 css 코드를 채워보세요. */

.float-wrap {
    overflow: hidden;
}

.left-item {
    float: left;
}

.right-item {
    float: right;
}
```

## 4

Q. div 태그로 작성된 박스가 하나 있습니다. 이 요소는 html 문서에서 유일한 div 태그에요!

이 요소에 다음과 같이 스타일을 적용 해 주세요!

- 요소 바깥 왼쪽 여백 : 20px
- 요소 안쪽 오른쪽 여백 : 30px
- 배경색 : #ff0000
- 테두리 : 3px,실선,black

A.
```css
/* codelion.css 파일입니다. 알맞은 css 코드를 채워보세요. */

div {
    margin-left: 20px;
    padding-right: 30px;
    background-color: #ff0000;
    border: 3px solid black;
}
```

