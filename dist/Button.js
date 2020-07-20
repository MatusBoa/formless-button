"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Button = /** @class */ (function () {
    function Button(root) {
        this.root = root;
        this.method = root.dataset.method;
        this.url = root.dataset.url;
    }
    Button.prototype.getMethod = function () {
        return this.method;
    };
    Button.prototype.getUrl = function () {
        return this.url;
    };
    return Button;
}());
exports.default = Button;
