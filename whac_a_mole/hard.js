const scoreDisplay = document.getElementById('score');
const holes = document.getElementsByClassName('hole');
const holes2 = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
//const civilan_mole = document.querySelectorAll('.civilan');
const timeleft = document.querySelector('#time-left');
const button = document.querySelector('#start');
const gameGrid = document.getElementById('grid');


let result = 0;
//let hitPostition1;
let hitPostition2;
let currentTime;
let timerId = false;




// Random moles 




function randomMole() {
  holes2.forEach(hole => {
      hole.classList.remove('mole')
  });

  let randomMole = holes[Math.floor(Math.random() * 9)]
  randomMole.classList.add('mole');
  hitPostition2 = randomMole.id;


}






//Random Civilan's 

/*function randomCivilan() {
    holes2.forEach(hole => {
        hole.classList.remove('civilan')
    });

    let randomCivilan = holes[Math.floor(Math.random() * 9)]
    randomCivilan.classList.add('civilan');
    hitPostition1 = randomCivilan.id;


}*/


/*
//Timer for civilan 
function moveCivilan() {
     
  timerId = setInterval(randomCivilan, 1900)

    
} 

moveCivilan()

*/


 // Score keepr / remove(mole & civilan) when whacked

gameGrid.addEventListener('click', function(clickEvent) {
  if (clickEvent.target.matches('.mole')) {
    clickEvent.target.classList.remove('mole');
    result++;
    scoreDisplay.innerText = result;

  } else if (clickEvent.target.matches('.civilan')) {
    clickEvent.target.classList.remove('civilan');
    result--;
    scoreDisplay.innerText = result;
 
  }

});


//Start Game
function startGame(){
  scoreDisplay.textContent = 0;
  timerId = false;
  hitPostition2
  currentTime = 30;
 
  //
  randomMole()
  timerId = setInterval(randomMole, 150)
  
  
  
  
  function countDown() {
    currentTime--
    timeleft.textContent = currentTime;

    
    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        
       alert('GAME OVER! Moles hit: ' + result)
    }
  return false;
}


let countDownTimerId = setInterval(countDown, 1000);
}

// Count Down Timer