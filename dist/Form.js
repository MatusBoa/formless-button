"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MethodConvertor_1 = __importDefault(require("./MethodConvertor"));
var Form = /** @class */ (function () {
    function Form(method, url) {
        this.root = document.createElement("form");
        this.root.setAttribute("method", MethodConvertor_1.default.convert(method));
        this.root.setAttribute("action", url);
    }
    Form.prototype.createTokenInput = function (token) {
        var tokenInput = document.createElement("input");
        tokenInput.setAttribute("name", "_token");
        tokenInput.setAttribute("type", "hidden");
        tokenInput.setAttribute("value", token);
        this.root.append(tokenInput);
        return this;
    };
    Form.prototype.createMethodInput = function (method) {
        var methodInput = document.createElement("input");
        methodInput.setAttribute("name", "_method");
        methodInput.setAttribute("type", "hidden");
        methodInput.setAttribute("value", method);
        this.root.append(methodInput);
        return this;
    };
    Form.prototype.submit = function () {
        document.body.appendChild(this.root);
        this.root.submit();
    };
    Form.create = function (method, url) {
        var form = new Form(method, url);
        return form
            .createTokenInput(document.querySelector("meta[name=csrf-token]").getAttribute("content"))
            .createMethodInput(method);
    };
    return Form;
}());
exports.default = Form;
