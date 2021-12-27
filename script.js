
let scretNumber = Math.trunc(Math.random()*20)+1;
 let score = 20;
 let highScore = 0

document.querySelector('.check').addEventListener('click',function(){
    const guess = Number(document.querySelector('.guess').value)

    if (!guess){
        document.querySelector('.message').textContent = '🚫 No Number!'
    } else if (guess === scretNumber){
        document.querySelector('.message').textContent = '🥳 Correct Number'
        document.querySelector('.number').textContent = scretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347'
        if(score > highScore){
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
    } else if(guess > scretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📈 Too High!'
            score--;
            document.querySelector('.score').textContent = score;
        }else {
            document.querySelector('.message'). textContent = '😭 You lost the game !'
            document.querySelector('body').style.backgroundColor = '#FF0000'
            document.querySelector('.score').textContent = score;
        }

    } else if(guess < scretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = '📉 Too Low !'
            score--;
            document.querySelector('.score').textContent = score;
        } else{
            document.querySelector('.message'). textContent = '😭 You lost the game !'
            document.querySelector('body').style.backgroundColor = '#FF0000'
            document.querySelector('.score').textContent = score;
        }
    }
});

document.querySelector('.again').addEventListener('click',function(){
    score = 20;
    document.querySelector('.guess').value = ''
    document.querySelector('.score').textContent = score
    document.querySelector('.number').textContent = '?'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.message').textContent = 'Start guessing...'
    scretNumber = Math.trunc(Math.random()*20)+1;
});


