const tabBody = document.querySelector('.main__tab-body');
const tabBtnList = document.querySelector('.main__tab-btn-list');
const tabBtns = tabBtnList.querySelectorAll('.main__tab-btn');

const renderTabBody = function (data) {
  const markup = `
    <h4 class="main__tab-title">${data.title}</h4>
    <p class="main__tab-content">${data.content}</p>
  `
  tabBody.innerHTML = '';
  tabBody.insertAdjacentHTML('afterbegin', markup);
}

const activeTabBtn = function (tabBtn) {
  tabBtns.forEach(btn => {
    btn.classList.remove('main__tab-btn--active');
  })

  tabBtn.classList.add('main__tab-btn--active');
}

const addHandlerTab = function (handler) {
  tabBtnList.addEventListener('click', function (e) {
    const tabBtn = e.target.closest('.main__tab-btn');
    if (!tabBtn) return

    activeTabBtn(tabBtn);
    handler(tabBtn.dataset.tab);
  })
}

export { renderTabBody, addHandlerTab }