// Controller

setInterval(Game, 100);
function Game() {
    let payout = 0;
    payout += gameUpgrades();
    model.player.money += payout;
    // checkUnlocks();
    if (payout > 0) updateView();
}

function gameUpgrades() {
    let payout = 0;
    if (model.autoClicker.amount > 0) {
        payout += (model.autoClicker.amount * model.autoClicker.strength) / 10;
    }
    return payout;
}

function checkUnlocks() {
    for (const key in model.buffs.autoClicker) {
        model.buffs.autoClicker[key]
    };

}

function clickDivEnter() {
    if (model.player.clicker.intervalActive) return;
    model.player.clicker.intervalId = setInterval(() => {
        model.player.money = model.player.money + model.player.clicker.cursorStrength;
        updateView();
    }, 1000);
    model.player.clicker.intervalActive = true;
}

function clickDivOut() {
    clearInterval(model.player.clicker.intervalId);
    model.player.clicker.intervalActive = false;
    updateView();
}

function buyAutoClicker() {
    let autoClicker = model.autoClicker;
    if (model.player.money < autoClicker.price) return;

    model.player.money = model.player.money - autoClicker.price;
    autoClicker.amount++;
    autoClicker.price = autoClicker.price + Math.floor((autoClicker.price / 2) * Math.exp(1));
    updateView();
}