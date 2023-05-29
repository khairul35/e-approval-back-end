"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedConnection = void 0;
class FeedConnection {
    static getAttributeTypeMap() {
        return FeedConnection.attributeTypeMap;
    }
}
exports.FeedConnection = FeedConnection;
FeedConnection.discriminator = undefined;
FeedConnection.attributeTypeMap = [
    {
        "name": "id",
        "baseName": "id",
        "type": "string"
    },
    {
        "name": "accountToken",
        "baseName": "accountToken",
        "type": "string"
    },
    {
        "name": "accountNumber",
        "baseName": "accountNumber",
        "type": "string"
    },
    {
        "name": "accountName",
        "baseName": "accountName",
        "type": "string"
    },
    {
        "name": "accountId",
        "baseName": "accountId",
        "type": "string"
    },
    {
        "name": "accountType",
        "baseName": "accountType",
        "type": "FeedConnection.AccountTypeEnum"
    },
    {
        "name": "currency",
        "baseName": "currency",
        "type": "CurrencyCode"
    },
    {
        "name": "country",
        "baseName": "country",
        "type": "CountryCode"
    },
    {
        "name": "status",
        "baseName": "status",
        "type": "FeedConnection.StatusEnum"
    },
    {
        "name": "error",
        "baseName": "error",
        "type": "Error"
    }
];
(function (FeedConnection) {
    let AccountTypeEnum;
    (function (AccountTypeEnum) {
        AccountTypeEnum[AccountTypeEnum["BANK"] = 'BANK'] = "BANK";
        AccountTypeEnum[AccountTypeEnum["CREDITCARD"] = 'CREDITCARD'] = "CREDITCARD";
    })(AccountTypeEnum = FeedConnection.AccountTypeEnum || (FeedConnection.AccountTypeEnum = {}));
    let StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["PENDING"] = 'PENDING'] = "PENDING";
        StatusEnum[StatusEnum["REJECTED"] = 'REJECTED'] = "REJECTED";
    })(StatusEnum = FeedConnection.StatusEnum || (FeedConnection.StatusEnum = {}));
})(FeedConnection = exports.FeedConnection || (exports.FeedConnection = {}));
//# sourceMappingURL=feedConnection.js.map