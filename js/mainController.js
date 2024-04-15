// Controller

startGame();
function startGame() {
    model.game.intervalId = setInterval(Game, 100);
}

function Game() {
    let payout = 0;
    payout += gameUpgrades();
    model.player.money += payout;
    model.player.totalManaGathered += payout;
    if (payout > 0) updateView();
    if (findBuff(55).unlocked) youWonAlert();
    saveGame();
}

function gameUpgrades() {
    let payout = 0;
    for (upgrade of model.upgrades) {
        if (upgrade.amount > 0) {
            payout += (upgrade.amount * upgrade.strength) / 10;
        }
    }
    return payout;
}

function clickDivEnter() {
    if (model.player.clicker.intervalActive) return;
    model.player.clicker.intervalId = setInterval(() => {
        model.player.money += model.player.clicker.cursorStrength;
        model.player.totalManaGathered += model.player.clicker.cursorStrength;
        updateView();
    }, 1000);
    model.player.clicker.intervalActive = true;
    model.player.clicker.sparklesIsOn = true;
    updateView();
}

function clickDivOut() {
    clearInterval(model.player.clicker.intervalId);
    model.player.clicker.intervalActive = false;
    model.player.clicker.sparklesIsOn = false;
    updateView();
}

function buyAutoClicker(upgradeId) {
    const upgrade = findUpgrade(upgradeId);
    if (model.player.money < upgrade.price) return;

    model.player.money = model.player.money - upgrade.price;
    upgrade.amount++;
    upgrade.price += Math.floor(upgrade.price * 0.2);
    updateView();
}

function buyBuff(buffiD, upgradeId) {
    const buff = findBuff(buffiD);
    const upgrade = findUpgrade(upgradeId);

    if (model.player.money < buff.price || buff.unlocked) return;
    model.player.money -= buff.price;
    upgrade.strength = upgrade.strength * buff.buffMulti;
    buff.unlocked = true;
    updateView();
}

function youWonAlert() {
    alert("Congrats you have completed the game!");
}
