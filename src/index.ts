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

  drawMap() {
    for (let x = 0; x < this.Map; x++) {
      for (let y = 0; y < this.Map; y++) {
        switch (this.gameMap[x][y]) {
          case 0:
            var tile = document.createElement("div");
            tile.classList.add("ccc");
            var element = document.getElementById("sand");
            element.appendChild(tile);
            break;

          default:
            ctx.drawImage(
              document.getElementById("palm") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
        }
      }
    }
  }
}

export let newBoard = new Board();
newBoard.drawMap();
