"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Task = void 0;
class Task {
    static getAttributeTypeMap() {
        return Task.attributeTypeMap;
    }
}
exports.Task = Task;
Task.discriminator = undefined;
Task.attributeTypeMap = [
    {
        "name": "taskId",
        "baseName": "taskId",
        "type": "string"
    },
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
    },
    {
        "name": "projectId",
        "baseName": "projectId",
        "type": "string"
    },
    {
        "name": "totalMinutes",
        "baseName": "totalMinutes",
        "type": "number"
    },
    {
        "name": "totalAmount",
        "baseName": "totalAmount",
        "type": "Amount"
    },
    {
        "name": "minutesInvoiced",
        "baseName": "minutesInvoiced",
        "type": "number"
    },
    {
        "name": "minutesToBeInvoiced",
        "baseName": "minutesToBeInvoiced",
        "type": "number"
    },
    {
        "name": "fixedMinutes",
        "baseName": "fixedMinutes",
        "type": "number"
    },
    {
        "name": "nonChargeableMinutes",
        "baseName": "nonChargeableMinutes",
        "type": "number"
    },
    {
        "name": "amountToBeInvoiced",
        "baseName": "amountToBeInvoiced",
        "type": "Amount"
    },
    {
        "name": "amountInvoiced",
        "baseName": "amountInvoiced",
        "type": "Amount"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "Task.StatusEnum"
    }
];
(function (Task) {
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["ACTIVE"] = 'ACTIVE'] = "ACTIVE";
        StatusEnum[StatusEnum["INVOICED"] = 'INVOICED'] = "INVOICED";
        StatusEnum[StatusEnum["LOCKED"] = 'LOCKED'] = "LOCKED";
    })(StatusEnum = Task.StatusEnum || (Task.StatusEnum = {}));
})(Task = exports.Task || (exports.Task = {}));
//# sourceMappingURL=task.js.map