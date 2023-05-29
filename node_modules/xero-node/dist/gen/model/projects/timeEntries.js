"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeEntries = void 0;
class TimeEntries {
    static getAttributeTypeMap() {
        return TimeEntries.attributeTypeMap;
    }
}
exports.TimeEntries = TimeEntries;
TimeEntries.discriminator = undefined;
TimeEntries.attributeTypeMap = [
    {
        "name": "pagination",
        "baseName": "pagination",
        "type": "Pagination"
    },
    {
        "name": "items",
        "baseName": "items",
        "type": "Array<TimeEntry>"
    }
];
//# sourceMappingURL=timeEntries.js.map