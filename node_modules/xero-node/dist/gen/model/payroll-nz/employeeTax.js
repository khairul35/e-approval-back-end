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
        "name": "irdNumber",
        "baseName": "irdNumber",
        "type": "string"
    },
    {
        "name": "taxCode",
        "baseName": "taxCode",
        "type": "TaxCode"
    },
    {
        "name": "specialTaxRatePercentage",
        "baseName": "specialTaxRatePercentage",
        "type": "number"
    },
    {
        "name": "hasSpecialStudentLoanRate",
        "baseName": "hasSpecialStudentLoanRate",
        "type": "boolean"
    },
    {
        "name": "specialStudentLoanRatePercentage",
        "baseName": "specialStudentLoanRatePercentage",
        "type": "number"
    },
    {
        "name": "isEligibleForKiwiSaver",
        "baseName": "isEligibleForKiwiSaver",
        "type": "boolean"
    },
    {
        "name": "esctRatePercentage",
        "baseName": "esctRatePercentage",
        "type": "number"
    },
    {
        "name": "kiwiSaverContributions",
        "baseName": "kiwiSaverContributions",
        "type": "EmployeeTax.KiwiSaverContributionsEnum"
    },
    {
        "name": "kiwiSaverEmployeeContributionRatePercentage",
        "baseName": "kiwiSaverEmployeeContributionRatePercentage",
        "type": "number"
    },
    {
        "name": "kiwiSaverEmployerContributionRatePercentage",
        "baseName": "kiwiSaverEmployerContributionRatePercentage",
        "type": "number"
    },
    {
        "name": "kiwiSaverEmployerSalarySacrificeContributionRatePercentage",
        "baseName": "kiwiSaverEmployerSalarySacrificeContributionRatePercentage",
        "type": "number"
    },
    {
        "name": "kiwiSaverOptOutDate",
        "baseName": "kiwiSaverOptOutDate",
        "type": "string"
    },
    {
        "name": "kiwiSaverContributionHolidayEndDate",
        "baseName": "kiwiSaverContributionHolidayEndDate",
        "type": "string"
    },
    {
        "name": "hasStudentLoanBalance",
        "baseName": "hasStudentLoanBalance",
        "type": "boolean"
    },
    {
        "name": "studentLoanBalance",
        "baseName": "studentLoanBalance",
        "type": "number"
    },
    {
        "name": "studentLoanAsAt",
        "baseName": "studentLoanAsAt",
        "type": "string"
    }
];
(function (EmployeeTax) {
    let KiwiSaverContributionsEnum;
    (function (KiwiSaverContributionsEnum) {
        KiwiSaverContributionsEnum[KiwiSaverContributionsEnum["MakeContributions"] = 'MakeContributions'] = "MakeContributions";
        KiwiSaverContributionsEnum[KiwiSaverContributionsEnum["OptOut"] = 'OptOut'] = "OptOut";
        KiwiSaverContributionsEnum[KiwiSaverContributionsEnum["OnAContributionsHoliday"] = 'OnAContributionsHoliday'] = "OnAContributionsHoliday";
        KiwiSaverContributionsEnum[KiwiSaverContributionsEnum["OnASavingsSuspension"] = 'OnASavingsSuspension'] = "OnASavingsSuspension";
        KiwiSaverContributionsEnum[KiwiSaverContributionsEnum["NotCurrentlyAKiwiSaverMember"] = 'NotCurrentlyAKiwiSaverMember'] = "NotCurrentlyAKiwiSaverMember";
    })(KiwiSaverContributionsEnum = EmployeeTax.KiwiSaverContributionsEnum || (EmployeeTax.KiwiSaverContributionsEnum = {}));
})(EmployeeTax = exports.EmployeeTax || (exports.EmployeeTax = {}));
//# sourceMappingURL=employeeTax.js.map