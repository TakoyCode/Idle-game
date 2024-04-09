// Modell

const model = {

    player: {
        money: 100000000,
        totalMoneyEarned: 0,
        clicker: {
            cursorStrength: 1,
            intervalId: null,
            intervalActive: false,
        },
    },

    upgrades: {
        autoClicker: {
            id: 1,
            amount: 0,
            price: 5,
            strength: 1,
        },
    },

    buffs: {
        autoClicker: {
            strengthMultiplier1: {
                id: 1,
                categoryId: 1,
                name: "Small Orb",
                price: 100,
                amountCriteria: 5,
                unlocked: false,
                buff: 2,
            },
            strengthMultiplier2: {
                id: 2,
                categoryId: 1,
                name: "Medium Orb",
                price: 100,
                amountCriteria: 10,
                unlocked: false,
                buff: 4,
            },
            strengthMultiplier3: {
                id: 3,
                categoryId: 1,
                name: "Large Orb",
                price: 100,
                amountCriteria: 15,
                unlocked: false,
                buff: 8,
            },
            strengthMultiplier4: {
                id: 4,
                categoryId: 1,
                name: "Extra-Large Orb",
                price: 100,
                amountCriteria: 25,
                unlocked: false,
                buff: 16,
            },
            strengthMultiplier5: {
                id: 5,
                categoryId: 1,
                name: "Giant Orb",
                price: 100,
                amountCriteria: 50,
                unlocked: false,
                buff: 32,
            },
        },
    },

};