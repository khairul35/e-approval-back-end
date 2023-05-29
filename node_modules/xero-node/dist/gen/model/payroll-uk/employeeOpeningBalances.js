"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeOpeningBalances = void 0;
class EmployeeOpeningBalances {
    static getAttributeTypeMap() {
        return EmployeeOpeningBalances.attributeTypeMap;
    }
}
exports.EmployeeOpeningBalances = EmployeeOpeningBalances;
EmployeeOpeningBalances.discriminator = undefined;
EmployeeOpeningBalances.attributeTypeMap = [
    {
        "name": "statutoryAdoptionPay",
        "baseName": "statutoryAdoptionPay",
        "type": "number"
    },
    {
        "name": "statutoryMaternityPay",
        "baseName": "statutoryMaternityPay",
        "type": "number"
    },
    {
        "name": "statutoryPaternityPay",
        "baseName": "statutoryPaternityPay",
        "type": "number"
    },
    {
        "name": "statutorySharedParentalPay",
        "baseName": "statutorySharedParentalPay",
        "type": "number"
    },
    {
        "name": "statutorySickPay",
        "baseName": "statutorySickPay",
        "type": "number"
    },
    {
        "name": "priorEmployeeNumber",
        "baseName": "priorEmployeeNumber",
        "type": "number"
    }
];
//# sourceMappingURL=employeeOpeningBalances.js.map