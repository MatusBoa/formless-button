import Form from "./Form";
import Button from "./Button";

export default new class FormlessButton
{
    constructor() {
        this.buttons = document.querySelectorAll("button[data-method][data-url]");

        if (this.buttons.length > 0) {
            this.registerEvents();
        }
    }

    registerEvents() {
        for (const button of this.buttons) {
            button.addEventListener("click", e => this.handleEvent(
                new Button(button)
            ));
        }
    }

    /**
     * @param {Button} Button
     */
    handleEvent(Button) {
        Form.create(
            Button.getMethod(),
            Button.getUrl()
        ).submit();
    }
}