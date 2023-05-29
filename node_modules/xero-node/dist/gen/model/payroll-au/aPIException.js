"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIException = void 0;
/**
* The object returned for a bad request
*/
class APIException {
    static getAttributeTypeMap() {
        return APIException.attributeTypeMap;
    }
}
exports.APIException = APIException;
APIException.discriminator = undefined;
APIException.attributeTypeMap = [
    {
        "name": "errorNumber",
        "baseName": "ErrorNumber",
        "type": "number"
    },
    {
        "name": "type",
        "baseName": "Type",
        "type": "string"
    },
    {
        "name": "message",
        "baseName": "Message",
        "type": "string"
    }
];
//# sourceMappingURL=aPIException.js.map