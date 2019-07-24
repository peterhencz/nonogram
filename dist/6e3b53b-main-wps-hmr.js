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
__webpack_require__(/*! ./styles/cica.scss */ "./src/styles/cica.scss");
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


/***/ }),

/***/ "./src/styles/cica.scss":
/*!******************************!*\
  !*** ./src/styles/cica.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:5)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> body {\n|   background-color: #c5c5c5;\n| }");

/***/ })

})
//# sourceMappingURL=6e3b53b-main-wps-hmr.js.map