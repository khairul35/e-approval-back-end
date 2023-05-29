"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
class Project {
    static getAttributeTypeMap() {
        return Project.attributeTypeMap;
    }
}
exports.Project = Project;
Project.discriminator = undefined;
Project.attributeTypeMap = [
    {
        "name": "projectId",
        "baseName": "projectId",
        "type": "string"
    },
    {
        "name": "contactId",
        "baseName": "contactId",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "currencyCode",
        "baseName": "currencyCode",
        "type": "CurrencyCode"
    },
    {
        "name": "minutesLogged",
        "baseName": "minutesLogged",
        "type": "number"
    },
    {
        "name": "totalTaskAmount",
        "baseName": "totalTaskAmount",
        "type": "Amount"
    },
    {
        "name": "totalExpenseAmount",
        "baseName": "totalExpenseAmount",
        "type": "Amount"
    },
    {
        "name": "estimateAmount",
        "baseName": "estimateAmount",
        "type": "Amount"
    },
    {
        "name": "minutesToBeInvoiced",
        "baseName": "minutesToBeInvoiced",
        "type": "number"
    },
    {
        "name": "taskAmountToBeInvoiced",
        "baseName": "taskAmountToBeInvoiced",
        "type": "Amount"
    },
    {
        "name": "taskAmountInvoiced",
        "baseName": "taskAmountInvoiced",
        "type": "Amount"
    },
    {
        "name": "expenseAmountToBeInvoiced",
        "baseName": "expenseAmountToBeInvoiced",
        "type": "Amount"
    },
    {
        "name": "expenseAmountInvoiced",
        "baseName": "expenseAmountInvoiced",
        "type": "Amount"
    },
    {
        "name": "projectAmountInvoiced",
        "baseName": "projectAmountInvoiced",
        "type": "Amount"
    },
    {
        "name": "deposit",
        "baseName": "deposit",
        "type": "Amount"
    },
    {
        "name": "depositApplied",
        "baseName": "depositApplied",
        "type": "Amount"
    },
    {
        "name": "creditNoteAmount",
        "baseName": "creditNoteAmount",
        "type": "Amount"
    },
    {
        "name": "deadlineUtc",
        "baseName": "deadlineUtc",
        "type": "Date"
    },
    {
        "name": "totalInvoiced",
        "baseName": "totalInvoiced",
        "type": "Amount"
    },
    {
        "name": "totalToBeInvoiced",
        "baseName": "totalToBeInvoiced",
        "type": "Amount"
    },
    {
        "name": "estimate",
        "baseName": "estimate",
        "type": "Amount"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "ProjectStatus"
    }
];
//# sourceMappingURL=project.js.map