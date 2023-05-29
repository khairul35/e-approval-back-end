"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookDepreciationSetting = void 0;
class BookDepreciationSetting {
    static getAttributeTypeMap() {
        return BookDepreciationSetting.attributeTypeMap;
    }
}
exports.BookDepreciationSetting = BookDepreciationSetting;
BookDepreciationSetting.discriminator = undefined;
BookDepreciationSetting.attributeTypeMap = [
    {
        "name": "depreciationMethod",
        "baseName": "depreciationMethod",
        "type": "BookDepreciationSetting.DepreciationMethodEnum"
    },
    {
        "name": "averagingMethod",
        "baseName": "averagingMethod",
        "type": "BookDepreciationSetting.AveragingMethodEnum"
    },
    {
        "name": "depreciationRate",
        "baseName": "depreciationRate",
        "type": "number"
    },
    {
        "name": "effectiveLifeYears",
        "baseName": "effectiveLifeYears",
        "type": "number"
    },
    {
        "name": "depreciationCalculationMethod",
        "baseName": "depreciationCalculationMethod",
        "type": "BookDepreciationSetting.DepreciationCalculationMethodEnum"
    },
    {
        "name": "depreciableObjectId",
        "baseName": "depreciableObjectId",
        "type": "string"
    },
    {
        "name": "depreciableObjectType",
        "baseName": "depreciableObjectType",
        "type": "string"
    },
    {
        "name": "bookEffectiveDateOfChangeId",
        "baseName": "bookEffectiveDateOfChangeId",
        "type": "string"
    }
];
(function (BookDepreciationSetting) {
    let DepreciationMethodEnum;
    (function (DepreciationMethodEnum) {
        DepreciationMethodEnum[DepreciationMethodEnum["NoDepreciation"] = 'NoDepreciation'] = "NoDepreciation";
        DepreciationMethodEnum[DepreciationMethodEnum["StraightLine"] = 'StraightLine'] = "StraightLine";
        DepreciationMethodEnum[DepreciationMethodEnum["DiminishingValue100"] = 'DiminishingValue100'] = "DiminishingValue100";
        DepreciationMethodEnum[DepreciationMethodEnum["DiminishingValue150"] = 'DiminishingValue150'] = "DiminishingValue150";
        DepreciationMethodEnum[DepreciationMethodEnum["DiminishingValue200"] = 'DiminishingValue200'] = "DiminishingValue200";
        DepreciationMethodEnum[DepreciationMethodEnum["FullDepreciation"] = 'FullDepreciation'] = "FullDepreciation";
    })(DepreciationMethodEnum = BookDepreciationSetting.DepreciationMethodEnum || (BookDepreciationSetting.DepreciationMethodEnum = {}));
    let AveragingMethodEnum;
    (function (AveragingMethodEnum) {
        AveragingMethodEnum[AveragingMethodEnum["FullMonth"] = 'FullMonth'] = "FullMonth";
        AveragingMethodEnum[AveragingMethodEnum["ActualDays"] = 'ActualDays'] = "ActualDays";
    })(AveragingMethodEnum = BookDepreciationSetting.AveragingMethodEnum || (BookDepreciationSetting.AveragingMethodEnum = {}));
    let DepreciationCalculationMethodEnum;
    (function (DepreciationCalculationMethodEnum) {
        DepreciationCalculationMethodEnum[DepreciationCalculationMethodEnum["Rate"] = 'Rate'] = "Rate";
        DepreciationCalculationMethodEnum[DepreciationCalculationMethodEnum["Life"] = 'Life'] = "Life";
        DepreciationCalculationMethodEnum[DepreciationCalculationMethodEnum["None"] = 'None'] = "None";
    })(DepreciationCalculationMethodEnum = BookDepreciationSetting.DepreciationCalculationMethodEnum || (BookDepreciationSetting.DepreciationCalculationMethodEnum = {}));
})(BookDepreciationSetting = exports.BookDepreciationSetting || (exports.BookDepreciationSetting = {}));
//# sourceMappingURL=bookDepreciationSetting.js.map