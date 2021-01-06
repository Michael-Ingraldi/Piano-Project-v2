let timerToggle = 0;
let counter = (500);

let slider = document.getElementById("myRange");
let output = document.querySelector(`#bpm`);

output.innerHTML = `OFF`
output.style.color=`#505050`;

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  if ( this.value > 39 ) {
  output.innerHTML = `${this.value} BPM`
  timerToggle = 1
  } else {
    output.innerHTML = `OFF`
    timerToggle = 0
    output.style.color=`#505050`;
  }

  counter = (60000/this.value)
  
}

//////////////////////////////////////////

// Assign variables to SVG elements
let pianoAKey = document.querySelector(`#A-key`)
let pianoSKey = document.querySelector(`#S-key`)
let pianoDKey = document.querySelector(`#D-key`)
let pianoFKey = document.querySelector(`#F-key`)
let pianoGKey = document.querySelector(`#G-key`)
let pianoHKey = document.querySelector(`#H-key`)
let pianoJKey = document.querySelector(`#J-key`)
let pianoKKey = document.querySelector(`#K-key`)
let pianoLKey = document.querySelector(`#L-key`)
let pianoEndKey = document.querySelector(`#end-key`)


//Piano key functions
let playThePianoA = function() {
    let url = pianoAKey.getAttribute(`data-sfx`)
    let sfx = new Audio(url)
    sfx.play()
}

