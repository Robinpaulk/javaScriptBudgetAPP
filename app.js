
var scores, roundScore, activePlayer, gamePlaying;
init();

//set the scores to zero


document.querySelector(".btn-roll").addEventListener('click', function()
{
   if(gamePlaying)
   {
      // For Random number when click on the button
      var dice = Math.floor(Math.random() * 6) + 1;
      // 2. Display the results
  
      var diceDOM = document.querySelector('.dice');
      diceDOM.style.display = 'block';
      diceDOM.src = 'dice-' + dice + '.png';
  
      // 3/ if the user dice is 1 next player or else same player
          if(dice !== 1)
          {
              console.log('p');
              //add dice to roundScore
              roundScore += dice;
              document.querySelector('#current-' + activePlayer).textContent = roundScore;
          }
          else
          {
              nextPlayer();   
          }  
   }
});

document.querySelector('.btn-hold').addEventListener('click', function()
{
    
    
        //Add CURRENT to GLOBA
    scores[activePlayer] += roundScore;
    //update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Checks Player winns or not
        if(scores[activePlayer] >= 25)
        {
            document.querySelector('#name-' + activePlayer).textContent = "WINNER";
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;    
        }else{
        nextPlayer();
        }
    
});
function nextPlayer()
{
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}
document.querySelector('.btn-new').addEventListener('click', init);

function init()
{
scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('name-0').textContent = 'Player 1';
document.getElementById('name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}

 