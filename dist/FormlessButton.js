"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Form_1 = __importDefault(require("./Form"));
var Button_1 = __importDefault(require("./Button"));
exports.default = new /** @class */ (function () {
    function FormlessButton() {
        this.buttons = document.querySelectorAll("button[data-method][data-url]");
        if (this.buttons.length > 0) {
            this.registerEvents();
        }
    }
    FormlessButton.prototype.registerEvents = function () {
        var _this = this;
        var _loop_1 = function (button) {
            button.addEventListener("click", function (e) { return _this.handleEvent(new Button_1.default(button)); });
        };
        for (var _i = 0, _a = this.buttons; _i < _a.length; _i++) {
            var button = _a[_i];
            _loop_1(button);
        }
    };
    FormlessButton.prototype.handleEvent = function (Button) {
        Form_1.default.create(Button.getMethod(), Button.getUrl()).submit();
    };
    return FormlessButton;
}());
