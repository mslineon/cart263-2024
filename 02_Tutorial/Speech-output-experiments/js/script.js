/**
 * Speech Output experiments
 * Line On
 */

"use strict";

const speechSynth = new p5.speech();

function preload() {

}


function setup() {

}

function draw() {

}

function mousePressed() {
    speechSynth.speak(`hello`);
}