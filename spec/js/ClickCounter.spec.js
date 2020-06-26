describe("ClickCounter is a class that counts clicks and turns them into donuts, a currency to enhance the ability to buy upgrades to your clicking button.", () => {
    let underTest;
    beforeEach(() => {
        underTest = new ClickCounter();
    });
    describe("FEATURE : Have a way to count clicks, recording them as donuts.", () => {
        for (let i = 0; i < 10; i++) {
            it("Should record " + i + " click(s), increasing the donut count to " + i + ".", () => {
                expectOneToOneClickToDonutCount(i, underTest);
            });
        }
    });
    describe("FEATURE : Be able to purchase the first AutoClicker with 100 donuts from your donut count.", () => {
        it("New ClickCounter objects should have 0 AutoClickers.", () => {
            expect(underTest.getAutoClickerCount()).toBe(0);
        });
        it("Given a donut count of 100, purchasing an AutoClicker should reduce your donut total to 0.", () => {
            recordClicks(100, underTest);
            underTest.purchaseAutoClicker();
            expect(underTest.getDonutCount()).toBe(0);
        });
        it("Given a donut count of 101, purchasing an AutoClicker should reduce your donut total to 1.", () => {
            recordClicks(101, underTest);
            underTest.purchaseAutoClicker();
            expect(underTest.getDonutCount()).toBe(1);
        });
        it("Given a donut count of 101, purchasing an AutoClicker should increase your AutoClicker total to 1.", () => {
            recordClicks(101, underTest);
            underTest.purchaseAutoClicker();
            expect(underTest.getAutoClickerCount()).toBe(1);
        })
    });
    describe("FEATURE : The cost of each AutoClicker will go up with each purchase.", () => {
        it("Given a donut count of 210, purchasing 2 clickers should decrease the donut count to 0.", () => {
            recordClicks(210, underTest);
            underTest.purchaseAutoClicker();
            underTest.purchaseAutoClicker();
            expect(underTest.getDonutCount()).toBe(0);
        });
        it("Given a donut count of 331, purchasing 3 clickers should decrease the donut count to 0.", () => {
            recordClicks(331, underTest);
            underTest.purchaseAutoClicker();
            underTest.purchaseAutoClicker();
            underTest.purchaseAutoClicker();
            expect(underTest.getDonutCount()).toBe(0);
        });
    });
    describe("FEATURE : Ensure that there are enough clicks to buy a AutoClicker", () => {
        /*
        #### FEATURE : Ensure that there are enough clicks to buy a _Clicking Companion_.
        > As the game designer, I want to ensure that players have to put the game into a proper state to be able to purchase a _Clicking Companion_, so that the game has a challenge.
        - Prevent the _Clicking Companion_ count from going up if there are not enough clicks to purchase a _Companion_.
        */
        it("Given a donut count of 99, attempting to buy a AutoClicker will throw an error.", () => {
            recordClicks(99, underTest);
            expect(() => underTest.purchaseAutoClicker()).toThrow(new Error("Insufficient donuts to buy AutoClicker."))
        })
    });
});

function expectOneToOneClickToDonutCount(expectedClickCount, clickCounter) {
    recordClicks(expectedClickCount, clickCounter);
    expect(clickCounter.getDonutCount()).toBe(expectedClickCount);
}

function recordClicks(clickCount, clickCounter) {
    for (let i = 0; i < clickCount; i++) {
        clickCounter.recordClick();
    }
}