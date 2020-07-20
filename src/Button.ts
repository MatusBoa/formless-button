export default class Button
{
    protected root: HTMLButtonElement
    protected method: string
    protected url: string

    constructor(root: HTMLButtonElement)
    {
        this.root = root
        this.method = root.dataset.method
        this.url = root.dataset.url
    }

    public getMethod(): string
    {
        return this.method
    }

    public getUrl(): string
    {
        return this.url
    }
}