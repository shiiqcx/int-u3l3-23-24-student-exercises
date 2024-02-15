// stored html elements
let mario = document.querySelector(".mario");
let coin = document.querySelector(".coin");
let score = document.querySelector(".score");
let title = document.querySelector("h1");
let background = document.querySelector("body");
let jumpButton = document.querySelector(".jump");
let jumpDownButton = document.querySelector(".jump-down");
let changeColorButton = document.querySelector(".change-color");
let endGameButton = document.querySelector(".end-game");
let updateScoreButton = document.querySelector(".update-score");
let growButton = document.querySelector(".grow");


jumpButton.addEventListener("click", function() {
    mario.style.bottom = "120px";
    coin.style.display = "none";
});




 

jumpDownButton.addEventListener("click", function() {
    mario.style = "bottom: 35px";
});






changeColorButton.addEventListener("click", function() {
    background.style.backgroundColor = "pink"; 
});



endGameButton.addEventListener ("click", function() {
    title.innerHTML = "Game over.";
});






updateScoreButton.addEventListener ("click", function() {
    score.innerHTML = 1;
});






growButton.addEventListener("click", function(){
    mario.style.width = "100px";
    mario.style.height = "200px"
});
   
