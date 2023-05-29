"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveTypes = void 0;
class LeaveTypes {
    static getAttributeTypeMap() {
        return LeaveTypes.attributeTypeMap;
    }
}
exports.LeaveTypes = LeaveTypes;
LeaveTypes.discriminator = undefined;
LeaveTypes.attributeTypeMap = [
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
        "name": "leaveTypes",
        "baseName": "leaveTypes",
        "type": "Array<LeaveType>"
    }
];
//# sourceMappingURL=leaveTypes.js.map