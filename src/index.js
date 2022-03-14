import './style.css';
import { SVG } from "@svgdotjs/svg.js";
import { random } from "@georgedoescode/generative-utils";
import colors from 'nice-color-palettes';

let numRows, numCols, draw, squareSize, palette;

function generateGrid() {
  // Remove SVG
  document.querySelector(".container").innerHTML = "";
  renderGrid();
}

function renderGrid() {
  palette = random(colors);
  squareSize = 30;
  numRows = random(4, 8, true);
  numCols = random(4, 8, true);

  draw = SVG()
    .addTo(".container")
    .size("100%", "100%")
    .viewbox(`0 0 ${numRows * squareSize} ${numCols * squareSize}`);

  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
      generateBlock(i, j);
    }
  }
}

function generateBlock(i, j) {
  const x = i * squareSize;
  const y = j * squareSize;

  renderBlock(x, y);
}

function renderBlock(x, y) {

  // Create group element
  const group = draw.group().addClass("draw-block");

  const background = random(palette);

  // Draw Square
  group.rect(squareSize, squareSize).fill(background).move(x, y);
}

function init() {
  generateGrid();

  document.querySelector('.grid-button').addEventListener(('click'), generateGrid);
}

init();