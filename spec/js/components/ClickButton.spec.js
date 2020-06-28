import {
    ClickButton
} from '../../../src/js/components/ClickButton.js'
describe('ClickButton.js is a component generator that creates a \`button\` element and wires it to a \`ClickCounter\` object.', () => {
    // let underTest;
    // beforeEach(() => underTest = new ClickButton())
    describe('The constructor passes a set of attributes to the button component.', () => {
        describe('The attributes include a innerText field for the button.', () => {
            it('given an attribute object with an innerText of "Test Button", the button should have an innerText of "Test Button', () => {
                const underTest = new ClickButton({
                    "innerText": "Test Button"
                });
                const button = underTest.render();
                expect(button.innerText).toBe("Test Button")
            });
        });
    });
});