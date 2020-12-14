// The keys and notes variables store the piano keys
const keys = ['c-key', 'd-key', 'e-key', 'f-key', 'g-key', 'a-key', 'b-key', 'high-c-key', 'c-sharp-key', 'd-sharp-key', 'f-sharp-key', 'g-sharp-key', 'a-sharp-key'];
const notes = [];
keys.forEach(function(key){
  notes.push(document.getElementById(key));
})

// Adding Some Life To Piano With Sound
// B-Key
// click function
document.getElementById('b-key').addEventListener('click', function(){
  var audio = document.getElementById('audio-b');
  audio.currentTime = 0;
  audio.play();
})
// keyboard function
document.body.addEventListener('keydown', function(event){
  var key = event.key
  var audio = document.getElementById('audio-b');
  if (key === "b") {
  audio.currentTime = 0;
  audio.play();
  document.getElementById("b-key").style.backgroundColor = "lightblue"
  } 
  document.body.addEventListener('keyup', function(){
    document.getElementById("b-key").style.backgroundColor = ""
  })
}) 

// C-Key
document.getElementById('c-key').addEventListener('click', function(){
  var audio = document.getElementById('audio-c');
  audio.currentTime = 0;
  audio.play();
})
document.body.addEventListener('keydown', function(event){
  var key = event.key;
  var audio = document.getElementById('audio-c');
  if (key === "c") {
  audio.play();
  audio.currentTime = 0;
  document.getElementById("c-key").style.backgroundColor = "lightblue" 
  }
  document.body.addEventListener('keyup', function() {
    document.getElementById('c-key').style.backgroundColor = "";
  })
})

// High-C-Key
document.getElementById('high-c-key').addEventListener('click', function(){
  var audio = document.getElementById('audio-c');
  audio.currentTime = 0;
  audio.play();
})
document.body.addEventListener('keydown', function(event){
  var key = event.key;
  var audio = document.getElementById('audio-c');
  if (key === "x") {
  audio.currentTime = 0;
  audio.play();
  document.getElementById("high-c-key").style.backgroundColor = "lightblue"
  }
  document.body.addEventListener('keyup', function(){
    document.getElementById("high-c-key").style.backgroundColor = ""
  })
})


// D-Key
document.getElementById('d-key').addEventListener('click', function(){
  var audio = document.getElementById('audio-d');
  audio.currentTime = 0;
  audio.play();
})
document.body.addEventListener('keydown', function(event){
  var key = event.key
  var audio = document.getElementById('audio-d');
  if (key === "d") {
  audio.currentTime = 0;
  audio.play();
  document.getElementById("d-key").style.backgroundColor = "lightblue"
  } 
  document.body.addEventListener('keyup',function() {
    document.getElementById("d-key").style.backgroundColor = ""
  })
})

// E-Key
document.getElementById('e-key').addEventListener('click', function(){
  var audio = document.getElementById('audio-e');
  audio.currentTime = 0;
  audio.play();
})
document.body.addEventListener('keypress', function(event){
  var key = event.key
  var audio = document.getElementById('audio-e');
  if (key === "e") {
  audio.currentTime = 0;
  audio.play();
  document.getElementById("e-key").style.backgroundColor = "lightblue"
  } 
  document.body.addEventListener('keyup',function() {
    document.getElementById("e-key").style.backgroundColor = ""
  })
})

// F-Key
document.getElementById('f-key').addEventListener('click', function(){
  var audio = document.getElementById('audio-f');
  audio.currentTime = 0;
  audio.play();
})
document.body.addEventListener('keypress', function(event){
  var key = event.key
  var audio = document.getElementById('audio-f');
  if (key === "f") {
  audio.currentTime = 0;
  audio.play();
  document.getElementById("f-key").style.backgroundColor = "lightblue"
  } 
  document.addEventListener('keyup',function() {
    document.getElementById("f-key").style.backgroundColor = ""
  })
})


// A-Key
document.getElementById('a-key').addEventListener('click', function(){
  var audio = document.getElementById('audio-a');
  audio.currentTime = 0;
  audio.play();
})
document.body.addEventListener('keypress', function(event){
  var key = event.key
  var audio = document.getElementById('audio-a');
  if (key === "a") {
  audio.currentTime = 0;
  audio.play();
  document.getElementById("a-key").style.backgroundColor = "lightblue"
  } 
  document.body.addEventListener('keyup',function() {
    document.getElementById("a-key").style.backgroundColor = ""
  })
})

// G-Key
document.getElementById('g-key').addEventListener('click', function(){
  var audio = document.getElementById('audio-g');
  audio.currentTime = 0;
  audio.play();
})
document.body.addEventListener('keypress', function(event){
  var key = event.key
  var audio = document.getElementById('audio-g');
  if (key === "g") {
  audio.currentTime = 0;
  audio.play();
  document.getElementById("g-key").style.backgroundColor = "lightblue"
  } 
  document.body.addEventListener('keyup',function() {
    document.getElementById("g-key").style.backgroundColor = ""
  })
})


