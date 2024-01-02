document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') {
    play_game('rock')
  }else if(event.key === 'p'){
    play_game('paper')
  }else if(event.key === 's') {
    play_game('scissors')
  }
})



let score = JSON.parse(localStorage.getItem('score')) || {
  wins : 0,
  losses : 0,
  ties : 0
}

updateScoreElement()

function cType(randomNumber) {
  if ((randomNumber > 0) && (randomNumber < 1/3)) {
    computerMove = 'rock';
  } else if ((randomNumber >= 1/3) && (randomNumber < 2/3)) {
    computerMove = 'paper';
  } else {
    computerMove = 'scissors';
  }
  return computerMove
}

function test(myMove, cMove) {
  let result = '';
  if (myMove === 'rock') {
    if (cMove === 'rock') {
      return 'tie';
    }else if(cMove === 'paper') {
      return 'lose';
    } else {
      return 'win';
    }
  } else if(myMove === 'paper') {
    if (cMove === 'rock') {
      return 'win';
    }else if(cMove === 'paper') {
      return 'tie';
    } else {
      return 'lose';
    }
  } else if(myMove === 'scissors') {
    if (cMove === 'rock') {
      return 'lose';
    }else if(cMove === 'paper') {
      return 'win';
    } else {
      return 'tie';
    }
  }
}

function play_game(myMove) {
  cMove = cType(Math.random())
  result = test(myMove, cMove)

  if (result === 'win') {
    score.wins += 1
  } else if(result === 'lose') {
    score.losses += 1
  } else if(result === 'tie') {
    score.ties += 1
  }

  document.querySelector('.js-result')
    .innerHTML = 'You ' + result

  document.querySelector('.js-move')
    .innerHTML = `You <img src="images/${myMove}-emoji.png" class="move-icon"> <img src="images/${cMove}-emoji.png" class="move-icon"> Computer`

  // local store needs to convert to string first
  localStorage.setItem('score', JSON.stringify(score))

  updateScoreElement(

  )

}

let isAutoPlay = false
let intervalId

function auto_play() {
  if (!isAutoPlay) {
    intervalId = setInterval(function() {
      const playerMove = cType(Math.random())
      play_game(playerMove)
    }, 1000)
    isAutoPlay = true
  } else {
    clearInterval(intervalId)
    isAutoPlay = false
  }
  
}

document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    play_game('rock')
  })

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    play_game('paper')
  })

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    play_game('scissors')
  })

function updateScoreElement() {
document.querySelector('.js-score')
  .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
}