"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeavePeriod = void 0;
class LeavePeriod {
    static getAttributeTypeMap() {
        return LeavePeriod.attributeTypeMap;
    }
}
exports.LeavePeriod = LeavePeriod;
LeavePeriod.discriminator = undefined;
LeavePeriod.attributeTypeMap = [
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
        "name": "numberOfUnits",
        "baseName": "numberOfUnits",
        "type": "number"
    },
    {
        "name": "periodStatus",
        "baseName": "periodStatus",
        "type": "LeavePeriod.PeriodStatusEnum"
    }
];
(function (LeavePeriod) {
    let PeriodStatusEnum;
    (function (PeriodStatusEnum) {
        PeriodStatusEnum[PeriodStatusEnum["Approved"] = 'Approved'] = "Approved";
        PeriodStatusEnum[PeriodStatusEnum["Completed"] = 'Completed'] = "Completed";
    })(PeriodStatusEnum = LeavePeriod.PeriodStatusEnum || (LeavePeriod.PeriodStatusEnum = {}));
})(LeavePeriod = exports.LeavePeriod || (exports.LeavePeriod = {}));
//# sourceMappingURL=leavePeriod.js.map