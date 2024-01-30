"use strict";

let myData;
let myTarot;
let fortune;
let meanings;

function preload() {
    myData = loadJSON("assets/data/archetypes.json");
    myTarot = loadJSON("assets/data/tarot.json");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    background(0);

    push();
    textSize(18);
    textAlign(CENTER);
    fill(255,255,0);
    text(fortune, width/2, height/2);
    text(meanings, width/2, height*0.75);
    pop();
}

function mousePressed() {
    let myInterpretation = random(myTarot.tarot_interpretations);
    fortune = random(myInterpretation.fortune_telling);
    meanings = random(myInterpretation.meanings.light);
}


function drawArchetypes(){
    let textFromJSON = myData.Hero.nature; // load the value of the nature property of hero from the json file

    let dogHeight = myData.Dog.height;

    let aprilFool = myData.Fool.synonyms[2];

    push();
    textSize(18);
    textAlign(CENTER);
    fill(255,255,0);
    text(textFromJSON + " " + dogHeight + " " + aprilFool ,width/2,height/2);
    pop();
}