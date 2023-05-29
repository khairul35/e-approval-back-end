"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrialBalanceEntry = void 0;
class TrialBalanceEntry {
    static getAttributeTypeMap() {
        return TrialBalanceEntry.attributeTypeMap;
    }
}
exports.TrialBalanceEntry = TrialBalanceEntry;
TrialBalanceEntry.discriminator = undefined;
TrialBalanceEntry.attributeTypeMap = [
    {
        "name": "value",
        "baseName": "value",
        "type": "number"
    },
    {
        "name": "entryType",
        "baseName": "entryType",
        "type": "string"
    }
];
//# sourceMappingURL=trialBalanceEntry.js.map