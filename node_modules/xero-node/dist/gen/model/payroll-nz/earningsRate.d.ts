export declare class EarningsRate {
    /**
    * Xero unique identifier for an earning rate
    */
    'earningsRateID'?: string;
    /**
    * Name of the earning rate
    */
    'name': string;
    /**
    * Indicates how an employee will be paid when taking this type of earning
    */
    'earningsType': EarningsRate.EarningsTypeEnum;
    /**
    * Indicates the type of the earning rate
    */
    'rateType': EarningsRate.RateTypeEnum;
    /**
    * The type of units used to record earnings
    */
    'typeOfUnits': string;
    /**
    * Indicates whether an earning type is active
    */
    'currentRecord'?: boolean;
    /**
    * The account that will be used for the earnings rate
    */
    'expenseAccountID': string;
    /**
    * Default rate per unit (optional). Only applicable if RateType is RatePerUnit
    */
    'ratePerUnit'?: number;
    /**
    * This is the multiplier used to calculate the rate per unit, based on the employee’s ordinary earnings rate. For example, for time and a half enter 1.5. Only applicable if RateType is MultipleOfOrdinaryEarningsRate
    */
    'multipleOfOrdinaryEarningsRate'?: number;
    /**
    * Optional Fixed Rate Amount. Applicable for FixedAmount Rate
    */
    'fixedAmount'?: number;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace EarningsRate {
    enum EarningsTypeEnum {
        Allowance,
        Backpay,
        Bonus,
        Commission,
        DiscretionaryPayments,
        HolidayPay,
        LumpSum,
        OtherEarnings,
        OtherGrossEarnings,
        OvertimeEarnings,
        RegularEarnings,
        SalarySacrificeForKiwiSaver,
        TipsDirect,
        TipsNonDirect,
        WithholdingIncome
    }
    enum RateTypeEnum {
        RatePerUnit,
        MultipleOfOrdinaryEarningsRate,
        FixedAmount
    }
}
