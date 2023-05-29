"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeOpeningBalancesObject = void 0;
class EmployeeOpeningBalancesObject {
    static getAttributeTypeMap() {
        return EmployeeOpeningBalancesObject.attributeTypeMap;
    }
}
exports.EmployeeOpeningBalancesObject = EmployeeOpeningBalancesObject;
EmployeeOpeningBalancesObject.discriminator = undefined;
EmployeeOpeningBalancesObject.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "problem",
        "baseName": "problem",
        "type": "Problem"
    },
    {
        "name": "openingBalances",
        "baseName": "openingBalances",
        "type": "Array<EmployeeOpeningBalance>"
    }
];
//# sourceMappingURL=employeeOpeningBalancesObject.js.map