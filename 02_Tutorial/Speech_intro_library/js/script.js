/**
 * Intro and library
 * Line On
 */

"use strict";

let speechRecognizer = new p5.Speech();

function preload() {
}

function setup() {
speechRecognizer.onResult = handleResult;
speechRecognizer.start();
}

function draw() {

}

function handleResult() {
    if (speechRecognizer.resultValue === true) {
    console.log(speechRecognizer.resultString);
    }
}