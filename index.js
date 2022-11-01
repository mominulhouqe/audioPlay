var buttons = document.querySelectorAll(".mybutton");
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  });
}

function makeSound(key) {
  switch (key) {
    case "A":
      var audio = new Audio("audios/a.mp3");
      audio.play();
      break;
    case "B":
      var audio = new Audio("audios/b.mp3");
      audio.play();
      break;
    case "C":
      var audio = new Audio("audios/c.mp3");
      audio.play();
      break;
    case "D":
      var audio = new Audio("audios/d.mp3");
      audio.play();
      break;
    case "E":
      var audio = new Audio("audios/e.mp3");
      audio.play();
      break;
    default:
      console.log(key);
  }
}
