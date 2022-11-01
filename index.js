
for(var i = 0; i<7; i++){

  document.querySelector(".mybutton")[i].addEventListener("click",function(){
    var text = this.innerHTML;
    console.log(text);
    playSound(text);
  });
  
}
function playSound(){
  switch(text){
    case "A" : 
    var audio = new Audio("audios/a.mp3");
    audio.play();
    break;
  
    case "B" : 
    var audio = new Audio("audios/b.mp3");
    audio.play();
    break;
    case "C" : 
    var audio = new Audio("audios/c.mp3");
    audio.play();
    break;
    case "D" : 
    var audio = new Audio("audios/d.mp3");
    audio.play();
    break;
  }
}

