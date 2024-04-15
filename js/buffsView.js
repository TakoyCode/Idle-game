function buffsView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="centerHorizontally">
        ${createNavBar()}
        ${createManaCounterHtml()}
        <div class="upgradesViewContainer">
            <div class="buffContainer">
                ${createBuffHtml()}
            </div>
            ${createTableHtml()}
        </div>
    </div>
    `;
    app.innerHTML = html;
}

function createBuffHtml() {
    let html = "";
    for (let catergories of model.buffs) {
        let lastTierUnlocked = 0;

        for (const buff of catergories) {
            const upgrade = findUpgrade(buff.categoryId);
            if (buff.unlocked) lastTierUnlocked = buff.tier;

            if (upgrade.amount >= buff.amountCriteria && buff.unlocked == false && buff.tier == lastTierUnlocked + 1) {
                html += /*HTML*/ `
                <div class="buff">
                <div>${buff.name}</div>
                <div>Tier ${buff.tier ?? 0}</div>
                <div>+100% to mana pr. sec</div>
                <div>${buff.price} mana</div>
                <button onmousedown="buyBuff(${buff.id},${buff.categoryId})">Research</button>
                </div>
                `;
            }
        }
    }
    return html;
}
