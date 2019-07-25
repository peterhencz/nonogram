"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

console.log("kiscica");

import { tile, mapSize } from "./sizes";
import { level1 } from "./maps";
import "./styles/cica.scss";

console.log("tile:", tile);
export class Board {
  tile = tile;
  Map = mapSize;
  gameMap = level1;

  drawTile(tileClass: string, x: number, y: number, inner?: string) {
    let tile = document.createElement("div");
    tile.classList.add(tileClass);
    tile.innerHTML = inner;
    console.log(x);
    if (x % 5 == 0) {
      tile.style.borderBottom = "2px solid #333";
    }
    if (x % 10 == 0) {
      tile.style.borderBottom = "3px solid #333";
    }
    if (y % 5 == 0) {
      tile.style.borderRight = "2px solid #333";
    }
    if (y % 10 == 0) {
      tile.style.borderRight = "3px solid #333";
    }
    let board = document.getElementById("board");
    board.appendChild(tile);
  }

  drawBoardSize() {
    let board = document.getElementById("board");
    board.style.width = mapSize * tile + "px";
  }

  drawMap() {
    console.log("clg: ", this.tile, this.Map, this.gameMap);
    this.drawBoardSize();
    for (let x = 0; x < this.Map; x++) {
      for (let y = 0; y < this.Map; y++) {
        switch (this.gameMap[x][y]) {
          case 0:
            this.drawTile("blank_tile", x, y, "");
            break;

          case 1:
            this.drawTile("full_tile", x, y, "");
            break;
          case 2:
            this.drawTile("info", x, y, "⚓");
            break;
          case 3:
            this.drawTile("emo", x, y, "🤘");
            break;
          default:
            this.drawTile("blank_tile", x, y, "");
        }
      }
    }
  }
}

export let newBoard = new Board();
newBoard.drawMap();
