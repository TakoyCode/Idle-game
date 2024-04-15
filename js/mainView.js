// View
function mainView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="centerHorizontally">
            ${createNavBar()}
            <div style="display: flex;">
                    ${createUpgradesHtml()}
                <div class="centerHorizontally">
                ${createManaCounterHtml()}
                ${createClickableOrbHtml()}
                </div>
            </div>
    </div>
    `;
    app.innerHTML = html;
}

function createManaCounterHtml() {
    return /*HTML*/ `
    <div class="playerMoney">${Math.floor(model.player.money)} mana</div>
    `;
}

function createClickableOrbHtml() {
    return /*HTML*/ `
            <div class="orbImgContainer">
                <img src="img/Sparkle.gif" class="sparkle" style="margin: -7rem -1rem; display:${model.player.clicker.sparklesIsOn ? "" : "none"};">
                <img src="img/Sparkle.gif" class="sparkle" style="margin: -12rem 14rem; display:${model.player.clicker.sparklesIsOn ? "" : "none"};">
                <img onmouseenter="clickDivEnter()" onmouseout="clickDivOut()" class="clickableImg" 
                src="img/orb.png" draggable="false"/>
                <img src="img/Orb_Pedestal_1.png" class="orbPedestal"/>
            </div>
    `;
}

function createUpgradesHtml() {
    html = "";
    html += `<div class="upgradesContainer">`;
    for (let upgrade of model.upgrades) {
        html += /*HTML*/ `
        <div class="centerHorizontally">
            <div>${upgrade.amount} ${upgrade.name}</div>
            <div>${upgrade.amount * upgrade.strength} mana pr. sec</div>
            <div>${upgrade.price} mana</div>
            <button onmousedown="buyAutoClicker(${upgrade.id})">Make ${upgrade.name}</button>
        </div>
    `;
    }
    html += `</div>`;
    return html;
}

function createTableHtml() {
    return /*HTML*/ `
        <img class="table"  src="img/Alchemy_station.webp"/>
    `;
}