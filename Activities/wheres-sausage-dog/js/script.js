/**
 * Title of Project
 * Author Name
 * 
 * This is a template. You must fill in the title, author, 
 * and this description to match your project!
 */

"use strict";

const NUM_ANIMAL_DISPLAY = 10;
const ANIMAL_IMAGE_PREFIX = `assets/images/animal-images/animal`;
const SAUSAGE_DOG_IMAGE = `assets/images/animal-images/sausage-dog.png`;

const NUM_ANIMALS = 100; 


let animals = [];
let animalImages = [];
let animalObjects = [];
let sausageDogImage;
let sausageDog;

function preload() {
    for (let i = 0; i < NUM_ANIMAL_DISPLAY; i++) {
        let animalImage = loadImage(`${ANIMAL_IMAGE_PREFIX}${i}.png`);
        animalImages.push(animalImage);
    }
    sausageDogImage = loadImage(`${SAUSAGE_DOG_IMAGE}`);
}

function setup() {
    createCanvas(windowWidth, windowHeight);

    drawAnimal();
    createSausageDog();
}

function drawAnimal() {
    for (let i = 0; i < NUM_ANIMALS; i++) {
        let animal = createRandomAnimal();
        animals.push(animal);
    }
}

function createRandomAnimal() {
    let x = random(0, width);
    let y = random(0, height);
    let animalImage = random(animalImages);
    let animal = new Animal(x, y, animalImage);
    return animal;
}

function createSausageDog() {
    let x = random(0, width);
    let y = random(0, height);
    sausageDog = new SausageDog(x,y, sausageDogImage);
}

function draw() {
    background(255);

    updateAnimals();
    updateSausageDog();
}

function updateAnimals() {
    for (let i = 0; i < animals.length; i++) {
        animals[i].update();
    }
}

function updateSausageDog() {
    sausageDog.update();
}

function mousePressed() {
    sausageDog.mousePressed();
}