let playThePianoS = function() {
  let url = pianoSKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoD = function() {
  let url = pianoDKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoF = function() {
  let url = pianoFKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoG = function() {
  let url = pianoGKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoH = function() {
  let url = pianoHKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoJ = function() {
  let url = pianoJKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoK = function() {
  let url = pianoKKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoL = function() {
  let url = pianoLKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoSemicolon = function() {
  let url = pianoEndKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

// Clickable piano keys
// pianoAKey.addEventListener(`mousedown`, playThePianoA)
// pianoSKey.addEventListener(`mousedown`, playThePianoS)
// pianoDKey.addEventListener(`mousedown`, playThePianoD)
// pianoFKey.addEventListener(`mousedown`, playThePianoF)
// pianoGKey.addEventListener(`mousedown`, playThePianoG)
// pianoHKey.addEventListener(`mousedown`, playThePianoH)
// pianoJKey.addEventListener(`mousedown`, playThePianoJ)
// pianoKKey.addEventListener(`mousedown`, playThePianoK)
// pianoLKey.addEventListener(`mousedown`, playThePianoL)
// pianoEndKey.addEventListener(`mousedown`, playThePianoSemicolon)



//Metronome function
let metronome = function() {

  setTimeout(metronome, counter);

  if (timerToggle == 1) {
    let sfx = new Audio(`audio/tik.wav`);
    sfx.play()

  if (output.style.color =='white')
    output.style.color='#505050'
  else
    output.style.color='white'
  }
}

setTimeout(metronome, counter);

let aSound = new Audio (`audio/Piano A.wav`)
let sSound = new Audio (`audio/Piano S.wav`)
let dSound = new Audio (`audio/Piano D.wav`)
let fSound = new Audio (`audio/Piano F.wav`)
let gSound = new Audio (`audio/Piano G.wav`)
let hSound = new Audio (`audio/Piano H.wav`)
let jSound = new Audio (`audio/Piano J.wav`)
let kSound = new Audio (`audio/Piano K.wav`)
let lSound = new Audio (`audio/Piano L.wav`)
let semiSound = new Audio (`audio/Piano End.wav`)

window.aHeld=0;
window.sHeld=0;
window.dHeld=0;
window.fHeld=0;
window.gHeld=0;
window.hHeld=0;
window.jHeld=0;
window.kHeld=0;
window.lHeld=0;
window.semiHeld=0;

/////Key Code/////

// let keyPress = function(event) {

//   let keyLetter = event.code
//   keyLetter = keyLetter.replace(`Key`,``);

//   let pianoKey = document.querySelector(`#${keyLetter}-key`)

//   let sfx = new Audio (`audio/Piano ${keyLetter}.wav`)
//   sfx.play()
//   pianoKey.style.fill=`#d3d3d3`
//   pianoKey.style.transform=`scale(0.9, 0.9)`

//   sfx.volume = 1;
//   sfx.currentTime = 0;
//   window.hHeld=1;
// }

let keyPress = function(event) {

if (event.code === `KeyA` && window.aHeld == 0) {
    let sfx = new Audio (`audio/Piano A.wav`)
    aSound.play()
    pianoAKey.style.fill=`#d3d3d3`
    pianoAKey.style.transform=`scale(0.9, 0.9)`

    aSound.volume = 1;
    aSound.currentTime = 0;
    window.aHeld=1;

} else if (event.code === `KeyS` && window.sHeld == 0) {
    let sfx = new Audio (`audio/Piano S.wav`)
    sSound.play()
    pianoSKey.style.fill=`#d3d3d3`
    pianoSKey.style.transform=`scale(0.9, 0.9)`

    sSound.volume = 1;
    sSound.currentTime = 0;
    window.sHeld=1;

} else if (event.code === `KeyD` && window.dHeld == 0) {
    let sfx = new Audio (`audio/Piano D.wav`)
    dSound.play()
    pianoDKey.style.fill=`#d3d3d3`
    pianoDKey.style.transform=`scale(0.9, 0.9)`

    dSound.volume = 1;
    dSound.currentTime = 0;
    window.dHeld=1;

} else if (event.code === `KeyF` && window.fHeld == 0) {
    let sfx = new Audio (`audio/Piano F.wav`)
    fSound.play()
    pianoFKey.style.fill=`#d3d3d3`
    pianoFKey.style.transform=`scale(0.9, 0.9)`

    fSound.volume = 1;
    fSound.currentTime = 0;
    window.fHeld=1;

} else if (event.code === `KeyG` && window.gHeld == 0) {
    let sfx = new Audio (`audio/Piano G.wav`)
    gSound.play()
    pianoGKey.style.fill=`#d3d3d3`
    pianoGKey.style.transform=`scale(0.9, 0.9)`

    gSound.volume = 1;
    gSound.currentTime = 0;
    window.gHeld=1;

} else if (event.code === `KeyH` && window.hHeld == 0) {
    let sfx = new Audio (`audio/Piano H.wav`)
    hSound.play()
    pianoHKey.style.fill=`#d3d3d3`
    pianoHKey.style.transform=`scale(0.9, 0.9)`

    hSound.volume = 1;
    hSound.currentTime = 0;
    window.hHeld=1;

} else if (event.code === `KeyJ` && window.jHeld == 0) {
    let sfx = new Audio (`audio/Piano J.wav`)
    jSound.play()
    pianoJKey.style.fill=`#d3d3d3`
    pianoJKey.style.transform=`scale(0.9, 0.9)`

    jSound.volume = 1;
    jSound.currentTime = 0;
    window.jHeld=1;

} else if (event.code === `KeyK` && window.kHeld == 0) {
    let sfx = new Audio (`audio/Piano K.wav`)
    kSound.play()
    pianoKKey.style.fill=`#d3d3d3`
    pianoKKey.style.transform=`scale(0.9, 0.9)`

    kSound.volume = 1;
    kSound.currentTime = 0;
    window.kHeld=1;

} else if (event.code === `KeyL` && window.lHeld == 0) {
    let sfx = new Audio (`audio/Piano L.wav`)
    lSound.play()
    pianoLKey.style.fill=`#d3d3d3`
    pianoLKey.style.transform=`scale(0.9, 0.9)`

    lSound.volume = 1;
    lSound.currentTime = 0;
    window.lHeld=1;

} else if (event.code === `Semicolon` && window.semiHeld == 0) {
    let sfx = new Audio (`audio/Piano End.wav`)
    semiSound.play()
    pianoEndKey.style.fill=`#d3d3d3`
    pianoEndKey.style.transform=`scale(0.9, 0.9)`

    semiSound.volume = 1;
    semiSound.currentTime = 0;
    window.semiHeld=1;
} 
}

document.addEventListener(`keydown`, keyPress);

///////////////////////////////////////////////////////

document.addEventListener('keyup', (e) => {
  if ( (e.key) == "a" || (e.key) == "A" ) {

    window.aHeld = 0;

    let fadeOut = setInterval(function() {
      if (window.aHeld == 0) {
        if (aSound.volume > 0.05)
          aSound.volume -= 0.05;
        else
          clearInterval(fadeOut)
      }
    }, 10);

    pianoAKey.style.fill=`white`;
    pianoAKey.style.transform=`scale(1, 1)`
  }

  if ( (e.key) == "s" || (e.key) == "S" ) {

    window.sHeld = 0;

    let fadeOut = setInterval(function() {
      if (window.sHeld == 0) {
        if (sSound.volume > 0.05)
          sSound.volume -= 0.05;
        else
          clearInterval(fadeOut)
      }
    }, 10);

    pianoSKey.style.fill=`white`;
    pianoSKey.style.transform=`scale(1, 1)`
  }

  if ( (e.key) == "d" || (e.key) == "D" ) {

    window.dHeld = 0;

    let fadeOut = setInterval(function() {
      if (window.dHeld == 0) {
        if (dSound.volume > 0.05)
          dSound.volume -= 0.05;
        else
          clearInterval(fadeOut)
      }
    }, 10);

    pianoDKey.style.fill=`white`;
    pianoDKey.style.transform=`scale(1, 1)`
  }

  if ( (e.key) == "f" || (e.key) == "F" ) {

    window.fHeld = 0;

    let fadeOut = setInterval(function() {
      if (window.fHeld == 0) {
        if (fSound.volume > 0.05)
          fSound.volume -= 0.05;
        else
          clearInterval(fadeOut)
      }
    }, 10);

    pianoFKey.style.fill=`white`;
    pianoFKey.style.transform=`scale(1, 1)`
  }

  if ( (e.key) == "g" || (e.key) == "G" ) {

    window.gHeld = 0;

    let fadeOut = setInterval(function() {
      if (window.gHeld == 0) {
        if (gSound.volume > 0.05)
          gSound.volume -= 0.05;
        else
          clearInterval(fadeOut)
      }
    }, 10);

    pianoGKey.style.fill=`white`;
    pianoGKey.style.transform=`scale(1, 1)`
  }

  if ( (e.key) == "h" || (e.key) == "H" ) {

    window.hHeld = 0;

    let fadeOut = setInterval(function() {
      if (window.hHeld == 0) {
        if (hSound.volume > 0.05)
          hSound.volume -= 0.05;
        else
          clearInterval(fadeOut)
      }
    }, 10);

    pianoHKey.style.fill=`white`;
    pianoHKey.style.transform=`scale(1, 1)`
  }

  if ( (e.key) == "j" || (e.key) == "J" ) {

    window.jHeld = 0;

    let fadeOut = setInterval(function() {
      if (window.jHeld == 0) {
        if (jSound.volume > 0.05)
          jSound.volume -= 0.05;
        else
          clearInterval(fadeOut)
      }
    }, 10);

    pianoJKey.style.fill=`white`;
    pianoJKey.style.transform=`scale(1, 1)`
  }

  if ( (e.key) == "k" || (e.key) == "K" ) {

    window.kHeld = 0;

    let fadeOut = setInterval(function() {
      if (window.kHeld == 0) {
        if (kSound.volume > 0.05)
          kSound.volume -= 0.05;
        else
          clearInterval(fadeOut)
      }
    }, 10);

    pianoKKey.style.fill=`white`;
    pianoKKey.style.transform=`scale(1, 1)`
  }

  if ( (e.key) == "l" || (e.key) == "L" ) {

    window.lHeld = 0;

    let fadeOut = setInterval(function() {
      if (window.lHeld == 0) {
        if (lSound.volume > 0.05)
          lSound.volume -= 0.05;
        else
          clearInterval(fadeOut)
      }
    }, 10);

    pianoLKey.style.fill=`white`;
    pianoLKey.style.transform=`scale(1, 1)`
  }

  if ( (e.key) == ";" ) {

    window.semiHeld = 0;

    let fadeOut = setInterval(function() {
      if (window.semiHeld == 0) {
        if (semiSound.volume > 0.05)
          semiSound.volume -= 0.05;
        else
          clearInterval(fadeOut)
      }
    }, 10);

    pianoEndKey.style.fill=`white`;
    pianoEndKey.style.transform=`scale(1, 1)`
  }

});