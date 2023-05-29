"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeductionType = void 0;
class DeductionType {
    static getAttributeTypeMap() {
        return DeductionType.attributeTypeMap;
    }
}
exports.DeductionType = DeductionType;
DeductionType.discriminator = undefined;
DeductionType.attributeTypeMap = [
    {
        "name": "name",
        "baseName": "Name",
        "type": "string"
    },
    {
        "name": "accountCode",
        "baseName": "AccountCode",
        "type": "string"
    },
    {
        "name": "reducesTax",
        "baseName": "ReducesTax",
        "type": "boolean"
    },
    {
        "name": "reducesSuper",
        "baseName": "ReducesSuper",
        "type": "boolean"
    },
    {
        "name": "isExemptFromW1",
        "baseName": "IsExemptFromW1",
        "type": "boolean"
    },
    {
        "name": "deductionTypeID",
        "baseName": "DeductionTypeID",
        "type": "string"
    },
    {
        "name": "updatedDateUTC",
        "baseName": "UpdatedDateUTC",
        "type": "Date"
    },
    {
        "name": "deductionCategory",
        "baseName": "DeductionCategory",
        "type": "DeductionType.DeductionCategoryEnum"
    },
    {
        "name": "currentRecord",
        "baseName": "CurrentRecord",
        "type": "boolean"
    }
];
(function (DeductionType) {
    let DeductionCategoryEnum;
    (function (DeductionCategoryEnum) {
        DeductionCategoryEnum[DeductionCategoryEnum["NONE"] = 'NONE'] = "NONE";
        DeductionCategoryEnum[DeductionCategoryEnum["UNIONFEES"] = 'UNIONFEES'] = "UNIONFEES";
        DeductionCategoryEnum[DeductionCategoryEnum["WORKPLACEGIVING"] = 'WORKPLACEGIVING'] = "WORKPLACEGIVING";
    })(DeductionCategoryEnum = DeductionType.DeductionCategoryEnum || (DeductionType.DeductionCategoryEnum = {}));
})(DeductionType = exports.DeductionType || (exports.DeductionType = {}));
//# sourceMappingURL=deductionType.js.map