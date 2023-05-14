# ✔ Color Flipper 만들기

-   개요: 랜덤으로 배경색을 변경하는 프로젝트
-   주요 개념: arrays, `array.length`, `document.getElementById()`, `document.querySelector()`, `addEventListener()`, `document.body.style.backgroundColor`, `Math.floor()`, `Math.random()`

## 🎨 FlowChart & Architecture

[](https://app.diagrams.net/?src=about#G14zG424pGA1HCJLosJGQvrHqCUB3w3XJe)

### ▶ FlowChart

![](./image/flowchart2.PNG)

### ▶ Architecture

![](./image/architecture2.PNG)

## 🧩 실습 결과물

![](../gif/1.ColorFlipper_practice1.gif)

## 💡 후기

### ▶ 튜토리얼 vs 나의 코드

> 튜토리얼

-   simple 타입일 때와 hex 타입일 때 각각 html 파일과 js 파일을 두었다
-   randomNumber() 함수가 두 js 파일에 중복되어 존재하는 것을 볼 수 있다
-   hexa 타입에서 6개의 randomNumber를 선택할 때 for문을 사용하였다

> 나의 코드

-   html 파일 하나와 model/view/controller 3개의 js 모듈 파일을 두었다
-   simple/hexa/rgb 타입에 대한 state를 기록하였다
-   현재의 타입에 따라 다르게 randomNumber를 선택하였다
-   bind method를 사용해 타입에 따라 서로 다른 partial application을 만들어주었다
-   text와 color를 render하는 코드를 따로 함수화해 재사용 가능하게 했다
