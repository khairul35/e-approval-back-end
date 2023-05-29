"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PnlAccountType = void 0;
class PnlAccountType {
    static getAttributeTypeMap() {
        return PnlAccountType.attributeTypeMap;
    }
}
exports.PnlAccountType = PnlAccountType;
PnlAccountType.discriminator = undefined;
PnlAccountType.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "title",
        "baseName": "title",
        "type": "string"
    },
    {
        "name": "accounts",
        "baseName": "accounts",
        "type": "Array<PnlAccount>"
    }
];
//# sourceMappingURL=pnlAccountType.js.map