"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxSettings = void 0;
class TaxSettings {
    static getAttributeTypeMap() {
        return TaxSettings.attributeTypeMap;
    }
}
exports.TaxSettings = TaxSettings;
TaxSettings.discriminator = undefined;
TaxSettings.attributeTypeMap = [
    {
        "name": "periodUnits",
        "baseName": "periodUnits",
        "type": "number"
    },
    {
        "name": "periodType",
        "baseName": "periodType",
        "type": "TaxSettings.PeriodTypeEnum"
    },
    {
        "name": "taxCode",
        "baseName": "taxCode",
        "type": "TaxCode"
    },
    {
        "name": "specialTaxRate",
        "baseName": "specialTaxRate",
        "type": "string"
    },
    {
        "name": "lumpSumTaxCode",
        "baseName": "lumpSumTaxCode",
        "type": "string"
    },
    {
        "name": "lumpSumAmount",
        "baseName": "lumpSumAmount",
        "type": "string"
    }
];
(function (TaxSettings) {
    let PeriodTypeEnum;
    (function (PeriodTypeEnum) {
        PeriodTypeEnum[PeriodTypeEnum["Weeks"] = 'weeks'] = "Weeks";
        PeriodTypeEnum[PeriodTypeEnum["Months"] = 'months'] = "Months";
    })(PeriodTypeEnum = TaxSettings.PeriodTypeEnum || (TaxSettings.PeriodTypeEnum = {}));
})(TaxSettings = exports.TaxSettings || (exports.TaxSettings = {}));
//# sourceMappingURL=taxSettings.js.map