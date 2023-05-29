"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperFund = void 0;
class SuperFund {
    static getAttributeTypeMap() {
        return SuperFund.attributeTypeMap;
    }
}
exports.SuperFund = SuperFund;
SuperFund.discriminator = undefined;
SuperFund.attributeTypeMap = [
    {
        "name": "superFundID",
        "baseName": "SuperFundID",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "Type",
        "type": "SuperFundType"
    },
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "aBN",
        "baseName": "ABN",
        "type": "string"
    },
    {
        "name": "bSB",
        "baseName": "BSB",
        "type": "string"
    },
    {
        "name": "accountNumber",
        "baseName": "AccountNumber",
        "type": "string"
    },
    {
        "name": "accountName",
        "baseName": "AccountName",
        "type": "string"
    },
    {
        "name": "electronicServiceAddress",
        "baseName": "ElectronicServiceAddress",
        "type": "string"
    },
    {
        "name": "employerNumber",
        "baseName": "EmployerNumber",
        "type": "string"
    },
    {
        "name": "sPIN",
        "baseName": "SPIN",
        "type": "string"
    },
    {
        "name": "uSI",
        "baseName": "USI",
        "type": "string"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "validationErrors",
        "baseName": "ValidationErrors",
        "type": "Array<ValidationError>"
    }
];
//# sourceMappingURL=superFund.js.map