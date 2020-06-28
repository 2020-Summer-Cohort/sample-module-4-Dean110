export {
    ClickButton
}
class ClickButton {
    constructor(attributes) {
        this.attributes = attributes;
        this.button = document.createElement('button');
        this.button.innerText = this.attributes.innerText;
    };


    render() {
        return this.button;
    }
}