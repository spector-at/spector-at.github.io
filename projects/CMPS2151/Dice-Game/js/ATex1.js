var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var image1 = document.querySelector('.img1');
var image2 = document.querySelector('.img2');


var imageName1 = "./images/dice" + randomNumber1 + ".png";
var imageName2 = "./images/dice" + randomNumber2 + ".png";

image1.setAttribute("src", imageName1);
image2.setAttribute("src", imageName2);

var winner = document.querySelector('h1');

if(randomNumber1 > randomNumber2){
  winner.innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
  winner.innerHTML = "Player 2 Wins!";
}
else{
  winner.innerHTML = "Draw!";
}