function upgradesView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="viewContainer">
        ${createNavBar()}
        ${createBuffHtml()}
    </div>
    `;
    app.innerHTML = html;
}


function createBuffHtml() {
    let html = "";

    for (let catergories in model.buffs) {
        const catergoriesObj = model.buffs[catergories];
        for (const buffs in catergoriesObj) {
            const buff = catergoriesObj[buffs];
            if (findUpgrade(buff.categoryId).amount >= buff.amountCriteria && buff.unlocked == false) {
                html += /*HTML*/ `
            <div class="buff">
                <div>${buff.name}</div>
                <div>Autoclicker +100%</div>
                <div>${buff.price} p</div>
                <button onmousedown="buyBuff(${buff.id},${buff.categoryId})">Buy</button>
            </div>
            `;
            }
        }
    }
    return html;
}