"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrialBalanceMovement = void 0;
class TrialBalanceMovement {
    static getAttributeTypeMap() {
        return TrialBalanceMovement.attributeTypeMap;
    }
}
exports.TrialBalanceMovement = TrialBalanceMovement;
TrialBalanceMovement.discriminator = undefined;
TrialBalanceMovement.attributeTypeMap = [
    {
        "name": "debits",
        "baseName": "debits",
        "type": "number"
    },
    {
        "name": "credits",
        "baseName": "credits",
        "type": "number"
    },
    {
        "name": "movement",
        "baseName": "movement",
        "type": "TrialBalanceEntry"
    },
    {
        "name": "signedMovement",
        "baseName": "signedMovement",
        "type": "number"
    }
];
//# sourceMappingURL=trialBalanceMovement.js.map