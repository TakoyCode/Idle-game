function updateView() {
    if (model.app.page == null) mainView();
    else if (model.app.page == "upgrades") upgradesView();
}

function findUpgrade(upgradeId) {
    for (let upgrade of model.upgrades) {

        if (upgrade.id == upgradeId) {
            return upgrade;
        }
    }
    return null;
}

function findBuff(buffId) {
    for (let buffCategory of model.buffs) {

        for (let buff of buffCategory) {

            if (buff.id == buffId) {
                return buff;
            }
        }
    }
    return null
}

function changeView(view) {
    model.app.page = view;
    updateView();
}

function saveGame() {
    localStorage.setItem('model', JSON.stringify(model));
}