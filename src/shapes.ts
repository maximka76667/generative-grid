import { squareSize } from './config';
const { random } = require("@georgedoescode/generative-utils");

function renderBlock(draw: any, x: number, y: number, background: string, foreground: string) {

  // Create group element
  const group = draw.group().addClass("block");

  // Draw Square
  group.rect(squareSize, squareSize).fill(background).move(x, y);
}

function renderCircle(draw: any, x: number, y: number, background: string, foreground: string) {
  // Create group element
  const group = draw.group().addClass("circle");

  // Draw Background
  group.rect(squareSize, squareSize).fill(background).move(x, y);

  // Draw Foreground
  group.circle(squareSize).fill(foreground).move(x, y);

  if (random([0, 1])) {
    const scale = random(0.5, 0.9);
    group.circle(squareSize * scale).fill(background).center(x + squareSize * 0.5, y + squareSize * 0.5);
  }
}

function renderOppositeCircles(draw: any, x: number, y: number, background: string, foreground: string) {
  const group = draw.group().addClass("opposite-circles");

  group.rect(squareSize, squareSize).fill(background).move(x, y);

  const circleGroup = draw.group();
  const mask = draw.rect(squareSize, squareSize).fill("#fff").move(x, y);

  const offset = random([
    [0, squareSize, squareSize, 0],
    [0, 0, squareSize, squareSize],
  ]);

  circleGroup.circle(squareSize).fill(foreground).center(x + offset[0], y + offset[1]);

  circleGroup.circle(squareSize).fill(foreground).center(x + offset[2], y + offset[3]);

  circleGroup.maskWith(mask);
  group.add(circleGroup);
}

function renderPlus(draw: any, x: number, y: number, background: string, foreground: string) {
  const group = draw.group().addClass('plus');

  group.rect(squareSize, squareSize).fill(background).move(x, y);

  const xScale = random(0.5, 1);
  const yScale = 0.2;

  const xMargin = (1 - xScale) / 2;
  const yMargin = (1 - yScale) / 2;

  const cross = draw.group();

  cross.rect(squareSize * yScale, squareSize * xScale).fill(foreground).move(x + squareSize * yMargin, y + squareSize * xMargin);
 cross.rect(squareSize * xScale, squareSize * yScale).fill(foreground).move(x + squareSize * xMargin, y + squareSize * yMargin);

  if (random([0, 1])) {
    cross.rotate(45);
  }
}

export default [
  renderCircle,
  renderOppositeCircles,
  renderPlus
];