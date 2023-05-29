"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeavePeriods = void 0;
class LeavePeriods {
    static getAttributeTypeMap() {
        return LeavePeriods.attributeTypeMap;
    }
}
exports.LeavePeriods = LeavePeriods;
LeavePeriods.discriminator = undefined;
LeavePeriods.attributeTypeMap = [
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
        "name": "periods",
        "baseName": "periods",
        "type": "Array<LeavePeriod>"
    }
];
//# sourceMappingURL=leavePeriods.js.map