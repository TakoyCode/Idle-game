function statsView() {
    const app = document.getElementById('app');
    let html = ``;

    html += /*HTML*/ `
    <div class="centerHorizontally">
            ${createNavBar()}
            ${createStatsHtml()}
            <div class="ResearchedBuffsTitle">Researched Buffs</div>
            ${createResearchedBuffsHtml()}
    </div>
    `;
    app.innerHTML = html;
}

function createStatsHtml() {
    return /*HTML*/ `
        
    <div class="totalManaDiv">Total Mana Gathered: ${Math.floor(model.player.totalManaGathered)} mana</div>
    
    `;
}

function createResearchedBuffsHtml() {
    html = "";
    html += `<div class="researchedContainer">`;
    for (let category of model.buffs) {
        html += `<div class="researchedCategoryContainer">`;
        for (let buff of category) {
            const upgrade = findUpgrade(buff.categoryId);
            if (buff.unlocked) {
                html += /*HTML*/ `
                <div class="centerHorizontally">
                    <div>${buff.name}</div>
                    <div>Tier ${buff.tier ?? 0} ${upgrade.name}</div>
                    <div>+100% to mana pr. sec</div>
                </div>
            `;
            }
        }
        html += `</div>`;
    }
    html += `</div>`;
    return html;
}