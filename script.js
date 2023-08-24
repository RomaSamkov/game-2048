import { Grid } from "./grid.js";
import { Tile } from "./tile.js";
import { Cell } from "./cell.js";

console.log(Cell.linkTile);

const gameBoard = document.getElementById("game-board");

const grid = new Grid(gameBoard);
grid.getRandomEmptyCell().linkTile(new Tile(gameBoard));
