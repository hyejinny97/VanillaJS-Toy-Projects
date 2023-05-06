const state = {
  count: 0
}

const updateCount = function (update) {
  switch (update) {
    case 'increase':
      state.count += 1
      break
    case 'decrease':
      state.count -= 1
      break
    case 'reset':
      state.count = 0
      break
  }
}

export { state, updateCount }