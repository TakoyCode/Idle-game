function updateView() {
    if (model.app.page == null || model.app.page == "main") mainView();
    else if (model.app.page == "buffs") buffsView();
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
    updateView();
}
function resetGame() {
    localStorage.clear();
    location.reload();
}

function createNavBar() {
    return /*HTML*/`
    
        <div class="navBar">
            <button onmousedown="changeView('stats')" ${model.app.page == "stats" ? "disabled" : ""}>Stats</button>
            <button onmousedown="changeView(${null})" ${model.app.page == null ? "disabled" : ""}>Main</button>
            <button onmousedown="changeView('buffs')" ${model.app.page == "buffs" ? "disabled" : ""}>Buffs</button>
            ${createSaveStateButtonsHtml()}
        </div>
    
    `;
}


function createSaveStateButtonsHtml() {
    return /*HTML*/ `
        
        <div class="saveStateButtonsContainer">
                <button class="saveButton" onmousedown="saveGame(); model.navbar.saveDropdown = true; 
                    setTimeout(() => { model.navbar.saveDropdown = false; updateView() }, 2000)">Save</button>
                
                <button class="resetButton" onmousedown="model.navbar.confirmDropdown = !model.navbar.confirmDropdown;
                    updateView();">Reset</button>
                
                
                <div style="display: ${model.navbar.confirmDropdown ? "" : "none"}" class="areYouSureContainer">
                    <div>Are you sure?</div>
                    <div>
                        <button class="areYouSureYes" onmousedown="resetGame()">Yes</button>
                        <button onmousedown="model.navbar.confirmDropdown = false; updateView();">No</button>
                    </div>
                </div>
                <div style="display: ${model.navbar.saveDropdown ? "" : "none"}" class="saveConfirmation">
                    <div>Saved game!</div>
                </div>
        </div>

    `;
}