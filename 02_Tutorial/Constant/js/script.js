/**
 * Constant
 * Line On
 */
const TILE_SIZE = 50;
const COLUMNS = 10;
const ROWS = 10;

function preload() {
}
// Creates the canvas
function setup() {
    // Define the canvas size in terms of the grid constants
    createCanvas(TILE_SIZE * COLUMNS, TILE_SIZE * ROWS);
  }


function draw() {
    background(0);
    //loop at each row
    for (let row = 0; row < ROWS; row++){
        for (let col = 0; col < COLUMNS; col++){
            drawTile(row,col);
        }
    }
}

function drawTile(row,col) {
    let x = row*TILE_SIZE;
    let y = col*TILE_SIZE;

    push()
    noStroke();
    let grey = random(50, 200);
    fill(grey);
    rect(x, y, TILE_SIZE, TILE_SIZE)
    pop()
}