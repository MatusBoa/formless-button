export default class Form {
    protected root: HTMLFormElement;
    constructor(method: string, url: string);
    protected createTokenInput(token: string): Form;
    protected createMethodInput(method: string): Form;
    submit(): void;
    static create(method: string, url: string): Form;
}
