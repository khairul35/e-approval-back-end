"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveTypeObject = void 0;
class LeaveTypeObject {
    static getAttributeTypeMap() {
        return LeaveTypeObject.attributeTypeMap;
    }
}
exports.LeaveTypeObject = LeaveTypeObject;
LeaveTypeObject.discriminator = undefined;
LeaveTypeObject.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "problem",
        "baseName": "problem",
        "type": "Problem"
    },
    {
        "name": "leaveType",
        "baseName": "leaveType",
        "type": "LeaveType"
    }
];
//# sourceMappingURL=leaveTypeObject.js.map