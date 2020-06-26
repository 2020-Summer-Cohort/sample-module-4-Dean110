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

    increaseAutoClickerCost() {
        this._autoClickerCost += this._autoClickerCost * .1;
    }

    increaseAutoClickerCount() {
        this._autoClickerCount++;
    }

    purchaseAutoClicker() {
        this.deductCostOfAutoClicker();
        this.increaseAutoClickerCount();
        this.increaseAutoClickerCost();
    }

    recordClick() {
        this._donutCount++;
    }
}