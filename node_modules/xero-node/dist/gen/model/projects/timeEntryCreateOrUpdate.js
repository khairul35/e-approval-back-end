"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeEntryCreateOrUpdate = void 0;
class TimeEntryCreateOrUpdate {
    static getAttributeTypeMap() {
        return TimeEntryCreateOrUpdate.attributeTypeMap;
    }
}
exports.TimeEntryCreateOrUpdate = TimeEntryCreateOrUpdate;
TimeEntryCreateOrUpdate.discriminator = undefined;
TimeEntryCreateOrUpdate.attributeTypeMap = [
    {
        "name": "userId",
        "baseName": "userId",
        "type": "string"
    },
    {
        "name": "taskId",
        "baseName": "taskId",
        "type": "string"
    },
    {
        "name": "dateUtc",
        "baseName": "dateUtc",
        "type": "Date"
    },
    {
        "name": "duration",
        "baseName": "duration",
        "type": "number"
    },
    {
        "name": "description",
        "baseName": "description",
        "type": "string"
    }
];
//# sourceMappingURL=timeEntryCreateOrUpdate.js.map