"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLeaveSetup = void 0;
class EmployeeLeaveSetup {
    static getAttributeTypeMap() {
        return EmployeeLeaveSetup.attributeTypeMap;
    }
}
exports.EmployeeLeaveSetup = EmployeeLeaveSetup;
EmployeeLeaveSetup.discriminator = undefined;
EmployeeLeaveSetup.attributeTypeMap = [
    {
        "name": "includeHolidayPay",
        "baseName": "includeHolidayPay",
        "type": "boolean"
    },
    {
        "name": "holidayPayOpeningBalance",
        "baseName": "holidayPayOpeningBalance",
        "type": "number"
    },
    {
        "name": "annualLeaveOpeningBalance",
        "baseName": "annualLeaveOpeningBalance",
        "type": "number"
    },
    {
        "name": "negativeAnnualLeaveBalancePaidAmount",
        "baseName": "negativeAnnualLeaveBalancePaidAmount",
        "type": "number"
    },
    {
        "name": "sickLeaveHoursToAccrueAnnually",
        "baseName": "sickLeaveHoursToAccrueAnnually",
        "type": "number"
    },
    {
        "name": "sickLeaveMaximumHoursToAccrue",
        "baseName": "sickLeaveMaximumHoursToAccrue",
        "type": "number"
    },
    {
        "name": "sickLeaveOpeningBalance",
        "baseName": "sickLeaveOpeningBalance",
        "type": "number"
    }
];
//# sourceMappingURL=employeeLeaveSetup.js.map