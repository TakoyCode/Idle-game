function updateView() {
    if (model.app.page == null || model.app.page == "main") mainView();
    else if (model.app.page == "upgrades") upgradesView();
    else if (model.app.page == "stats") statsView();
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

function createNavBar() {
    return /*HTML*/`
    
        <div class="navBar">
        <button onmousedown="changeView('stats')" ${model.app.page == "stats" ? "disabled" : ""}>Stats</button>
            <button onmousedown="changeView(${null})" ${model.app.page == null ? "disabled" : ""}>Main</button>
            <button onmousedown="changeView('upgrades')" ${model.app.page == "upgrades" ? "disabled" : ""}>Upgrades</button>
        </div>
    
    `;
}