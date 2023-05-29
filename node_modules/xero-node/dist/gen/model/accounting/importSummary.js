"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ImportSummary = void 0;
/**
* A summary of the import from setup endpoint
*/
class ImportSummary {
    static getAttributeTypeMap() {
        return ImportSummary.attributeTypeMap;
    }
}
exports.ImportSummary = ImportSummary;
ImportSummary.discriminator = undefined;
ImportSummary.attributeTypeMap = [
    {
        "name": "accounts",
        "baseName": "Accounts",
        "type": "ImportSummaryAccounts"
    },
    {
        "name": "organisation",
        "baseName": "Organisation",
        "type": "ImportSummaryOrganisation"
    }
];
//# sourceMappingURL=importSummary.js.map