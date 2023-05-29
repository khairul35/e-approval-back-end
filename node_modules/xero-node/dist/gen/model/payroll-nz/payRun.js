"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRun = void 0;
class PayRun {
    static getAttributeTypeMap() {
        return PayRun.attributeTypeMap;
    }
}
exports.PayRun = PayRun;
PayRun.discriminator = undefined;
PayRun.attributeTypeMap = [
    {
        "name": "payRunID",
        "baseName": "payRunID",
        "type": "string"
    },
    {
        "name": "payrollCalendarID",
        "baseName": "payrollCalendarID",
        "type": "string"
    },
    {
        "name": "periodStartDate",
        "baseName": "periodStartDate",
        "type": "string"
    },
    {
        "name": "periodEndDate",
        "baseName": "periodEndDate",
        "type": "string"
    },
    {
        "name": "paymentDate",
        "baseName": "paymentDate",
        "type": "string"
    },
    {
        "name": "totalCost",
        "baseName": "totalCost",
        "type": "number"
    },
    {
        "name": "totalPay",
        "baseName": "totalPay",
        "type": "number"
    },
    {
        "name": "payRunStatus",
        "baseName": "payRunStatus",
        "type": "PayRun.PayRunStatusEnum"
    },
    {
        "name": "payRunType",
        "baseName": "payRunType",
        "type": "PayRun.PayRunTypeEnum"
    },
    {
        "name": "calendarType",
        "baseName": "calendarType",
        "type": "CalendarType"
    },
    {
        "name": "postedDateTime",
        "baseName": "postedDateTime",
        "type": "string"
    },
    {
        "name": "paySlips",
        "baseName": "paySlips",
        "type": "Array<PaySlip>"
    }
];
(function (PayRun) {
    let PayRunStatusEnum;
    (function (PayRunStatusEnum) {
        PayRunStatusEnum[PayRunStatusEnum["Draft"] = 'Draft'] = "Draft";
        PayRunStatusEnum[PayRunStatusEnum["Posted"] = 'Posted'] = "Posted";
    })(PayRunStatusEnum = PayRun.PayRunStatusEnum || (PayRun.PayRunStatusEnum = {}));
    let PayRunTypeEnum;
    (function (PayRunTypeEnum) {
        PayRunTypeEnum[PayRunTypeEnum["Scheduled"] = 'Scheduled'] = "Scheduled";
        PayRunTypeEnum[PayRunTypeEnum["Unscheduled"] = 'Unscheduled'] = "Unscheduled";
        PayRunTypeEnum[PayRunTypeEnum["EarlierYearUpdate"] = 'EarlierYearUpdate'] = "EarlierYearUpdate";
    })(PayRunTypeEnum = PayRun.PayRunTypeEnum || (PayRun.PayRunTypeEnum = {}));
})(PayRun = exports.PayRun || (exports.PayRun = {}));
//# sourceMappingURL=payRun.js.map