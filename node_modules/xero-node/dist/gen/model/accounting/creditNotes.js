"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditNotes = void 0;
class CreditNotes {
    static getAttributeTypeMap() {
        return CreditNotes.attributeTypeMap;
    }
}
exports.CreditNotes = CreditNotes;
CreditNotes.discriminator = undefined;
CreditNotes.attributeTypeMap = [
    {
        "name": "creditNotes",
        "baseName": "CreditNotes",
        "type": "Array<CreditNote>"
    }
];
//# sourceMappingURL=creditNotes.js.map