"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EarningsRate = void 0;
class EarningsRate {
    static getAttributeTypeMap() {
        return EarningsRate.attributeTypeMap;
    }
}
exports.EarningsRate = EarningsRate;
EarningsRate.discriminator = undefined;
EarningsRate.attributeTypeMap = [
    {
        "name": "earningsRateID",
        "baseName": "earningsRateID",
        "type": "string"
    },
    {
        "name": "name",
        "baseName": "name",
        "type": "string"
    },
    {
        "name": "earningsType",
        "baseName": "earningsType",
        "type": "EarningsRate.EarningsTypeEnum"
    },
    {
        "name": "rateType",
        "baseName": "rateType",
        "type": "EarningsRate.RateTypeEnum"
    },
    {
        "name": "typeOfUnits",
        "baseName": "typeOfUnits",
        "type": "string"
    },
    {
        "name": "currentRecord",
        "baseName": "currentRecord",
        "type": "boolean"
    },
    {
        "name": "expenseAccountID",
        "baseName": "expenseAccountID",
        "type": "string"
    },
    {
        "name": "ratePerUnit",
        "baseName": "ratePerUnit",
        "type": "number"
    },
    {
        "name": "multipleOfOrdinaryEarningsRate",
        "baseName": "multipleOfOrdinaryEarningsRate",
        "type": "number"
    },
    {
        "name": "fixedAmount",
        "baseName": "fixedAmount",
        "type": "number"
    }
];
(function (EarningsRate) {
    let EarningsTypeEnum;
    (function (EarningsTypeEnum) {
        EarningsTypeEnum[EarningsTypeEnum["Allowance"] = 'Allowance'] = "Allowance";
        EarningsTypeEnum[EarningsTypeEnum["Backpay"] = 'Backpay'] = "Backpay";
        EarningsTypeEnum[EarningsTypeEnum["Bonus"] = 'Bonus'] = "Bonus";
        EarningsTypeEnum[EarningsTypeEnum["Commission"] = 'Commission'] = "Commission";
        EarningsTypeEnum[EarningsTypeEnum["DiscretionaryPayments"] = 'DiscretionaryPayments'] = "DiscretionaryPayments";
        EarningsTypeEnum[EarningsTypeEnum["HolidayPay"] = 'HolidayPay'] = "HolidayPay";
        EarningsTypeEnum[EarningsTypeEnum["LumpSum"] = 'LumpSum'] = "LumpSum";
        EarningsTypeEnum[EarningsTypeEnum["OtherEarnings"] = 'OtherEarnings'] = "OtherEarnings";
        EarningsTypeEnum[EarningsTypeEnum["OtherGrossEarnings"] = 'OtherGrossEarnings'] = "OtherGrossEarnings";
        EarningsTypeEnum[EarningsTypeEnum["OvertimeEarnings"] = 'OvertimeEarnings'] = "OvertimeEarnings";
        EarningsTypeEnum[EarningsTypeEnum["RegularEarnings"] = 'RegularEarnings'] = "RegularEarnings";
        EarningsTypeEnum[EarningsTypeEnum["SalarySacrificeForKiwiSaver"] = 'SalarySacrificeForKiwiSaver'] = "SalarySacrificeForKiwiSaver";
        EarningsTypeEnum[EarningsTypeEnum["TipsDirect"] = 'Tips(Direct)'] = "TipsDirect";
        EarningsTypeEnum[EarningsTypeEnum["TipsNonDirect"] = 'Tips(Non-Direct)'] = "TipsNonDirect";
        EarningsTypeEnum[EarningsTypeEnum["WithholdingIncome"] = 'WithholdingIncome'] = "WithholdingIncome";
    })(EarningsTypeEnum = EarningsRate.EarningsTypeEnum || (EarningsRate.EarningsTypeEnum = {}));
    let RateTypeEnum;
    (function (RateTypeEnum) {
        RateTypeEnum[RateTypeEnum["RatePerUnit"] = 'RatePerUnit'] = "RatePerUnit";
        RateTypeEnum[RateTypeEnum["MultipleOfOrdinaryEarningsRate"] = 'MultipleOfOrdinaryEarningsRate'] = "MultipleOfOrdinaryEarningsRate";
        RateTypeEnum[RateTypeEnum["FixedAmount"] = 'FixedAmount'] = "FixedAmount";
    })(RateTypeEnum = EarningsRate.RateTypeEnum || (EarningsRate.RateTypeEnum = {}));
})(EarningsRate = exports.EarningsRate || (exports.EarningsRate = {}));
//# sourceMappingURL=earningsRate.js.map