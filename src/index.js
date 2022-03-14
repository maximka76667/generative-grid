import './style.css';
import { SVG } from "@svgdotjs/svg.js";
import { random } from "@georgedoescode/generative-utils";
import colors from 'nice-color-palettes';
import tinycolor from 'tinycolor2';
import gsap from 'gsap';
import shapes from './shapes'
import { squareSize } from './config';

let numRows, numCols, draw, palette;

function generateGrid() {
  // Remove SVG
  document.querySelector(".container").innerHTML = "";
  renderGrid();
}

function renderGrid() {
  palette = random(colors);
  numRows = random(4, 8, true);
  numCols = random(4, 8, true);

  const bg = tinycolor
    .mix(palette[0], palette[2], 50)
    .desaturate(10)
    .toString();

  const bgInner = tinycolor(bg).lighten(10);
  const bgOuter = tinycolor(bg).darken(10);

  gsap.to(".container", {
    "background-image": `radial-gradient(${bgInner} 0%, ${bgOuter} 100%)`,
    duration: 0.5,
  })

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

  const shape = random(shapes);

  const { background, foreground } = getTwoRandomColors();

  shape(draw, x, y, background, foreground);
}

function getTwoRandomColors() {
  const colors = [...palette];

  const backgroundIndex = random(0, palette.length - 1, true);
  colors.splice(backgroundIndex, 1);

  return { background: palette[backgroundIndex], foreground: random(colors) };
}

function init() {
  generateGrid();

  document.querySelector('.grid-button').addEventListener(('click'), generateGrid);
}

init();