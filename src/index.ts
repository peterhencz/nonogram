"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

console.log("kiscica");

import { tile, mapSize } from "./sizes";
import "./styles/cica.scss";

console.log("tile:", tile);
export class Board {
  tile = tile;
  Map = mapSize;

  drawMap() {
    ctx.drawImage(
      document.getElementsByClassName("sand") as HTMLImageElement,
      20 * this.tile,
      20 * this.tile
    );
  }
}
