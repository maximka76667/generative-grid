import { squareSize } from './config';
import { random } from "@georgedoescode/generative-utils";

function renderBlock(draw, x, y, background, foreground) {

  // Create group element
  const group = draw.group().addClass("block");

  // Draw Square
  group.rect(squareSize, squareSize).fill(background).move(x, y);
}

function renderCircle(draw, x, y, background, foreground) {
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

function renderOppositeCircles(draw, x, y, background, foreground) {
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

export default [
  renderCircle,
  renderOppositeCircles,
];