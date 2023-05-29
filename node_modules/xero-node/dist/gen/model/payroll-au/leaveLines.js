"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeaveLines = void 0;
/**
* The leave type lines
*/
class LeaveLines {
    static getAttributeTypeMap() {
        return LeaveLines.attributeTypeMap;
    }
}
exports.LeaveLines = LeaveLines;
LeaveLines.discriminator = undefined;
LeaveLines.attributeTypeMap = [
    {
        "name": "employee",
        "baseName": "Employee",
        "type": "Array<LeaveLine>"
    }
];
//# sourceMappingURL=leaveLines.js.map