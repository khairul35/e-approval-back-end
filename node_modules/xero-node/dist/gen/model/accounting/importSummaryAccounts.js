"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportSummaryAccounts = void 0;
/**
* A summary of the accounts changes
*/
class ImportSummaryAccounts {
    static getAttributeTypeMap() {
        return ImportSummaryAccounts.attributeTypeMap;
    }
}
exports.ImportSummaryAccounts = ImportSummaryAccounts;
ImportSummaryAccounts.discriminator = undefined;
ImportSummaryAccounts.attributeTypeMap = [
    {
        "name": "total",
        "baseName": "Total",
        "type": "number"
    },
    {
        "name": "_new",
        "baseName": "New",
        "type": "number"
    },
    {
        "name": "updated",
        "baseName": "Updated",
        "type": "number"
    },
    {
        "name": "deleted",
        "baseName": "Deleted",
        "type": "number"
    },
    {
        "name": "locked",
        "baseName": "Locked",
        "type": "number"
    },
    {
        "name": "system",
        "baseName": "System",
        "type": "number"
    },
    {
        "name": "errored",
        "baseName": "Errored",
        "type": "number"
    },
    {
        "name": "present",
        "baseName": "Present",
        "type": "boolean"
    },
    {
        "name": "newOrUpdated",
        "baseName": "NewOrUpdated",
        "type": "number"
    }
];
//# sourceMappingURL=importSummaryAccounts.js.map