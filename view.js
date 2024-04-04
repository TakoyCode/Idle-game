// View
updateView();
function updateView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="container">
        <div class="playerMoney">${Math.floor(model.playerMoney)}</div>
        <div onclick="clickDiv()" class="clickDiv"></div>
        <div class="upgradesContainer">
            <div>Autoclickers: ${model.autoClicker.amount}</div>
            <div>Points pr. sec: ${model.autoClicker.amount * model.autoClicker.strength}</div>
            <div>Price: ${model.autoClicker.price}</div>
            <button onclick="buyAutoClicker()">Buy Autoclicker</button>
        </div>
    </div>
    `;
    app.innerHTML = html;
}
