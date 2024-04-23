

let firstNumber=Math.floor(Math.random() * 100 );
let secondNumber=Math.floor(Math.random() * 100 );
document.getElementById('firstNumber').textContent=firstNumber;
document.getElementById('secondNumber').textContent=secondNumber;
let userInputValue;
let result;

function checkButton(){
    userInputValue = parseInt(document.getElementById('userInput').value);
    result=firstNumber+secondNumber;
    if (userInputValue===result){
    document.getElementById('gameResult').textContent="congratulations ! You got it right";
    document.getElementById('gameResult').style.backgroundColor="green";
    }
    else {
    document.getElementById('gameResult').textContent="try again!";
    document.getElementById('gameResult').style.backgroundColor="blue";
    }
}
function restartButton(){
    firstNumber=Math.floor(Math.random() * 100 );
    secondNumber=Math.floor(Math.random() * 100 );
    document.getElementById('firstNumber').textContent=firstNumber;
    document.getElementById('secondNumber').textContent=secondNumber;
    document.getElementById('userInput').value="";
    document.getElementById('gameResult').textContent="";
}
