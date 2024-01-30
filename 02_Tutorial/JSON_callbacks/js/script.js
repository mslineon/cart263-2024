"use strict";

let fortune;
let meanings;

let sound;
let soundLoading = false;

function preload() {
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    rectMode(CENTER);
}

function draw() {
    background(0);

    push();
    textSize(18);
    textAlign(CENTER);
    fill(255,255,0);
    text(fortune, width/2, height/2);
    text("and so", width/2, height*.55);
    text(meanings, width/2, height*0.6);
    pop();


}

function mousePressed() {
    loadJSON("assets/data/tarot.json", gotTarotJSONcallback);
    loadSound("assets/sounds/bark.wav", gotBarkSound);
}

function gotBarkSound(bark) {
    sound = bark;
    sound.play();
}


function gotTarotJSONcallback(tarotJSONdata) {
    let myTarot = tarotJSONdata;
    let myInterpretation = random(myTarot.tarot_interpretations);
    fortune = random(myInterpretation.fortune_telling);
    meanings = random(myInterpretation.meanings.light);
}
