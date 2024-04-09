function updateView() {
    if (model.app.page == null) mainView();
    else if (model.app.page == "buffs") buffsView();
}

function findUpgrade(upgradeId) {
    for (let upgrade in model.upgrades) {

        if (model.upgrades[upgrade].id == upgradeId) {
            return model.upgrades[upgrade];
        }
    }
    return null;
}

function findBuff(buffId) {
    for (let buffCategory in model.buffs) {
        const buffCategoryObj = model.buffs[buffCategory];

        for (let buff in buffCategoryObj) {
            const buffObj = buffCategoryObj[buff];

            if (buffObj.id == buffId) {
                return buffObj;
            }
        }
    }
    return null
}