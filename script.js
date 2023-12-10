var input = document.querySelector("input");
var btn = document.querySelector("button");
var show = document.getElementById("display");

var song1 = new Audio("aud/canNeverMakeIt.mp3");
var song2 = new Audio("aud/deyPlayChisos.mp3");
var song3 = new Audio("aud/letPoorBreath.mp3");
var song4 = new Audio("aud/clap.aac");
var song5 =  new Audio("aud/courageGuy.mp3")
var song6 = new Audio("aud/deyPlayChisos.mp3");
var song7 = new Audio("aud/jubilation.mp3");


function clickMe(){
  var song;
    if (input.value == "") {
      alert("No dey whyn me nha....Oya enter something")
    }
    else if (input.value >=0 && input.value<=30) {
     show.innerHTML= "FAIL"
      song1.play();
      song2.pause();
      song3.pause();
      song4.pause();
      song5.pause();
      song6.pause();
      song7.pause();

     }
     
      else if (input.value >=31 && input.value<=40) {
      show.innerHTML= "FAIR";
    
      song1.pause();
      song2.play();
      song3.pause();
      song4.pause();
      song5.pause();
      song6.pause();
      song7.pause();
     }
     else if (input.value >=41 && input.value<=49) {
      show.innerHTML= "FAIL"
    
        song1.pause();
      song2.pause();
      song3.play();
      song4.pause();
      song5.pause();
      song6.pause();
      song7.pause();
     }
     else if (input.value >=50 && input.value<=59) {
      show.innerHTML= "GOOD"
        song1.pause();
      song2.pause();
      song3.pause();
      song4.play();
      song5.pause();
      song6.pause();
      song7.pause();
     }
     else if (input.value >=60 && input.value<=69) {
      show.innerHTML= "VERY GOOD"
       song1.pause();
      song2.pause();
      song3.pause();
      song4.pause();
      song5.play();
      song6.pause();
      song7.pause();
     }
    else if (input.value >=70 && input.value<=100) {
      show.innerHTML= "EXCELLENT"
        song1.pause();
      song2.pause();
      song3.pause();
      song4.pause();
      song5.pause();
      song6.pause();
      song7.play();
     }
     else{
     alert("YOU DEY SMOKE IGBO");
     }
}