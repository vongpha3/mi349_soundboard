
let buttons = document.getElementsByClassName("sound");

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio
let dog = new Audio("sounds/dog_bark5.wav");
let chainsaw = new Audio("sounds/chainsaw.wav");
let man =  new Audio("sounds/scream_male.wav");
let motor =  new Audio("sounds/motorcycle2.wav");

let tvImage = document.getElementById("tv");
let dogImage = "images/dogTV.png";
let chainsawImage = "images/chainsawTV.png";
let manImage = "images/manTV.png";
let motorImage = "images/motorTV.png";

function playSound(button) {

    let id = button.id;

    if (id == "sound1") {

        dog.play();
        tvImage.src = dogImage;

    }
    else if (id == "sound2") {

        chainsaw.play();
        tvImage.src = chainsawImage;

    }
    else if (id == "sound3") {

        man.play();
        tvImage.src = manImage;

    }
    else if (id == "sound4") {

        motor.play();
        tvImage.src = motorImage;

    }

}

for (let i = 0; i < buttons.length; i++) {

    console.log(buttons[i]);

    buttons[i].addEventListener("click", function onClick() {

        playSound(buttons[i]);

    });

}