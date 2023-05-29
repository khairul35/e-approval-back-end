"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeStatutorySickLeave = void 0;
class EmployeeStatutorySickLeave {
    static getAttributeTypeMap() {
        return EmployeeStatutorySickLeave.attributeTypeMap;
    }
}
exports.EmployeeStatutorySickLeave = EmployeeStatutorySickLeave;
EmployeeStatutorySickLeave.discriminator = undefined;
EmployeeStatutorySickLeave.attributeTypeMap = [
    {
        "name": "statutoryLeaveID",
        "baseName": "statutoryLeaveID",
        "type": "string"
    },
    {
        "name": "employeeID",
        "baseName": "employeeID",
        "type": "string"
    },
    {
        "name": "leaveTypeID",
        "baseName": "leaveTypeID",
        "type": "string"
    },
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "string"
    },
    {
        "name": "type",
        "baseName": "type",
        "type": "string"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "string"
    },
    {
        "name": "workPattern",
        "baseName": "workPattern",
        "type": "Array<string>"
    },
    {
        "name": "isPregnancyRelated",
        "baseName": "isPregnancyRelated",
        "type": "boolean"
    },
    {
        "name": "sufficientNotice",
        "baseName": "sufficientNotice",
        "type": "boolean"
    },
    {
        "name": "isEntitled",
        "baseName": "isEntitled",
        "type": "boolean"
    },
    {
        "name": "entitlementWeeksRequested",
        "baseName": "entitlementWeeksRequested",
        "type": "number"
    },
    {
        "name": "entitlementWeeksQualified",
        "baseName": "entitlementWeeksQualified",
        "type": "number"
    },
    {
        "name": "entitlementWeeksRemaining",
        "baseName": "entitlementWeeksRemaining",
        "type": "number"
    },
    {
        "name": "overlapsWithOtherLeave",
        "baseName": "overlapsWithOtherLeave",
        "type": "boolean"
    },
    {
        "name": "entitlementFailureReasons",
        "baseName": "entitlementFailureReasons",
        "type": "Array<EmployeeStatutorySickLeave.EntitlementFailureReasonsEnum>"
    }
];
(function (EmployeeStatutorySickLeave) {
    let EntitlementFailureReasonsEnum;
    (function (EntitlementFailureReasonsEnum) {
        EntitlementFailureReasonsEnum[EntitlementFailureReasonsEnum["UnableToCalculateAwe"] = 'UnableToCalculateAwe'] = "UnableToCalculateAwe";
        EntitlementFailureReasonsEnum[EntitlementFailureReasonsEnum["AweLowerThanLel"] = 'AweLowerThanLel'] = "AweLowerThanLel";
        EntitlementFailureReasonsEnum[EntitlementFailureReasonsEnum["NotQualifiedInPreviousPiw"] = 'NotQualifiedInPreviousPiw'] = "NotQualifiedInPreviousPiw";
        EntitlementFailureReasonsEnum[EntitlementFailureReasonsEnum["ExceededMaximumEntitlementWeeksOfSsp"] = 'ExceededMaximumEntitlementWeeksOfSsp'] = "ExceededMaximumEntitlementWeeksOfSsp";
        EntitlementFailureReasonsEnum[EntitlementFailureReasonsEnum["ExceededMaximumDurationOfPiw"] = 'ExceededMaximumDurationOfPiw'] = "ExceededMaximumDurationOfPiw";
        EntitlementFailureReasonsEnum[EntitlementFailureReasonsEnum["SufficientNoticeNotGiven"] = 'SufficientNoticeNotGiven'] = "SufficientNoticeNotGiven";
    })(EntitlementFailureReasonsEnum = EmployeeStatutorySickLeave.EntitlementFailureReasonsEnum || (EmployeeStatutorySickLeave.EntitlementFailureReasonsEnum = {}));
})(EmployeeStatutorySickLeave = exports.EmployeeStatutorySickLeave || (exports.EmployeeStatutorySickLeave = {}));
//# sourceMappingURL=employeeStatutorySickLeave.js.map