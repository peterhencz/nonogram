webpackHotUpdate("main",{

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canvas = document.querySelector(".main-canvas");
var ctx = canvas.getContext("2d");
console.log("kiscica");
var sizes_1 = __webpack_require__(/*! ./sizes */ "./src/sizes.ts");
__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './styles/cica.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
console.log("tile:", sizes_1.tile);
var Board = /** @class */ (function () {
    function Board() {
        this.tile = sizes_1.tile;
        this.Map = sizes_1.mapSize;
    }
    Board.prototype.drawMap = function () {
        ctx.drawImage(document.getElementById("sand"), 20 * this.tile, 20 * this.tile);
    };
    return Board;
}());
exports.Board = Board;


/***/ })

})
//# sourceMappingURL=820fe0c-main-wps-hmr.js.map