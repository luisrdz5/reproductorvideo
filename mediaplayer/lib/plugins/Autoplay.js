"use strict";
exports.__esModule = true;
var Autoplay = /** @class */ (function () {
    function Autoplay() {
    }
    Autoplay.prototype.run = function (player) {
        if (!player.media.muted) {
            player.media.muted = true;
        }
        player.play();
    };
    return Autoplay;
}());
exports["default"] = Autoplay;
