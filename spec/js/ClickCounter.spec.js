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
        it("Given a donut count of 99, attempting to buy a AutoClicker will throw an error.", () => {
            recordClicks(99, underTest);
            expect(() => underTest.purchaseAutoClicker()).toThrow(new Error("Insufficient donuts to buy AutoClicker."))
        })
    });
    describe("FEATURE : The amount of AutoClickers affect the amount of donuts added when an 'execute auto clicks' event is called.", () => {
        it("Given a autoClick count of one, the donut count should go up by one when by one when the \`recordAutoClicks\` method is called.", () => {
            recordClicks(100, underTest);
            underTest.purchaseAutoClicker();
            expectDonutsFromAutoClicker(underTest, 1);
        });
        it("Given a autoClick count of one, the donut count should go up by one when by one when the \`recordAutoClicks\` method is called.", () => {
            recordClicks(100, underTest);
            underTest.purchaseAutoClicker();
            expectDonutsFromAutoClicker(underTest, 2);
        });
    });
    describe("FEATURE : Be able to purchase the first _Donut Multiplier_ with 10 clicks from your click count.", () => {
        it("Given a donut count of 10, purchasing 1 Donut Multiplier will increase the Donut Multiplier count to 1.", () => {
            recordClicks(10, underTest);
            underTest.purchaseDonutMultiplier();
            expect(underTest.getDonutMultiplierCount()).toBe(1);
        });
        it("Given a donut count of 10, purchasing 1 Donut Multiplier will decrease the donut count to 0", () => {
            recordClicks(10, underTest);
            underTest.purchaseDonutMultiplier();
            expect(underTest.getDonutCount()).toBe(0);
        });
        it("Given a donut count of 21, purchasing 2 Donut Multipliers will increase the Donut Multiplier count to 2.", () => {
            recordClicks(21, underTest);
            underTest.purchaseDonutMultiplier();
            underTest.purchaseDonutMultiplier();
            expect(underTest.getDonutMultiplierCount()).toBe(2);
        });
    });
    describe("FEATURE : The cost of each Donut Multiplier will go up with each purchase.", () => {
        it("Given a donut count of 21, purchasing 2 Donut Multipliers will decrease the donut count to 0.", () => {
            recordClicks(21, underTest);
            underTest.purchaseDonutMultiplier();
            underTest.purchaseDonutMultiplier();
            expect(underTest.getDonutCount()).toBe(0);
        });
        it("Given a donut count of 34, purchasing 3 Donut Multipliers will increase the donut count to 1.", () => {
            recordClicks(34, underTest);
            underTest.purchaseDonutMultiplier();
            underTest.purchaseDonutMultiplier();
            underTest.purchaseDonutMultiplier();
            expect(underTest.getDonutCount()).toBe(1);
        });
    });
    describe("FEATURE : Ensure that there are enough clicks to buy a Donut Multiplier.", () => {
        it("Given a donut count of 9, attempting to purchase a Donut Multiplier will throw an error.", () => {
            recordClicks(9, underTest);
            expect(() => underTest.purchaseDonutMultiplier()).toThrow(new Error("Insufficient donuts to buy Donut Multiplier."))
        })
    });
    describe('FEATURE : The first Donut Multiplier should increase the value of a click 1.2x.', () => {
        it('Given a donut count of 0 and 1 Donut Multiplier, 10 clicks should produce 12 donuts.', () => {
            recordClicks(10, underTest);
            underTest.purchaseDonutMultiplier();
            recordClicks(10, underTest);
            expect(underTest.getDonutCount()).toBe(12);
        });
    });
    describe('FEATURE : The amount the subsequent Donut Multipliers click bonus will go up exponentially.', () => {
        it('Given a donut count of 0 and 2 Donut Multipliers, 10 clicks should produce 14 donuts.', () => {
            recordClicks(21, underTest);
            underTest.purchaseDonutMultiplier();
            underTest.purchaseDonutMultiplier();
            recordClicks(10, underTest);
            expect(underTest.getDonutCount()).toBe(14);
        });
    });
    describe('FEATURE : The Donut Multipliers click bonus will apply to clicks from the Click Companions.', () => {
        it('Given a donut count of 0, two autoClickers, and 1 Donut Multiplier; 10 calls to \`recordAutoClicks\` method should produce 24 donuts.', () => {
            recordClicks(220, underTest);
            underTest.purchaseAutoClicker();
            underTest.purchaseAutoClicker();
            underTest.purchaseDonutMultiplier();
            recordAutoClicks(10, underTest);
            expect(underTest.getDonutCount()).toBe(24);
        });
    });
});

function expectDonutsFromAutoClicker(underTest, autoClickCount) {
    const preAutoClickDonutCount = underTest.getDonutCount();
    recordAutoClicks(autoClickCount, underTest);
    const postAutoClickDonutCount = underTest.getDonutCount();
    expect(postAutoClickDonutCount - preAutoClickDonutCount).toBe(autoClickCount);
}

function recordAutoClicks(count, clickCounter) {
    for (let i = 0; i < count; i++) {
        clickCounter.recordAutoClicks();
    }
}

function expectOneToOneClickToDonutCount(expectedClickCount, clickCounter) {
    recordClicks(expectedClickCount, clickCounter);
    expect(clickCounter.getDonutCount()).toBe(expectedClickCount);
}

function recordClicks(clickCount, clickCounter) {
    for (let i = 0; i < clickCount; i++) {
        clickCounter.recordClick();
    }
}