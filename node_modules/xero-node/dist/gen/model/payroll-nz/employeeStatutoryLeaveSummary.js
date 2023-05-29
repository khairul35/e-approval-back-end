"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeStatutoryLeaveSummary = void 0;
class EmployeeStatutoryLeaveSummary {
    static getAttributeTypeMap() {
        return EmployeeStatutoryLeaveSummary.attributeTypeMap;
    }
}
exports.EmployeeStatutoryLeaveSummary = EmployeeStatutoryLeaveSummary;
EmployeeStatutoryLeaveSummary.discriminator = undefined;
EmployeeStatutoryLeaveSummary.attributeTypeMap = [
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
        "name": "type",
        "baseName": "type",
        "type": "EmployeeStatutoryLeaveSummary.TypeEnum"
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
        "name": "isEntitled",
        "baseName": "isEntitled",
        "type": "boolean"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "EmployeeStatutoryLeaveSummary.StatusEnum"
    }
];
(function (EmployeeStatutoryLeaveSummary) {
    let TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Sick"] = 'Sick'] = "Sick";
        TypeEnum[TypeEnum["Adoption"] = 'Adoption'] = "Adoption";
        TypeEnum[TypeEnum["Maternity"] = 'Maternity'] = "Maternity";
        TypeEnum[TypeEnum["Paternity"] = 'Paternity'] = "Paternity";
        TypeEnum[TypeEnum["Sharedparental"] = 'Sharedparental'] = "Sharedparental";
    })(TypeEnum = EmployeeStatutoryLeaveSummary.TypeEnum || (EmployeeStatutoryLeaveSummary.TypeEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Pending"] = 'Pending'] = "Pending";
        StatusEnum[StatusEnum["InProgress"] = 'In-Progress'] = "InProgress";
        StatusEnum[StatusEnum["Completed"] = 'Completed'] = "Completed";
    })(StatusEnum = EmployeeStatutoryLeaveSummary.StatusEnum || (EmployeeStatutoryLeaveSummary.StatusEnum = {}));
})(EmployeeStatutoryLeaveSummary = exports.EmployeeStatutoryLeaveSummary || (exports.EmployeeStatutoryLeaveSummary = {}));
//# sourceMappingURL=employeeStatutoryLeaveSummary.js.map