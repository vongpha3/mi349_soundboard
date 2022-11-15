
let buttons = document.getElementsByClassName("sound");
let switches = document.getElementsByClassName("switch");

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
let audio = new Audio();
let dog = new Audio("sounds/dog_bark5.wav");
let chainsaw = new Audio("sounds/chainsaw.wav");
let man =  new Audio("sounds/scream_male.wav");
let motor =  new Audio("sounds/motorcycle2.wav");
let click =  new Audio("sounds/click_x.wav");
let song =  new Audio("sounds/song.mp3");

let tvImage = document.getElementById("tv");
let dogImage = "images/dogTV.png";
let chainsawImage = "images/chainsawTV.png";
let manImage = "images/manTV.png";
let motorImage = "images/motorTV.png";
let onImage = "images/blankTV.png";
let offImage = "images/offTV.png";
let songImage = "images/songTV.png";

let tvOn = false;

function playSound(button) {

    let id = button.id;

    if (id == "sound1") {

        audio = dog;
        tvImage.src = dogImage;

    }
    else if (id == "sound2") {

        audio = chainsaw;
        tvImage.src = chainsawImage;

    }
    else if (id == "sound3") {

        audio = man;
        tvImage.src = manImage;

    }
    else if (id == "sound4") {

        audio = motor;
        tvImage.src = motorImage;

    }
    else if (id == "sound5") {

        audio = song;
        tvImage.src = songImage;

    }

    audio.play();

}

function controlTV(control) {

    let id = control.id;

    if (id == "on") {

        tvOn = true;
        tvImage.src = onImage;

    }
    else if (id == "off") {

        audio.pause();
        tvOn = false;
        tvImage.src = offImage;

    }

}

for (let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function onClick() {

        audio.pause();
        audio.currentTime = 0;
        if (tvOn) {

            playSound(buttons[i]);

        }

    });

}

for (let j = 0; j < switches.length; j++) {

    switches[j].addEventListener("click", function onClick() {

        audio.pause();
        audio.currentTime = 0;
        click.play();

        controlTV(switches[j]);

    });

}