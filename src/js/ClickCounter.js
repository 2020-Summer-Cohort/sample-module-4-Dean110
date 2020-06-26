class ClickCounter {
    constructor() {
        this._autoClickerCount = 0;
        this._donutCount = 0;
    }
    getAutoClickerCount() {
        return this._autoClickerCount;
    }
    getDonutCount() {
        return this._donutCount;
    }
    purchaseAutoClicker() {
        this._donutCount -= 100;
        this._autoClickerCount++;
    }
    recordClick() {
        this._donutCount++;
    }
}