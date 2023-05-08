const sidebar = document.querySelector('.sidebar')
const burgerBtn = document.querySelector('.burger-btn');
const closeBtn = document.querySelector('.close-btn');

const handleSidebarShow = function () {
  burgerBtn.addEventListener('click', function () {
    console.log('버거버튼 클릭');
    sidebar.classList.add('show');
  })
}

const handleSidebarHidden = function () {
  closeBtn.addEventListener('click', function () {
    console.log('닫기버튼 클릭');
    sidebar.classList.remove('show');
  })
}

const init = function () {
  handleSidebarShow();
  handleSidebarHidden();
}
init();