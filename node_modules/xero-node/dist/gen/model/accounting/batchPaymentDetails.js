"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchPaymentDetails = void 0;
/**
* Bank details for use on a batch payment stored with each contact
*/
class BatchPaymentDetails {
    static getAttributeTypeMap() {
        return BatchPaymentDetails.attributeTypeMap;
    }
}
exports.BatchPaymentDetails = BatchPaymentDetails;
BatchPaymentDetails.discriminator = undefined;
BatchPaymentDetails.attributeTypeMap = [
    {
        "name": "bankAccountNumber",
        "baseName": "BankAccountNumber",
        "type": "string"
    },
    {
        "name": "bankAccountName",
        "baseName": "BankAccountName",
        "type": "string"
    },
    {
        "name": "details",
        "baseName": "Details",
        "type": "string"
    },
    {
        "name": "code",
        "baseName": "Code",
        "type": "string"
    },
    {
        "name": "reference",
        "baseName": "Reference",
        "type": "string"
    }
];
//# sourceMappingURL=batchPaymentDetails.js.map