export declare class Deduction {
    /**
    * The Xero identifier for Deduction
    */
    'deductionId'?: string;
    /**
    * Name of the deduction
    */
    'deductionName': string;
    /**
    * Deduction Category type
    */
    'deductionCategory'?: Deduction.DeductionCategoryEnum;
    /**
    * Xero identifier for Liability Account
    */
    'liabilityAccountId': string;
    /**
    * Identifier of a record is active or not.
    */
    'currentRecord'?: boolean;
    /**
    * Standard amount of the deduction
    */
    'standardAmount'?: number;
    /**
    * Identifier of reduces super liability
    */
    'reducesSuperLiability'?: boolean;
    /**
    * Identifier of reduces tax liability
    */
    'reducesTaxLiability'?: boolean;
    /**
    * determine the calculation type whether fixed amount or percentage of gross
    */
    'calculationType'?: Deduction.CalculationTypeEnum;
    /**
    * Percentage of gross
    */
    'percentage'?: number;
    /**
    * Identifier of subject To NIC
    */
    'subjectToNIC'?: boolean;
    /**
    * Identifier of subject To Tax
    */
    'subjectToTax'?: boolean;
    /**
    * Identifier of reduced by basic rate applicable or not
    */
    'isReducedByBasicRate'?: boolean;
    /**
    * Identifier for apply to pension calculations
    */
    'applyToPensionCalculations'?: boolean;
    /**
    * Identifier of calculating on qualifying earnings
    */
    'isCalculatingOnQualifyingEarnings'?: boolean;
    /**
    * Identifier of applicable for pension or not
    */
    'isPension'?: boolean;
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
export declare namespace Deduction {
    enum DeductionCategoryEnum {
        CapitalContributions,
        ChildCareVoucher,
        MakingGood,
        PostgraduateLoanDeductions,
        PrivateUsePayments,
        SalarySacrifice,
        StakeholderPension,
        StakeholderPensionPostTax,
        StudentLoanDeductions,
        UkOther
    }
    enum CalculationTypeEnum {
        FixedAmount,
        PercentageOfGross
    }
}
