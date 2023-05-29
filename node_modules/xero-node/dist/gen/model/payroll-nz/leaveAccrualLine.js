"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveAccrualLine = void 0;
class LeaveAccrualLine {
    static getAttributeTypeMap() {
        return LeaveAccrualLine.attributeTypeMap;
    }
}
exports.LeaveAccrualLine = LeaveAccrualLine;
LeaveAccrualLine.discriminator = undefined;
LeaveAccrualLine.attributeTypeMap = [
    {
        "name": "leaveTypeID",
        "baseName": "leaveTypeID",
        "type": "string"
    },
    {
        "name": "numberOfUnits",
        "baseName": "numberOfUnits",
        "type": "number"
    }
];
//# sourceMappingURL=leaveAccrualLine.js.map