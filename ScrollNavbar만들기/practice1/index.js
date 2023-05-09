const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
  if (window.scrollY > 5 * 16) header.classList.add('header--sticky');
  else header.classList.remove('header--sticky');
})