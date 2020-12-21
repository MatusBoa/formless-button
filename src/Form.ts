import MethodConvertor from "./MethodConvertor"

export default class Form
{
    protected root: HTMLFormElement

    constructor(method: string, url: string) {
        this.root = document.createElement("form");

        this.root.setAttribute("method", MethodConvertor.convert(method));
        this.root.setAttribute("action", url);
    }

    protected createTokenInput(token: string): Form
    {
        const tokenInput: HTMLInputElement = document.createElement("input");

        tokenInput.setAttribute("name", "_token");
        tokenInput.setAttribute("type", "hidden");
        tokenInput.setAttribute("value", token);

        this.root.append(tokenInput);

        return this;
    }

    protected createMethodInput(method: string): Form
    {
        const methodInput: HTMLInputElement = document.createElement("input");

        methodInput.setAttribute("name", "_method");
        methodInput.setAttribute("type", "hidden");
        methodInput.setAttribute("value", method);

        this.root.append(methodInput);

        return this;
    }

    public submit(): void
    {
        document.body.appendChild(this.root);

        this.root.submit();
    }

    public static create(method: string, url: string): Form
    {
        const form: Form = new Form(method, url);

        return form
            .createTokenInput(
                document.querySelector("meta[name=csrf-token]").getAttribute("content")
            )
            .createMethodInput(method);
    }
}