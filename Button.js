export default class Button
{
    constructor(root) {
        this.root = root;
        this.method = root.dataset.method;
        this.url = root.dataset.url;
    }

    getMethod() {
        return this.method;
    }

    getUrl() {
        return this.url;
    }
}