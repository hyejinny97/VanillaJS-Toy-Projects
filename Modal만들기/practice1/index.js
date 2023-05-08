const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const handleModal = function () {
  [openModalBtn, closeModalBtn].forEach(btnEl => btnEl.addEventListener('click', () => {
    overlay.classList.toggle('hidden');
    modal.classList.toggle('hidden');
  }))
}

handleModal();