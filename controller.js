// Controller

setInterval(Game, 1000);
function Game() {
    let payout = 0;
    payout += gameUpgrades();
    model.playerMoney += payout;
    if (payout > 0) updateView();
}

function gameUpgrades() {
    let payout = 0;
    if (model.autoClicker.amount > 0) {
        payout += (model.autoClicker.amount * model.autoClicker.strength);
    }
    return payout;
}


function clickDiv() {
    model.playerMoney = model.playerMoney + model.cursorStrength;
    updateView();
}

function buyAutoClicker() {
    let autoClicker = model.autoClicker;
    if (model.playerMoney < autoClicker.price) return;

    model.playerMoney = model.playerMoney - autoClicker.price;
    autoClicker.amount++;
    autoClicker.price = autoClicker.price + Math.floor((autoClicker.price / 3) * Math.exp(1));
    updateView();
}