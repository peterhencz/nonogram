"use strict";

const canvas = document.querySelector(".main-canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

import { Character } from "./Character";
import { Enemy } from "./Enemy";
import { onKeyPress } from "./control";
import { level1 } from "./Map";
import { tile } from "./sizes";
import { mapsize } from "./sizes";
import { Weapon } from "./Weapon";
// import { hero } from "./Character";

export class Board {
  tile = tile;
  Map = mapsize;
  xPos = 0;
  yPos = 0;
  gameMap = level1;

  drawMap() {
    for (let x = 0; x < this.Map; x++) {
      for (let y = 0; y < this.Map; y++) {
        switch (this.gameMap[x][y]) {
          case 0:
            ctx.drawImage(
              document.getElementById("sand") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 2:
            ctx.drawImage(
              document.getElementById("dune1") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 3:
            ctx.drawImage(
              document.getElementById("dune2") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 4:
            ctx.drawImage(
              document.getElementById("dunelow1") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 5:
            ctx.drawImage(
              document.getElementById("dunelow2") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 6:
            ctx.drawImage(
              document.getElementById("cactus1") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 7:
            ctx.drawImage(
              document.getElementById("cactus2") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 8:
            ctx.drawImage(
              document.getElementById("cactus3") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 9:
            ctx.drawImage(
              document.getElementById("stones") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 10:
            ctx.drawImage(
              document.getElementById("pyramid1") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 11:
            ctx.drawImage(
              document.getElementById("pyramid2") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 12:
            ctx.drawImage(
              document.getElementById("pyramid3") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 13:
            ctx.drawImage(
              document.getElementById("pyramid4") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 14:
            ctx.drawImage(
              document.getElementById("bones") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
            break;

          case 15:
            ctx.drawImage(
              document.getElementById("tent") as HTMLImageElement,
              y * this.tile,
              x * this.tile
            );
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
