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
    /*
    > As a user, I want to be able to purchase _Auto Clickers_, so that I don't have to keep clicking a button all day.0
    - Can retrieve a _Clicking Companion_ count.
    - Can add to the _Clicking Companion_ count.
    - Subtract the amount of the _Clicking Companion_ cost from your click count.
    */
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