export declare class Reimbursement {
    /**
    * Xero unique identifier for a reimbursement
    */
    'reimbursementID'?: string;
    /**
    * Name of the reimbursement
    */
    'name': string;
    /**
    * Xero unique identifier for the account used for the reimbursement
    */
    'accountID': string;
    /**
    * Indicates that whether the reimbursement is active
    */
    'currentRecord'?: boolean;
    /**
    * See Reimbursement Categories
    */
    'reimbursementCategory'?: Reimbursement.ReimbursementCategoryEnum;
    /**
    * See Calculation Types
    */
    'calculationType'?: Reimbursement.CalculationTypeEnum;
    /**
    * Optional Fixed Rate Amount. Applicable when calculation type is Fixed Amount
    */
    'standardAmount'?: string;
    /**
    * Optional Type Of Units. Applicable when calculation type is Rate Per Unit
    */
    'standardTypeOfUnits'?: Reimbursement.StandardTypeOfUnitsEnum;
    /**
    * Optional Rate Per Unit. Applicable when calculation type is Rate Per Unit
    */
    'standardRatePerUnit'?: number;
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
export declare namespace Reimbursement {
    enum ReimbursementCategoryEnum {
        GST,
        NoGST,
        GSTInclusive
    }
    enum CalculationTypeEnum {
        Unknown,
        FixedAmount,
        RatePerUnit
    }
    enum StandardTypeOfUnitsEnum {
        Hours,
        Km
    }
}
