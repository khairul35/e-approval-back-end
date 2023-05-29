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
    'deductionCategory': Deduction.DeductionCategoryEnum;
    /**
    * Xero identifier for Liability Account
    */
    'liabilityAccountId': string;
    /**
    * Identifier of a record is active or not.
    */
    'currentRecord'?: boolean;
    /**
    * Standard amount of the deduction.
    */
    'standardAmount'?: number;
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
        PayrollGiving,
        KiwiSaverVoluntaryContributions,
        Superannuation,
        NzOther
    }
}
