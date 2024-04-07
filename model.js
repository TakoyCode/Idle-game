// Modell

const model = {

    player: {
        money: 0,
        totalMoneyEarned: 0,
        clicker: {
            cursorStrength: 1,
            intervalId: null,
            intervalActive: false,
        },
    },

    autoClicker: {
        amount: 0,
        price: 5,
        strength: 1,
    },

    buffs: {
        autoClicker: {
            strengthMultiplier1: {
                moneyCriteria: 191,
                amountCriteria: 10,
                unlocked: false,
                buff: 2,
            },
        },
    },

};