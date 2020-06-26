class ClickCounter {

    constructor() {
        this._autoClickerCost = 100;
        this._autoClickerCount = 0;
        this._donutCount = 0;
    }

    deductCostOfAutoClicker() {
        this._donutCount -= this._autoClickerCost;
    }

    getAutoClickerCount() {
        return this._autoClickerCount;
    }

    getDonutCount() {
        return this._donutCount;
    }

    hasAvailableDonutCountToBuy(cost) {
        return this._donutCount >= cost;
    }

    increaseAutoClickerCost() {
        this._autoClickerCost += this._autoClickerCost * .1;
    }

    increaseAutoClickerCount() {
        this._autoClickerCount++;
    }

    purchaseAutoClicker() {
        if (!this.hasAvailableDonutCountToBuy(this._autoClickerCost)) {
            throw new Error("Insufficient donuts to buy AutoClicker.");
        }
        this.deductCostOfAutoClicker();
        this.increaseAutoClickerCount();
        this.increaseAutoClickerCost();
    }

    recordAutoClicks() {
        this._donutCount += this._autoClickerCount;
    }

    recordClick() {
        this._donutCount++;
    }
}