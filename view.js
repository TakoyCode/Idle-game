// View
updateView();
function updateView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="viewContainer">
        ${createCounterAndClickableCircleHtml()}
        ${createUpgradesHtml()}
        ${createBuffHtml()}
    </div>
    `;
    app.innerHTML = html;
}

function createCounterAndClickableCircleHtml() {
    return /*HTML*/ `
        <div class="playerMoney">${Math.floor(model.player.money)} p</div>
        <img onmouseenter="clickDivEnter()" onmouseout="clickDivOut()" class="clickDiv" 
        src="img/orb.png" draggable="false"/>
    `;
}

function createUpgradesHtml() {
    return /*HTML*/ `
    <div class="upgradesContainer">
        <div>
            <div>Autoclickers: ${model.upgrades.autoClicker.amount}</div>
            <div>Points pr. sec: ${model.upgrades.autoClicker.amount * model.upgrades.autoClicker.strength}</div>
            <div>Price: ${model.upgrades.autoClicker.price}</div>
            <button onmousedown="buyAutoClicker()">Buy Autoclicker</button>
        </div>
    </div>
    `;
}

function createBuffHtml() {
    let html = "";

    for (let catergories in model.buffs) {
        const catergoriesObj = model.buffs[catergories];
        for (const buffs in catergoriesObj) {
            const buff = catergoriesObj[buffs];
            if (findUpgrade(buff.categoryId).amount >= buff.amountCriteria && buff.unlocked == false) {
                html += /*HTML*/ `
            <div style="display:flex; flex-direction: column; justify-content:center; text-align: center;">
                <div>${buff.name}</div>
                <div>${buff.price} p</div>
                <div>${buff.amountCriteria} p</div>
                <button onmousedown="buyBuff(${buff.id},${buff.categoryId})">Buy</button>
            </div>
            `;
            }
        }
    }
    return html;
}


