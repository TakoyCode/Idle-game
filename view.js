// View
updateView();
function updateView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="viewContainer">
        ${createCounterAndClickableCircleHtml()}
        ${createUpgradesHtml()}
    </div>
    `;
    app.innerHTML = html;
}

function createCounterAndClickableCircleHtml() {
    return /*HTML*/ `
        <div class="playerMoney">${Math.floor(model.player.money)} p</div>
        <img onmouseenter="clickDivEnter()" onmouseout="clickDivOut()" class="clickDiv" src="img/orb.png"/>
    `;
}

function createUpgradesHtml() {
    return /*HTML*/ `
    <div class="upgradesContainer">
        <div>
            <div>Autoclickers: ${model.autoClicker.amount}</div>
            <div>Points pr. sec: ${model.autoClicker.amount * model.autoClicker.strength}</div>
            <div>Price: ${model.autoClicker.price}</div>
            <button onmousedown="buyAutoClicker()">Buy Autoclicker</button>
        </div>
    </div>
    `;
}

function createBuffsHtml() {
    return /*HTML*/ `
    <div class="buffsContainer">

    </div>
    `;
}