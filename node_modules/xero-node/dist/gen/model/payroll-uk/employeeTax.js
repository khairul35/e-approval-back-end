"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeTax = void 0;
class EmployeeTax {
    static getAttributeTypeMap() {
        return EmployeeTax.attributeTypeMap;
    }
}
exports.EmployeeTax = EmployeeTax;
EmployeeTax.discriminator = undefined;
EmployeeTax.attributeTypeMap = [
    {
        "name": "starterType",
        "baseName": "starterType",
        "type": "string"
    },
    {
        "name": "starterDeclaration",
        "baseName": "starterDeclaration",
        "type": "string"
    },
    {
        "name": "taxCode",
        "baseName": "taxCode",
        "type": "string"
    },
    {
        "name": "w1M1",
        "baseName": "w1M1",
        "type": "boolean"
    },
    {
        "name": "previousTaxablePay",
        "baseName": "previousTaxablePay",
        "type": "number"
    },
    {
        "name": "previousTaxPaid",
        "baseName": "previousTaxPaid",
        "type": "number"
    },
    {
        "name": "studentLoanDeduction",
        "baseName": "studentLoanDeduction",
        "type": "string"
    },
    {
        "name": "hasPostGraduateLoans",
        "baseName": "hasPostGraduateLoans",
        "type": "boolean"
    },
    {
        "name": "isDirector",
        "baseName": "isDirector",
        "type": "boolean"
    },
    {
        "name": "directorshipStartDate",
        "baseName": "directorshipStartDate",
        "type": "string"
    },
    {
        "name": "nicCalculationMethod",
        "baseName": "nicCalculationMethod",
        "type": "string"
    }
];
//# sourceMappingURL=employeeTax.js.map