let numberToFind = 0;
let attempts = 0;
const btnSend = document.getElementById("btnSend");
const mainText = document.getElementById("mainText");
const numberAttempts = document.getElementById("numberAttempts");
let inputNumber = document.getElementById("inputNumber");

function refresh(){
  numberToFind = Math.floor(Math.random() * 100);
  console.log(numberToFind);
}

function verify(){
  let inputValue = inputNumber.value;
  if (inputValue > 100){
    inputNumber.value = 100;
    return false;
  } else if (inputValue < 1){
    inputNumber.value = "";
    return false;
  }
  return
}

function sendMessage() {
  let inputValue = inputNumber.value;
  inputNumber.value = "";
  attemptsNumber(inputValue);

  if(inputValue > numberToFind){
    mainText.innerText =`🚨 The number is less than  ${inputValue} 🚨`;
  } else if(inputValue < numberToFind){
    mainText.innerText =`🚨 The number is greater than ${inputValue} 🚨`;
  } else {
    mainText.innerText =`🎉 Congratulation, you won!!! The number is ${numberToFind}🥳`;
  }
}

function attemptsNumber(value){
  if(value > 0){
    attempts++
    numberAttempts.innerText = attempts;
  }
}

inputNumber.addEventListener('input', verify)

btnSend.addEventListener('click', sendMessage);

inputNumber.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    sendMessage();
  }
});


refresh();