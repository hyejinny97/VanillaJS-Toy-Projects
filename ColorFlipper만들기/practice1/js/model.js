const state = {
  type: 'simple',
  color: 'yellow'
}

const randomNumber = function (minVal, maxVal) {
  return Math.trunc(Math.random() * (maxVal - minVal + 1)) + minVal;
}

const changeType = function (type) {
  state.type = type;
}

const changeColor = function () {
  let change;
  switch (state.type) {
    case 'simple':
      const list = ['yellow', '#112233', 'rgb(100, 150, 200)', 'pink', '#ABC']
      change = randomNumber.bind(undefined, 0, list.length - 1);
      state.color = list[change()];
      break
    case 'rgb':
      change = randomNumber.bind(undefined, 0, 255);
      state.color = `rgb(${change()}, ${change()}, ${change()})`
      break
    case 'hexa':
      const digits = '0123456789ABCDEF';
      change = randomNumber.bind(undefined, 0, 15);
      state.color = `#${[...new Array(6)].reduce(acc => acc + digits[change()], '')}`
  }
}

export { state, changeType, changeColor }