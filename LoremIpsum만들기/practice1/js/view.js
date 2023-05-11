const paraForm = document.querySelector('.paragraph-form');
const paragraphEl = document.querySelector('.paragraph');

const renderParagraph = function (paragraphs) {
  const markup = paragraphs.map(para => {
    return `
      <p>${para}</p>
      <div class='empty-box'></div>
    `;
  }).join('');

  paragraphEl.innerHTML = '';
  paragraphEl.insertAdjacentHTML('afterbegin', markup);
}

const addHandlerParagraph = function (handler) {
  paraForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const num = +new FormData(this).get('paragraph-num');

    handler(num);
  })
}

export { renderParagraph, addHandlerParagraph }