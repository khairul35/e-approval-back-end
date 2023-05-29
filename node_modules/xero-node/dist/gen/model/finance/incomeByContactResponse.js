"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeByContactResponse = void 0;
class IncomeByContactResponse {
    static getAttributeTypeMap() {
        return IncomeByContactResponse.attributeTypeMap;
    }
}
exports.IncomeByContactResponse = IncomeByContactResponse;
IncomeByContactResponse.discriminator = undefined;
IncomeByContactResponse.attributeTypeMap = [
    {
        "name": "startDate",
        "baseName": "startDate",
        "type": "string"
    },
    {
        "name": "endDate",
        "baseName": "endDate",
        "type": "string"
    },
    {
        "name": "total",
        "baseName": "total",
        "type": "number"
    },
    {
        "name": "totalDetail",
        "baseName": "totalDetail",
        "type": "TotalDetail"
    },
    {
        "name": "totalOther",
        "baseName": "totalOther",
        "type": "TotalOther"
    },
    {
        "name": "contacts",
        "baseName": "contacts",
        "type": "Array<ContactDetail>"
    },
    {
        "name": "manualJournals",
        "baseName": "manualJournals",
        "type": "ManualJournalTotal"
    }
];
//# sourceMappingURL=incomeByContactResponse.js.map