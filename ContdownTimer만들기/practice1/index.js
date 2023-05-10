const subTitle = document.querySelector('.subtitle');
const timerTime = document.querySelectorAll('.timer__time');

const weekdays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const dDay = { year: 2023, month: 5, day: 10, hour: 12, min: 30, sec: 0 }

const renderDDay = function (dDay) {
  const futureDate = new Date(...Object.values(dDay));
  const year = futureDate.getFullYear();
  const month = months[futureDate.getMonth()];
  const date = futureDate.getDate();
  const day = weekdays[futureDate.getDay()];
  const hour = futureDate.getHours();
  const min = futureDate.getMinutes();

  const markup = `
    Giveaway Ends On ${day}, ${date} ${month} ${year} ${hour}:${min}${min < 12 ? 'am' : 'pm'}
  `;

  subTitle.innerHTML = '';
  subTitle.insertAdjacentHTML('afterbegin', markup);
}

const renderCountdownTime = function (countdownTime) {
  const times = Object.values(countdownTime);

  timerTime.forEach((timeEl, i) => {
    const timerNum = timeEl.querySelector('.timer__number');

    timerNum.textContent = times[i] > 0 ? times[i] : 0;
  })
}

const calcCountdownTime = function (dDay) {
  const { year, month, day, hour, min, sec } = dDay;
  const futureTime = new Date(year, month, day, hour, min, sec);
  const currentTime = new Date();

  const diff = futureTime - currentTime;

  const oneSecond = 1000;
  const oneMinute = oneSecond * 60;
  const oneHour = oneMinute * 60;
  const oneDay = oneHour * 24;

  return {
    days: Math.trunc(diff / oneDay),
    hours: Math.trunc(diff % oneDay / oneHour),
    mins: Math.trunc(diff % oneHour / oneMinute),
    secs: Math.trunc(diff % oneMinute / oneSecond),
  }
}

const init = function () {
  renderDDay(dDay);

  const timer = setInterval(function () {
    const countdownTime = calcCountdownTime(dDay);
    renderCountdownTime(countdownTime);

    if (Object.values(countdownTime).every(time => time <= 0)) clearInterval(timer);
  }, 1000);
}
init();
