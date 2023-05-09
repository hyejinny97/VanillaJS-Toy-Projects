const video = document.querySelector('.video');
const toggleInput = document.querySelector('#play');

const playVideo = () => video.play();

const pauseVideo = () => video.pause();

const addHandlerPlay = function (handler) {
  toggleInput.addEventListener('click', function (e) {
    handler(e.currentTarget.checked);
  })
}

export { playVideo, pauseVideo, addHandlerPlay }