
let scretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message){
   document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener('click',function(){
   const guess = Number(document.querySelector('.guess').value)

   if (!guess){
       displayMessage('🚫 No Number!')
   } else if (guess === scretNumber){
       displayMessage('🥳 Correct Number')
       document.querySelector('.number').textContent = scretNumber;
       document.querySelector('body').style.backgroundColor = '#60b347'
       if(score > highScore){
           highScore = score
           document.querySelector('.highscore').textContent = highScore
       }
   } else if(guess !== scretNumber){
       if(score > 1){
           displayMessage(guess > scretNumber ? '📈 Too High!' : '📉 Too Low !')
           score--;
           document.querySelector('.score').textContent = score;
       }else {
           displayMessage('😭 You lost the game !')
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
   displayMessage('Start guessing...')
   scretNumber = Math.trunc(Math.random()*20)+1;
});
