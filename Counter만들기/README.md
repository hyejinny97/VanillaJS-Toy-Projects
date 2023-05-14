# ✔ Counter 만들기

-   개요: 숫자를 증가/감소/리셋하는 카운터를 만드는 프로젝트
-   주요 개념: `document.querySelectorAll()`, `forEach()`, `addEventListener()`, `currentTarget 속성`, `classList`, `textContent`

## 🎨 FlowChart & Architecture

[](https://app.diagrams.net/?src=about#G1XRrYvlgHq6YHEeFwcgUxsnfS24I-8-GW)

### ▶ FlowChart

![](./image/flowchart.PNG)

### ▶ Architecture

![](./image/architecture.PNG)

## 🧩 실습 결과물

![](../gif/Counter_practice1.gif)

## 💡 후기

### ▶ 튜토리얼 vs 나의 코드

> 튜토리얼

-   increase/decrease/reset 버튼 각각에 event listener를 달아주었다
-   세 버튼 각각의 class를 통해 increase인지 decrease인지 reset 버튼인지 구분했다
-   양수/음수/0에 따라 숫자의 색을 바꿔줄 때, inline-style을 사용해 바꿔주었다

> 나의 코드

-   event bubbling을 활용해서 세 버튼을 담고 있는 컨테이너 하나에 event listener를 달아주었다
-   세 버튼 각각의 dataset을 통해 increase인지 decrease인지 reset 버튼인지 구분했다
-   양수/음수/0에 따라 숫자의 색을 바꿔줄 때, class을 사용해 바꿔주었다
