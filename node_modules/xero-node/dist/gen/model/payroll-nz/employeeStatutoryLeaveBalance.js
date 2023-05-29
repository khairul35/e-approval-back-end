"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeStatutoryLeaveBalance = void 0;
class EmployeeStatutoryLeaveBalance {
    static getAttributeTypeMap() {
        return EmployeeStatutoryLeaveBalance.attributeTypeMap;
    }
}
exports.EmployeeStatutoryLeaveBalance = EmployeeStatutoryLeaveBalance;
EmployeeStatutoryLeaveBalance.discriminator = undefined;
EmployeeStatutoryLeaveBalance.attributeTypeMap = [
    {
        "name": "leaveType",
        "baseName": "leaveType",
        "type": "EmployeeStatutoryLeaveBalance.LeaveTypeEnum"
    },
    {
        "name": "balanceRemaining",
        "baseName": "balanceRemaining",
        "type": "number"
    },
    {
        "name": "units",
        "baseName": "units",
        "type": "EmployeeStatutoryLeaveBalance.UnitsEnum"
    }
];
(function (EmployeeStatutoryLeaveBalance) {
    let LeaveTypeEnum;
    (function (LeaveTypeEnum) {
        LeaveTypeEnum[LeaveTypeEnum["Sick"] = 'Sick'] = "Sick";
        LeaveTypeEnum[LeaveTypeEnum["Adoption"] = 'Adoption'] = "Adoption";
        LeaveTypeEnum[LeaveTypeEnum["Maternity"] = 'Maternity'] = "Maternity";
        LeaveTypeEnum[LeaveTypeEnum["Paternity"] = 'Paternity'] = "Paternity";
        LeaveTypeEnum[LeaveTypeEnum["Sharedparental"] = 'Sharedparental'] = "Sharedparental";
    })(LeaveTypeEnum = EmployeeStatutoryLeaveBalance.LeaveTypeEnum || (EmployeeStatutoryLeaveBalance.LeaveTypeEnum = {}));
    let UnitsEnum;
    (function (UnitsEnum) {
        UnitsEnum[UnitsEnum["Hours"] = 'Hours'] = "Hours";
    })(UnitsEnum = EmployeeStatutoryLeaveBalance.UnitsEnum || (EmployeeStatutoryLeaveBalance.UnitsEnum = {}));
})(EmployeeStatutoryLeaveBalance = exports.EmployeeStatutoryLeaveBalance || (exports.EmployeeStatutoryLeaveBalance = {}));
//# sourceMappingURL=employeeStatutoryLeaveBalance.js.map