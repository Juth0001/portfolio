window.addEventListener("load", start);

let lives, points, end;

const grænSound = document.querySelector("#snd1");
const frugtSound = document.querySelector("#snd2");
const loseSound = document.querySelector("#snd3");
const winSound = document.querySelector("#snd4");
const bgSound = document.querySelector("#snd5");
const muteBtn = document.querySelector("#mute");

function start() {
    console.log("start");
    hideAllScreens();
    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#start_btn").addEventListener("click", startGame);
}

function startGame(){
    console.log("start");
    hideAllScreens();

    lives = 3;
    points = 0;

    end = false;

    updateUI();

    
    stopAllSound();
    bgSound.currentTime = 0;
  bgSound.play();
  bgSound.addEventListener("ended", loopSound);
  muteBtn.addEventListener("click", muteplay);
  

  let randomNumber = generateRandomNumber(7);
  console.log(randomNumber);

  let newPos = "pos" + randomNumber;
  console.log(newPos);

   // ************GOOD ELEMENTS*************************

  document.querySelector("#frugt1_container").classList.add(newPos);
  document.querySelector("#frugt1_container").classList.add("fald");
  randomNumber = generateRandomNumber(7);
  let newDelay = "delay" + randomNumber;
  document.querySelector("#frugt1_container").classList.add(newDelay);
  document.querySelector("#frugt1_container").addEventListener("mousedown", clickFrugt);
  document.querySelector("#frugt1_container").addEventListener("animationiteration", restartFrugt);

  randomNumber = generateRandomNumber(7);
  newPos = "pos" + randomNumber;
  document.querySelector("#frugt2_container").classList.add(newPos);
  document.querySelector("#frugt2_container").classList.add("fald");
  randomNumber = generateRandomNumber(7);
  newDelay ="delay" + randomNumber;
  document.querySelector("#frugt2_container").classList.add(newDelay);
  document.querySelector("#frugt2_container").addEventListener("mousedown", clickFrugt);
  document.querySelector("#frugt2_container").addEventListener("animationiteration", restartFrugt);

  randomNumber = generateRandomNumber(7);
  newPos = "pos" + randomNumber;
  document.querySelector("#frugt3_container").classList.add(newPos);
  document.querySelector("#frugt3_container").classList.add("fald");
  randomNumber = generateRandomNumber(7);
  newDelay ="delay" + randomNumber;
  document.querySelector("#frugt3_container").classList.add(newDelay);
  document.querySelector("#frugt3_container").addEventListener("mousedown", clickFrugt);
  document.querySelector("#frugt3_container").addEventListener("animationiteration", restartFrugt);

 // ************BAD ELEMENTS*************************

 randomNumber = generateRandomNumber(7);
 newPos = "pos" + randomNumber;
 document.querySelector("#græn_container").classList.add(newPos);
  document.querySelector("#græn_container").classList.add("fald");
  randomNumber = generateRandomNumber(7);
  newDelay ="delay" + randomNumber;
  document.querySelector("#græn_container").classList.add(newDelay);
  document.querySelector("#græn_container").addEventListener("mousedown", clickGræn);
  document.querySelector("#græn_container").addEventListener("animationiteration", restartGræn);

  randomNumber = generateRandomNumber(7);
 newPos = "pos" + randomNumber;
 document.querySelector("#orm_2_container").classList.add(newPos);
  document.querySelector("#orm_2_container").classList.add("fald");
  randomNumber = generateRandomNumber(7);
  newDelay ="delay" + randomNumber;
  document.querySelector("#orm_2_container").classList.add(newDelay);
  document.querySelector("#orm_2_container").addEventListener("mousedown", clickOrm);
  document.querySelector("#orm_2_container").addEventListener("animationiteration", restartOrm);

  document.querySelector("#time").classList.add("time-goes");
  document.querySelector("#time").addEventListener("animationend", gameOver);
}


function clickFrugt(){
    console.log("clickFrugt");

    
    frugtSound.currentTime = 0;
  frugtSound.play();
  this.removeEventListener("mousedown", clickFrugt);
  
  addPoint();
  updateUI();

this.classList.add("frys");

this.firstElementChild.classList.add("forsvind");

if (end === false){
    this.addEventListener("animationend", restartFrugt);
} else {
    stopAllAnimations();
}
}

function restartFrugt() {
    console.log("restartFrugt");
    this.classList = "";
    this.firstElementChild.classList = "";

    this.offsetHeight;
    let randomNumber = generateRandomNumber(7);
    let newPos = "pos" + randomNumber;
    this.classList.add(newPos);
    this.classList.add("fald");
    this.addEventListener("mousedown", clickFrugt);
}

function clickGræn() {
    console.log("clickGræn");
    document.querySelector("#græn_container").removeEventListener("mousedown", clickGræn);
    
    grænSound.currentTime = 0;
  grænSound.play();
  
 loseLife();
 updateUI();

 document.querySelector("#græn_container").classList.add("frys");
 document.querySelector("#græn_sprite").classList.add("forsvind");

 if (end === false) {
    document.querySelector("#græn_container").addEventListener("animationend", restartGræn);
 } else {
    stopAllAnimations();
 }
}

function restartGræn() {
    console.log("restartGren");
    document.querySelector("#græn_container").classList = "";
    document.querySelector("#græn_sprite").classList = "";
    document.querySelector("#græn_container").offsetHeight;

    let randomNumber = generateRandomNumber(7);
    let newPos ="pos" + randomNumber;
    document.querySelector("#græn_container").classList.add(newPos);
    document.querySelector("#græn_container").classList.add("fald");
    document.querySelector("#græn_container").addEventListener("mousedown", clickGræn);
}

