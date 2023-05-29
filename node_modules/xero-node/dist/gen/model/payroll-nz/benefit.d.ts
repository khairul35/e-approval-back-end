export declare class Benefit {
    /**
    * The Xero identifier for superannuation
    */
    'id'?: string;
    /**
    * Name of the superannuations
    */
    'name': string;
    /**
    * Superannuations Category type
    */
    'category': Benefit.CategoryEnum;
    /**
    * Xero identifier for Liability Account
    */
    'liabilityAccountId': string;
    /**
    * Xero identifier for Expense Account
    */
    'expenseAccountId': string;
    /**
    * Calculation Type of the superannuation either FixedAmount or PercentageOfTaxableEarnings
    */
    'calculationTypeNZ'?: Benefit.CalculationTypeNZEnum;
    /**
    * Standard amount of the superannuation
    */
    'standardAmount'?: number;
    /**
    * Percentage of Taxable Earnings of the superannuation
    */
    'percentage'?: number;
    /**
    * Company Maximum amount of the superannuation
    */
    'companyMax'?: number;
    /**
    * Identifier of a record is active or not.
    */
    'currentRecord'?: boolean;
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
export declare namespace Benefit {
    enum CategoryEnum {
        KiwiSaver,
        ComplyingFund,
        Other
    }
    enum CalculationTypeNZEnum {
        FixedAmount,
        PercentageOfTaxableEarnings
    }
}
