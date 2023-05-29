"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PracticeResponse = void 0;
class PracticeResponse {
    static getAttributeTypeMap() {
        return PracticeResponse.attributeTypeMap;
    }
}
exports.PracticeResponse = PracticeResponse;
PracticeResponse.discriminator = undefined;
PracticeResponse.attributeTypeMap = [
    {
        "name": "xeroPartnerSince",
        "baseName": "xeroPartnerSince",
        "type": "number"
    },
    {
        "name": "tier",
        "baseName": "tier",
        "type": "string"
    },
    {
        "name": "location",
        "baseName": "location",
        "type": "string"
    },
    {
        "name": "organisationCount",
        "baseName": "organisationCount",
        "type": "number"
    },
    {
        "name": "staffCertified",
        "baseName": "staffCertified",
        "type": "boolean"
    }
];
//# sourceMappingURL=practiceResponse.js.map