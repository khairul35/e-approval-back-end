"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentStatementResponse = void 0;
class CurrentStatementResponse {
    static getAttributeTypeMap() {
        return CurrentStatementResponse.attributeTypeMap;
    }
}
exports.CurrentStatementResponse = CurrentStatementResponse;
CurrentStatementResponse.discriminator = undefined;
CurrentStatementResponse.attributeTypeMap = [
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
        "name": "startBalance",
        "baseName": "startBalance",
        "type": "number"
    },
    {
        "name": "endBalance",
        "baseName": "endBalance",
        "type": "number"
    },
    {
        "name": "importedDateTimeUtc",
        "baseName": "importedDateTimeUtc",
        "type": "Date"
    },
    {
        "name": "importSourceType",
        "baseName": "importSourceType",
        "type": "string"
    }
];
//# sourceMappingURL=currentStatementResponse.js.map