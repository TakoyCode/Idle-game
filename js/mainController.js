// Controller

setInterval(Game, 100);
function Game() {
    let payout = 0;
    payout += gameUpgrades();
    model.player.money += payout;
    if (payout > 0) updateView();
}

function gameUpgrades() {
    let payout = 0;
    if (model.upgrades.autoClicker.amount > 0) {
        payout += (model.upgrades.autoClicker.amount * model.upgrades.autoClicker.strength) / 10;
    }
    return payout;
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
    let autoClicker = model.upgrades.autoClicker;
    if (model.player.money < autoClicker.price) return;

    model.player.money = model.player.money - autoClicker.price;
    autoClicker.amount++;
    autoClicker.price = autoClicker.price + Math.floor((autoClicker.price / 10) * Math.exp(1));
    updateView();
}

function buyBuff(buffiD, upgradeId) {
    const buff = findBuff(buffiD);
    const upgrade = findUpgrade(upgradeId);

    if (model.player.money < buff.price || buff.unlocked) return;
    model.player.money -= buff.price;
    upgrade.strength = buff.buff;
    buff.unlocked = true;
    updateView();
}
