//Practice 1: Get button and and listner to pop alert
button1 = document.querySelector('button');
button1.addEventListener("click", function(event){
  console.log("button was pressed!");
})
//Practice 2: Get all buttons, iterate them and add listner so any button clicked will trigger alert
buttons = document.querySelectorAll('.drum');

for(let i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", function(event){
    var buttonData = this.innerHTML;
   playSound(buttonData);
   buttonAnimation(buttonData);
  });

  document.addEventListener("keydown", function(event){
    playSound(event.key);
    buttonAnimation(event.key);
  })
}

function playSound(letter){
  switch(letter){
    case 'w':
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;
    case 'a':
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
    case 's':
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;
    case 'd':
      var tom1 = new Audio('./sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'j':
      var tom2 = new Audio('./sounds/tom-2.mp3');
      tom2.play();
      break;
    case 'k':
      var tom3 = new Audio('./sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'l':
      var tom4 = new Audio('./sounds/tom-4.mp3');
      tom4.play();
      break;
    default: 
  }
}

function buttonAnimation(letter){
  var activeButton = document.querySelector("." + letter);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}