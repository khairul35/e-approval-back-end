"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeLeaveType = void 0;
class EmployeeLeaveType {
    static getAttributeTypeMap() {
        return EmployeeLeaveType.attributeTypeMap;
    }
}
exports.EmployeeLeaveType = EmployeeLeaveType;
EmployeeLeaveType.discriminator = undefined;
EmployeeLeaveType.attributeTypeMap = [
    {
        "name": "leaveTypeID",
        "baseName": "leaveTypeID",
        "type": "string"
    },
    {
        "name": "scheduleOfAccrual",
        "baseName": "scheduleOfAccrual",
        "type": "EmployeeLeaveType.ScheduleOfAccrualEnum"
    },
    {
        "name": "hoursAccruedAnnually",
        "baseName": "hoursAccruedAnnually",
        "type": "number"
    },
    {
        "name": "maximumToAccrue",
        "baseName": "maximumToAccrue",
        "type": "number"
    },
    {
        "name": "openingBalance",
        "baseName": "openingBalance",
        "type": "number"
    },
    {
        "name": "rateAccruedHourly",
        "baseName": "rateAccruedHourly",
        "type": "number"
    },
    {
        "name": "percentageOfGrossEarnings",
        "baseName": "percentageOfGrossEarnings",
        "type": "number"
    },
    {
        "name": "includeHolidayPayEveryPay",
        "baseName": "includeHolidayPayEveryPay",
        "type": "boolean"
    },
    {
        "name": "showAnnualLeaveInAdvance",
        "baseName": "showAnnualLeaveInAdvance",
        "type": "boolean"
    },
    {
        "name": "annualLeaveTotalAmountPaid",
        "baseName": "annualLeaveTotalAmountPaid",
        "type": "number"
    }
];
(function (EmployeeLeaveType) {
    let ScheduleOfAccrualEnum;
    (function (ScheduleOfAccrualEnum) {
        ScheduleOfAccrualEnum[ScheduleOfAccrualEnum["AnnuallyAfter6Months"] = 'AnnuallyAfter6Months'] = "AnnuallyAfter6Months";
        ScheduleOfAccrualEnum[ScheduleOfAccrualEnum["OnAnniversaryDate"] = 'OnAnniversaryDate'] = "OnAnniversaryDate";
        ScheduleOfAccrualEnum[ScheduleOfAccrualEnum["PercentageOfGrossEarnings"] = 'PercentageOfGrossEarnings'] = "PercentageOfGrossEarnings";
        ScheduleOfAccrualEnum[ScheduleOfAccrualEnum["NoAccruals"] = 'NoAccruals'] = "NoAccruals";
    })(ScheduleOfAccrualEnum = EmployeeLeaveType.ScheduleOfAccrualEnum || (EmployeeLeaveType.ScheduleOfAccrualEnum = {}));
})(EmployeeLeaveType = exports.EmployeeLeaveType || (exports.EmployeeLeaveType = {}));
//# sourceMappingURL=employeeLeaveType.js.map