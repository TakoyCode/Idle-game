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
            <button onmousedown="changeView(${null})" ${model.app.page == null ? "disabled" : ""}>Main</button>
            <button onmousedown="changeView('upgrades')" ${model.app.page == "upgrades" ? "disabled" : ""}>Upgrades</button>
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
    const autoClicker = model.upgrades[0];
    html = "";
    html += /*HTML*/ `
        <div class="upgradesContainer">
            <div>${autoClicker.amount} Pylons</div>
            <div>${autoClicker.amount * autoClicker.strength} Mana pr. sec</div>
            <div>Price: ${autoClicker.price} Mana</div>
            <button onmousedown="buyAutoClicker()">Buy Pylons</button>
        </div>
    `;
    return html;
}


