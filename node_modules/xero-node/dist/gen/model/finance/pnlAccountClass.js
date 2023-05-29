"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PnlAccountClass = void 0;
class PnlAccountClass {
    static getAttributeTypeMap() {
        return PnlAccountClass.attributeTypeMap;
    }
}
exports.PnlAccountClass = PnlAccountClass;
PnlAccountClass.discriminator = undefined;
PnlAccountClass.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "accountTypes",
        "baseName": "accountTypes",
        "type": "Array<PnlAccountType>"
    }
];
//# sourceMappingURL=pnlAccountClass.js.map