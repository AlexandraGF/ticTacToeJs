const checkGameTurn = function () {
    if (game.option === 'x') {
      document.getElementById('turn').innerHTML = 'X\'s turn'
    } else {
      document.getElementById('turn').innerHTML = 'O\'s turn'
    }
  }

  const displayWinner = function () {
    if (game.won === true) {
      document.getElementById('endGame').innerHTML = `${game.option} won`
      document.getElementById('turn').innerHTML = ' '
    }
  }

  const noWinner = function () {
    if (game.totalScore === 9 && game.won == false) {
      document.getElementById('noWinner').innerHTML = 'No Winner. Play again!'
      document.getElementById('turn').innerHTML = ' '
    }
  }

  let checkGameWon = function (position) {
    if (game.arrayOptions[position] == '') {
      if (game.won === false) {
        checkGameTurn()
        addOption(position)
        let number = `b${(position+1).toString()}`
        document.getElementById(number).innerHTML = game.option
        displayWinner()
      } else if (game.won === true) {
        alert('Game Over. Start again!')
      }
      noWinner()
    }
  }

  const b1 = function () {
    checkGameWon(0)
  }

  const b2 = function () {
    checkGameWon(1)
  }

  const b3 = function () {
    checkGameWon(2)
  }

  const b4 = function () {
    checkGameWon(3)
  }

  const b5 = function () {
    checkGameWon(4)
  }

  const b6 = function () {
    checkGameWon(5)
  }

  const b7 = function () {
    checkGameWon(6)
  }

  const b8 = function () {
    checkGameWon(7)
  }

  const b9 = function () {
    checkGameWon(8)
  }

  const resetAll = function () {
    resetValues()
    document.getElementById('b1').innerHTML = ' '
    document.getElementById('b2').innerHTML = ' '
    document.getElementById('b3').innerHTML = ' '
    document.getElementById('b4').innerHTML = ' '
    document.getElementById('b5').innerHTML = ' '
    document.getElementById('b6').innerHTML = ' '
    document.getElementById('b7').innerHTML = ' '
    document.getElementById('b8').innerHTML = ' '
    document.getElementById('b9').innerHTML = ' '
    document.getElementById('turn').innerHTML = 'Good Luck!'
    document.getElementById('endGame').innerHTML = ' '
    document.getElementById('noWinner').innerHTML = ' '
  }
