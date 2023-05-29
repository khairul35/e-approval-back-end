export declare class Benefit {
    /**
    * unique identifier in Xero
    */
    'id'?: string;
    /**
    * Name of the employer pension
    */
    'name': string;
    /**
    * Category type of the employer pension
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
    * Standard amount of the employer pension
    */
    'standardAmount'?: number;
    /**
    * Percentage of gross of the employer pension
    */
    'percentage': number;
    /**
    * Calculation Type of the employer pension (FixedAmount or PercentageOfGross).
    */
    'calculationType': Benefit.CalculationTypeEnum;
    /**
    * Identifier of a record is active or not.
    */
    'currentRecord'?: boolean;
    /**
    * Identifier of subject To NIC
    */
    'subjectToNIC'?: boolean;
    /**
    * Identifier of subject To pension
    */
    'subjectToPension'?: boolean;
    /**
    * Identifier of subject To Tax
    */
    'subjectToTax'?: boolean;
    /**
    * Identifier of calculating on qualifying earnings
    */
    'isCalculatingOnQualifyingEarnings'?: boolean;
    /**
    * display the balance to employee
    */
    'showBalanceToEmployee'?: boolean;
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
        StakeholderPension,
        Other
    }
    enum CalculationTypeEnum {
        FixedAmount,
        PercentageOfGross
    }
}
