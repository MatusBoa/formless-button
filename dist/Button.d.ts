export default class Button {
    protected root: HTMLButtonElement;
    protected method: string;
    protected url: string;
    constructor(root: HTMLButtonElement);
    getMethod(): string;
    getUrl(): string;
}
