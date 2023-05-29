"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskCreateOrUpdate = void 0;
class TaskCreateOrUpdate {
    static getAttributeTypeMap() {
        return TaskCreateOrUpdate.attributeTypeMap;
    }
}
exports.TaskCreateOrUpdate = TaskCreateOrUpdate;
TaskCreateOrUpdate.discriminator = undefined;
TaskCreateOrUpdate.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "rate",
        "baseName": "rate",
        "type": "Amount"
    },
    {
        "name": "chargeType",
        "baseName": "chargeType",
        "type": "ChargeType"
    },
    {
        "name": "estimateMinutes",
        "baseName": "estimateMinutes",
        "type": "number"
    }
];
//# sourceMappingURL=taskCreateOrUpdate.js.map