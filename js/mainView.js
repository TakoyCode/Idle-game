// View
function mainView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="viewContainer">
        ${createNavBar()}
        ${createCounterAndClickableCircleHtml()}
        ${createUpgradesHtml()}
    </div>
    `;
    app.innerHTML = html;
}

function createNavBar() {
    return /*HTML*/`
    
        <div class="navBar">
            <button onmousedown="changeView(${null})">Main</button>
            <button onmousedown="changeView('upgrades')">Upgrades</button>
        </div>
    
    `;
}

function createCounterAndClickableCircleHtml() {
    return /*HTML*/ `
        <div class="playerMoney">${Math.floor(model.player.money)} mana</div>
        <div class="orbImgContainer">
            <img onmouseenter="clickDivEnter()" onmouseout="clickDivOut()" class="clickableImg" 
            src="img/orb.png" draggable="false"/>
            <img src="img/Orb_Pedestal_1.png" class="orbPedestal"/>
        </div>
    `;
}

function createUpgradesHtml() {
    html = "";
    html += /*HTML*/ `
        <div class="upgradesContainer">
            <div>${model.upgrades.autoClicker.amount} Pylons</div>
            <div>${model.upgrades.autoClicker.amount * model.upgrades.autoClicker.strength} Mana pr. sec</div>
            <div>Price: ${model.upgrades.autoClicker.price} Mana</div>
            <button onmousedown="buyAutoClicker()">Buy Pylons</button>
        </div>
    `;
    return html;
}


