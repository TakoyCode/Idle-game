function upgradesView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="centerHorizontally">
        ${createNavBar()}
        ${createManaCounterHtml()}
        <div class="upgradesViewContainer">
            ${createBuffHtml()}
            ${createTableHtml()}
            ${createResearchedBuffsHtml()}
        </div>
    </div>
    `;
    app.innerHTML = html;
}

function createResearchedBuffsHtml() {
    html = "";
    html += `<div class="researchedContainer">`;
    for (let category of model.buffs) {
        for (let buff of category) {
            const upgrade = findUpgrade(buff.categoryId);
            if (buff.unlocked) {
                html += /*HTML*/ `
                <div class="centerHorizontally">
                    <div>${buff.name}</div>
                    <div>Tier ${buff.tier ?? 0} ${upgrade.name}</div>
                    <div>+100% to ${upgrade.name}</div>
                </div>
            `;
            }
        }
    }
    html += `</div>`;
    return html;
}

function createBuffHtml() {
    let html = "";
    html += `<div class="buffContainer">`;
    for (let catergories of model.buffs) {
        for (const buff of catergories) {
            const upgrade = findUpgrade(buff.categoryId);
            if (upgrade.amount >= buff.amountCriteria && buff.unlocked == false) {
                html += /*HTML*/ `
            <div class="buff">
                <div>${buff.name}</div>
                <div>Tier ${buff.tier ?? 0}</div>
                <div>+100% to ${upgrade.name}</div>
                <div>${buff.price} mana</div>
                <button onmousedown="buyBuff(${buff.id},${buff.categoryId})">Research</button>
            </div>
            `;
            }
        }
    }
    html += `</div>`;
    return html;
}