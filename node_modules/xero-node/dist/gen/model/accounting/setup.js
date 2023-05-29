"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Setup = void 0;
class Setup {
    static getAttributeTypeMap() {
        return Setup.attributeTypeMap;
    }
}
exports.Setup = Setup;
Setup.discriminator = undefined;
Setup.attributeTypeMap = [
    {
        "name": "conversionDate",
        "baseName": "ConversionDate",
        "type": "ConversionDate"
    },
    {
        "name": "conversionBalances",
        "baseName": "ConversionBalances",
        "type": "Array<ConversionBalances>"
    },
    {
        "name": "accounts",
        "baseName": "Accounts",
        "type": "Array<Account>"
    }
];
//# sourceMappingURL=setup.js.map