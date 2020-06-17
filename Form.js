import MethodConvertor from "./MethodConvertor";

export default class Form
{
    constructor(method, url) {
        this.root = document.createElement("form");

        this.root.setAttribute("method", MethodConvertor.convert(method));
        this.root.setAttribute("action", url);
    }

    createTokenInput(token) {
        const tokenInput = document.createElement("input");

        tokenInput.setAttribute("name", "_token");
        tokenInput.setAttribute("type", "hidden");
        tokenInput.setAttribute("value", token);

        this.root.append(tokenInput);

        return this;
    }

    createMethodInput(method) {
        const methodInput = document.createElement("input");

        methodInput.setAttribute("name", "_method");
        methodInput.setAttribute("type", "hidden");
        methodInput.setAttribute("value", method);

        this.root.append(methodInput);

        return this;
    }

    submit() {
        document.body.appendChild(this.root);

        this.root.submit();
    }

    static create(method, url) {
        const form = new Form(method, url);

        return form
            .createTokenInput(
                document.querySelector("meta[name=csrf-token]").getAttribute("content")
            )
            .createMethodInput(method);
    }
}