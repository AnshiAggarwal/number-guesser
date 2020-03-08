let min = 1,
    max = 10,
    winningNum =getRandomNum(min,max) ,
    guessLeft = 3;

const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {

    if (e.target.className === 'play-again') {
      window.location.reload();
     }
});

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    //validate
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`enter a number between ${min} and ${max}`, 'red');
    }

    if (guess === winningNum) {
        guessInput.style.borderColor = 'green';
        guessInput.disabled = true;
        setMessage(`${winningNum}  is correct,YOU WIN!`, 'green');
    } else {
        guessLeft -= 1;

        if (guessLeft === 0) {
            //game over- lose
            guessInput.style.borderColor = 'red';
            guessInput.disabled = true;
            setMessage(`${guess}  is incorrect...correct number is ${winningNum}....YOU LOSE!`, 'red');
            guessBtn.value = 'play-again';
            guessBtn.className += 'play-again';
        } else {
            //game continue -wrong answer
            guessInput.style.borderColor = 'red';
            guessInput.value = '';
            setMessage(`${guess}  is incorrect.. chances left: ${guessLeft} !`, 'red');
        }
    }
})

function getRandomNum(min,max){
  return Math.floor(Math.random()*(max-min +1));
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}
