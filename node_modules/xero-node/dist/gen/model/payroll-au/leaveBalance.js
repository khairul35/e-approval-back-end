"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveBalance = void 0;
class LeaveBalance {
    static getAttributeTypeMap() {
        return LeaveBalance.attributeTypeMap;
    }
}
exports.LeaveBalance = LeaveBalance;
LeaveBalance.discriminator = undefined;
LeaveBalance.attributeTypeMap = [
    {
        "name": "leaveName",
        "baseName": "LeaveName",
        "type": "string"
    },
    {
        "name": "leaveTypeID",
        "baseName": "LeaveTypeID",
        "type": "string"
    },
    {
        "name": "numberOfUnits",
        "baseName": "NumberOfUnits",
        "type": "number"
    },
    {
        "name": "typeOfUnits",
        "baseName": "TypeOfUnits",
        "type": "string"
    }
];
//# sourceMappingURL=leaveBalance.js.map