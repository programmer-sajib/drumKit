var divSelector = document.querySelectorAll(".drum");
var divsCounter = divSelector.length;
for (let i = 0; i < divsCounter; i++) {
  divSelector[i].addEventListener("click", listner);
  function listner() {
    var buttonClick = divSelector[i].innerHTML.toLowerCase();
    makeSound(buttonClick);
    buttonAnimation(buttonClick);
  }
}
document.addEventListener("keypress", linsteningKeyBoard);
function linsteningKeyBoard(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}
function makeSound(key) {
  switch (key) {
    case "a":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;
    case "s":
      var tom1 = new Audio("./sounds/tom-2.mp3");
      tom1.play();
      break;
    case "d":
      var tom1 = new Audio("./sounds/tom-3.mp3");
      tom1.play();
      break;
    case "f":
      var tom1 = new Audio("./sounds/tom-4.mp3");
      tom1.play();
      break;
    case "j":
      var tom1 = new Audio("./sounds/crash.mp3");
      tom1.play();
      break;
    case "k":
      var tom1 = new Audio("./sounds/kick-bass.mp3");
      tom1.play();
      break;
    case "l":
      var tom1 = new Audio("./sounds/snare.mp3");
      tom1.play();
      break;

    default:
      console.log(key);
      break;
  }
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