// Write named functions that change the color of the keys below
const keyPlay = (event) => {
  // Modifing the text background problem
  if (event.target.className === "keynote" || event.target.className === "black-keynote") {
  event.target.parentElement.style.backgroundColor = 'lightblue'
  } else {
    event.target.style.backgroundColor = 'lightblue'
  }
}
const keyReturn = (event) => {
  if (event.target.className === "keynote" || event.target.className === "black-keynote" ) {
    event.target.parentElement.style.backgroundColor = ''
    } else {
      event.target.style.backgroundColor = ''
    }
}

const touchPlay = (event) => {
  event.target.style.backgroundColor = 'lightblue'
}
const touchReturn = (event) => {
  event.target.style.backgroundColor = ''
}

// Write a named function with event handler properties
const mouse = (note) => {
  note.onmousedown =() =>{
     keyPlay(event);
  }
  note.onmouseup =() => {
    keyReturn(event);
  }
}

// Add changing Background for mobile version (touching) 
const touch = (note) => {
  note.ontouchstart =() =>{
     touchPlay(event);
  }
  note.ontouchend =() => {
    touchReturn(event);
  }
}
// Write a loop that runs the array elements through the function
notes.forEach(mouse);
notes.forEach(touch);

// These variables store the buttons that progress the user through the lyrics
let nextOne = document.getElementById('first-next-line');
let nextTwo = document.getElementById('second-next-line');
let nextThree = document.getElementById('third-next-line');
let startOver = document.getElementById('fourth-next-line');

// This variable stores the '-END' lyric element
let lastLyric = document.getElementById('column-optional');

// These statements are "hiding" all the progress buttons, but the first one
nextTwo.hidden = true;
nextThree.hidden = true;
startOver.hidden= true;

// Write anonymous event handler property and function for the first progress button
nextOne.onclick = () => {
  nextTwo.hidden = false;
  nextOne.hidden = true;
  document.getElementById('letter-note-five').innerHTML = 'D'
  document.getElementById('letter-note-six').innerHTML = 'C'
}

// Write anonymous event handler property and function for the second progress button
nextTwo.onclick = () => {
  nextThree.hidden = false;
  nextTwo.hidden = true;
  
  document.getElementById('word-five').innerHTML = 'DEAR'
  document.getElementById('word-six').innerHTML = 'FRI-'

  lastLyric.style.display = 'inline-block'

  document.getElementById('letter-note-three').innerHTML = 'G'
  document.getElementById('letter-note-four').innerHTML = 'E'
  document.getElementById('letter-note-five').innerHTML = 'C'
  document.getElementById('letter-note-six').innerHTML = 'B'
}

// Write anonymous event handler property and function for the third progress button
nextThree.onclick = () => {
  startOver.hidden = false;
  nextThree.hidden = true;

  document.getElementById('word-one').innerHTML = 'HAP-'
  document.getElementById('word-two').innerHTML = 'PY'
  document.getElementById('word-three').innerHTML = 'BIRTH'
  document.getElementById('word-four').innerHTML = 'DAY'
  document.getElementById('word-five').innerHTML = 'TO'
  document.getElementById('word-six').innerHTML = 'YOU!'

  document.getElementById('letter-note-one').innerHTML = 'F'
  document.getElementById('letter-note-two').innerHTML = 'F'
  document.getElementById('letter-note-three').innerHTML = 'E'
  document.getElementById('letter-note-four').innerHTML = 'C'
  document.getElementById('letter-note-five').innerHTML = 'D'
  document.getElementById('letter-note-six').innerHTML = 'C'

  lastLyric.style.display = 'none'
}

// Write anonymous event handler property and function for the Start over progress button
startOver.onclick = function() {
  nextOne.hidden = false;
  startOver.hidden = true;
   document.getElementById('word-one').innerHTML = 'HAP-';
  document.getElementById('letter-note-one').innerHTML = 'G';
  document.getElementById('word-two').innerHTML = 'PY';
  document.getElementById('letter-note-two').innerHTML = 'G';
  document.getElementById('word-three').innerHTML = 'BIRTH-';
  document.getElementById('letter-note-three').innerHTML = 'A';
  document.getElementById('word-four').innerHTML = 'DAY';
  document.getElementById('letter-note-four').innerHTML = 'G';
  document.getElementById('word-five').innerHTML = 'TO';
  document.getElementById('letter-note-five').innerHTML = 'C';
  document.getElementById('word-six').innerHTML = 'YOU!';
  document.getElementById('letter-note-six').innerHTML = 'B';
};