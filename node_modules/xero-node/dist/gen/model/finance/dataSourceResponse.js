"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSourceResponse = void 0;
class DataSourceResponse {
    static getAttributeTypeMap() {
        return DataSourceResponse.attributeTypeMap;
    }
}
exports.DataSourceResponse = DataSourceResponse;
DataSourceResponse.discriminator = undefined;
DataSourceResponse.attributeTypeMap = [
    {
        "name": "directBankFeed",
        "baseName": "directBankFeed",
        "type": "number"
    },
    {
        "name": "indirectBankFeed",
        "baseName": "indirectBankFeed",
        "type": "number"
    },
    {
        "name": "fileUpload",
        "baseName": "fileUpload",
        "type": "number"
    },
    {
        "name": "manual",
        "baseName": "manual",
        "type": "number"
    },
    {
        "name": "directBankFeedPos",
        "baseName": "directBankFeedPos",
        "type": "number"
    },
    {
        "name": "indirectBankFeedPos",
        "baseName": "indirectBankFeedPos",
        "type": "number"
    },
    {
        "name": "fileUploadPos",
        "baseName": "fileUploadPos",
        "type": "number"
    },
    {
        "name": "manualPos",
        "baseName": "manualPos",
        "type": "number"
    },
    {
        "name": "directBankFeedNeg",
        "baseName": "directBankFeedNeg",
        "type": "number"
    },
    {
        "name": "indirectBankFeedNeg",
        "baseName": "indirectBankFeedNeg",
        "type": "number"
    },
    {
        "name": "fileUploadNeg",
        "baseName": "fileUploadNeg",
        "type": "number"
    },
    {
        "name": "manualNeg",
        "baseName": "manualNeg",
        "type": "number"
    },
    {
        "name": "otherPos",
        "baseName": "otherPos",
        "type": "number"
    },
    {
        "name": "otherNeg",
        "baseName": "otherNeg",
        "type": "number"
    },
    {
        "name": "other",
        "baseName": "other",
        "type": "number"
    }
];
//# sourceMappingURL=dataSourceResponse.js.map