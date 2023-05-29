"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reimbursement = void 0;
class Reimbursement {
    static getAttributeTypeMap() {
        return Reimbursement.attributeTypeMap;
    }
}
exports.Reimbursement = Reimbursement;
Reimbursement.discriminator = undefined;
Reimbursement.attributeTypeMap = [
    {
        "name": "reimbursementID",
        "baseName": "reimbursementID",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "accountID",
        "baseName": "accountID",
        "type": "string"
    },
    {
        "name": "currentRecord",
        "baseName": "currentRecord",
        "type": "boolean"
    },
    {
        "name": "reimbursementCategory",
        "baseName": "reimbursementCategory",
        "type": "Reimbursement.ReimbursementCategoryEnum"
    },
    {
        "name": "calculationType",
        "baseName": "calculationType",
        "type": "Reimbursement.CalculationTypeEnum"
    },
    {
        "name": "standardAmount",
        "baseName": "standardAmount",
        "type": "string"
    },
    {
        "name": "standardTypeOfUnits",
        "baseName": "standardTypeOfUnits",
        "type": "Reimbursement.StandardTypeOfUnitsEnum"
    },
    {
        "name": "standardRatePerUnit",
        "baseName": "standardRatePerUnit",
        "type": "number"
    }
];
(function (Reimbursement) {
    let ReimbursementCategoryEnum;
    (function (ReimbursementCategoryEnum) {
        ReimbursementCategoryEnum[ReimbursementCategoryEnum["GST"] = 'GST'] = "GST";
        ReimbursementCategoryEnum[ReimbursementCategoryEnum["NoGST"] = 'NoGST'] = "NoGST";
        ReimbursementCategoryEnum[ReimbursementCategoryEnum["GSTInclusive"] = 'GSTInclusive'] = "GSTInclusive";
    })(ReimbursementCategoryEnum = Reimbursement.ReimbursementCategoryEnum || (Reimbursement.ReimbursementCategoryEnum = {}));
    let CalculationTypeEnum;
    (function (CalculationTypeEnum) {
        CalculationTypeEnum[CalculationTypeEnum["Unknown"] = 'Unknown'] = "Unknown";
        CalculationTypeEnum[CalculationTypeEnum["FixedAmount"] = 'FixedAmount'] = "FixedAmount";
        CalculationTypeEnum[CalculationTypeEnum["RatePerUnit"] = 'RatePerUnit'] = "RatePerUnit";
    })(CalculationTypeEnum = Reimbursement.CalculationTypeEnum || (Reimbursement.CalculationTypeEnum = {}));
    let StandardTypeOfUnitsEnum;
    (function (StandardTypeOfUnitsEnum) {
        StandardTypeOfUnitsEnum[StandardTypeOfUnitsEnum["Hours"] = 'Hours'] = "Hours";
        StandardTypeOfUnitsEnum[StandardTypeOfUnitsEnum["Km"] = 'km'] = "Km";
    })(StandardTypeOfUnitsEnum = Reimbursement.StandardTypeOfUnitsEnum || (Reimbursement.StandardTypeOfUnitsEnum = {}));
})(Reimbursement = exports.Reimbursement || (exports.Reimbursement = {}));
//# sourceMappingURL=reimbursement.js.map