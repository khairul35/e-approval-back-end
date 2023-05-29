"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PnlAccount = void 0;
class PnlAccount {
    static getAttributeTypeMap() {
        return PnlAccount.attributeTypeMap;
    }
}
exports.PnlAccount = PnlAccount;
PnlAccount.discriminator = undefined;
PnlAccount.attributeTypeMap = [
    {
        "name": "accountID",
        "baseName": "accountID",
        "type": "string"
    },
    {
        "name": "accountType",
        "baseName": "accountType",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "code",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "reportingCode",
        "baseName": "reportingCode",
        "type": "string"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    }
];
//# sourceMappingURL=pnlAccount.js.map