function clickOrm() {
    console.log("clickOrm");
    document.querySelector("#orm_2_container").removeEventListener("mousedown", clickOrm);
    
    grænSound.currentTime = 0;
  grænSound.play();
  
 loseLife();
 updateUI();

 document.querySelector("#orm_2_container").classList.add("frys");
 document.querySelector("#orm_2_sprite").classList.add("forsvind");

 if (end === false) {
    document.querySelector("#orm_2_container").addEventListener("animationend", restartOrm);
 } else {
    stopAllAnimations();
 }
}

function restartOrm() {
    console.log("restartOrm");
    document.querySelector("#orm_2_container").classList = "";
    document.querySelector("#orm_2_sprite").classList = "";
    document.querySelector("#orm_2_container").offsetHeight;

    let randomNumber = generateRandomNumber(7);
    let newPos ="pos" + randomNumber;
    document.querySelector("#orm_2_container").classList.add(newPos);
    document.querySelector("#orm_2_container").classList.add("fald");
    document.querySelector("#orm_2_container").addEventListener("mousedown", clickOrm);
}



function gameOver() {
    console.log("gameOver");

    end = true;

    hideAllScreens();
    stopAllAnimations();
    stopAllSound(); 
    if (lives === 0){
        loseGame();
    } else if (points > 6) {
        winGame();
    } else {
        loseGame();
    }
}

function loseGame() {
    console.log("loseGame");
    document.querySelector("#game_over").classList.remove("hide");
    document.querySelector("#play-again-1_btn").addEventListener("click", startGame);

    loseSound.currentTime = 0;
  loseSound.play();
}

function winGame() {
    console.log("winGame");
    document.querySelector("#level_complete").classList.remove("hide");
    document.querySelector("#play-again-2_btn").addEventListener("click", startGame);

   winSound.currentTime = 0;
  winSound.play();
}


// **************************************************************
// Utility functions
// **************************************************************

function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

function updateUI() {
    document.querySelector("#score").textContent = points;

    if (lives === 3) {
        document.querySelector("#energy1").classList.remove("hide");
        document.querySelector("#energy2").classList.remove("hide");
        document.querySelector("#energy3").classList.remove("hide");
    }
    if (lives === 2){
        document.querySelector("#energy3").classList.add("hide");
    }
    if (lives === 1){
        document.querySelector("#energy2").classList.add("hide");
    }
    if (lives === 0){
        document.querySelector("#energy1").classList.add("hide");
    }
}

function loseLife() {
    lives = lives - 1;
    if (lives === 0) {
        gameOver();
    }
}

function addPoint() {
    points = points + 1;
}

function hideAllScreens() {
    document.querySelector("#start").classList.add("hide");
  document.querySelector("#game_over").classList.add("hide");
  document.querySelector("#level_complete").classList.add("hide");
}


function stopAllSound() {
  bgSound.pause();
  winSound.pause();
  loseSound.pause();
  frugtSound.pause();
  grænSound.pause();
}

function muteplay() {
  console.log("muteplay");
  if (bgSound.paused === true) {
    bgSound.play();
  } else {
    bgSound.pause();
  }
}

function loopSound() {
  console.log("loopSound");
  bgSound.play();
}


function stopAllAnimations() {
    document.querySelector("#frugt1_container").classList = 0;
    document.querySelector("#frugt1_sprite").classList = 0;
    document.querySelector("#frugt2_container").classList = 0;
    document.querySelector("#frugt2_sprite").classList = 0;
    document.querySelector("#frugt3_container").classList = 0;
    document.querySelector("#frugt3_sprite").classList = 0;
  
    document.querySelector("#græn_container").classList = 0;
    document.querySelector("#græn_sprite").classList = 0;
    document.querySelector("#orm_2_container").classList = 0;
    document.querySelector("#orm_2_sprite").classList = 0;

    document.querySelector("#frugt1_container").removeEventListener("mousedown", clickFrugt);
    document.querySelector("#frugt1_container").removeEventListener("animationiteration", restartFrugt);
    document.querySelector("#frugt1_container").removeEventListener("animationend", restartFrugt);
    document.querySelector("#frugt2_container").removeEventListener("mousedown", clickFrugt);
    document.querySelector("#frugt2_container").removeEventListener("animationiteration", restartFrugt);
    document.querySelector("#frugt2_container").removeEventListener("animationend", restartFrugt);
    document.querySelector("#frugt3_container").removeEventListener("mousedown", clickFrugt);
    document.querySelector("#frugt3_container").removeEventListener("animationiteration", restartFrugt);
    document.querySelector("#frugt3_container").removeEventListener("animationend", restartFrugt);
  
    document.querySelector("#græn_container").removeEventListener("mousedown", clickFrugt);
    document.querySelector("#græn_container").removeEventListener("animationiteration", restartFrugt);
    document.querySelector("#græn_container").removeEventListener("animationend", restartFrugt);
    document.querySelector("#orm_2_container").removeEventListener("mousedown", clickFrugt);
    document.querySelector("#orm_2_container").removeEventListener("animationiteration", restartFrugt);
    document.querySelector("#orm_2_container").removeEventListener("animationend", restartFrugt);
  
    document.querySelector("#time").classList = 0;
  document.querySelector("#time").removeEventListener("animationend", gameOver);
}