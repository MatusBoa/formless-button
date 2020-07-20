import Form from "./Form";
import Button from "./Button";

export default new class FormlessButton
{
    protected buttons: NodeListOf<HTMLButtonElement>

    constructor() {
        this.buttons = document.querySelectorAll("button[data-method][data-url]")

        if (this.buttons.length > 0) {
            this.registerEvents()
        }
    }

    protected registerEvents(): void
    {
        for (const button of this.buttons as any) {
            button.addEventListener("click", e => this.handleEvent(
                new Button(<HTMLButtonElement> button)
            ));
        }
    }

    protected handleEvent(Button: Button): void
    {
        Form.create(
            Button.getMethod(),
            Button.getUrl()
        ).submit()
    }
}