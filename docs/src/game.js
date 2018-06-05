const game = {
  option: '',
  totalScore: 0,
  arrayOptions: ['', '', '', '', '', '', '', '', ''],
  won: false
}

let addOption = function (position) {
  changeChar()
  game.totalScore += 1
  game.arrayOptions.splice(position, 1, game.option)
  checkAllEquals()
}

let changeChar = function () {
  if (game.totalScore % 2 === 0) {
    game.option = 'x'
  } else {
    game.option = 'o'
  }
}

let checkAllEquals = function () {
  checkEqual(0, 1, 2, game.option)
  checkEqual(3, 4, 5, game.option)
  checkEqual(6, 7, 8, game.option)
  checkEqual(0, 3, 6, game.option)
  checkEqual(1, 4, 7, game.option)
  checkEqual(2, 5, 8, game.option)
  checkEqual(2, 4, 6, game.option)
  checkEqual(0, 4, 8, game.option)
}

let checkEqual = function (a, b, c, option) {
  if (game.arrayOptions[a] == option && game.arrayOptions[b] == option && game.arrayOptions[c] == option) {
      return game.won = true
  }
}

const resetValues = function () {
  game.option = ''
  game.totalScore = 0
  game.arrayOptions = ['', '', '', '', '', '', '', '', '']
  game.won = false
  }
