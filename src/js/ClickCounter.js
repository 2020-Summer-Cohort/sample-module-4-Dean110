class ClickCounter {

    constructor() {
        this._autoClickerCost = 100;
        this._autoClickerCount = 0;
        this._donutCount = 0;
        this._donutMultiplierCost = 10;
        this._donutMultiplierCount = 0;
    }

    deductCostOfAutoClicker() {
        this._donutCount -= this._autoClickerCost;
    }

    getAutoClickerCount() {
        return this._autoClickerCount;
    }

    getDonutCount() {
        return Math.round(this._donutCount);
    }

    getDonutMultiplierCount() {
        return this._donutMultiplierCount;
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

    purchaseDonutMultiplier() {
        //Math.round(this.culminationCompounderCost)
        if (!this.hasAvailableDonutCountToBuy(this._donutMultiplierCost)) {
            throw new Error("Insufficient donuts to buy Donut Multiplier.");
        }
        this._donutCount -= Math.round(this._donutMultiplierCost);
        this._donutMultiplierCost += this._donutMultiplierCost * .1;
        this._donutMultiplierCount++;
    }

    recordAutoClicks() {
        for (let i = 0; i < this._autoClickerCount; i++) {
            this.recordClick();
        }
    }

    recordClick() {
        this._donutCount += Math.pow(1.2, this._donutMultiplierCount);
    }
}