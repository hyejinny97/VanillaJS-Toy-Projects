# ✔ Sidebar 만들기

-   개요: burger 버튼을 클릭하면 사이드바가 나타나게 하는 프로젝트
-   주요 개념: `document.querySelector()`, `addEventListener()`, `classList.toggle()`, `classList.remove()`

## 🧩 실습 결과물

![](../gif/sidebar_practice1.gif)

## 💡 후기

### ▶ 튜토리얼 vs 나의 코드

> 튜토리얼

-   sidebar 요소를 `left:0`으로 맞춰준 상태에서 `translateX(-100%)`을 통해 화면에 안보이게 했다가 버튼을 클릭하면 `translateX(0)`으로 나타나게 했다

> 나의 코드

-   sidebar 요소를 처음부터 `left:-50%`으로 맞춰 화면에서 안보이게 했다가 버튼을 클릭하면 `left:0`으로 나타나게 했다
