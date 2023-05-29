import { DataSourceResponse } from '././dataSourceResponse';
export declare class StatementLinesResponse {
    /**
    * Sum of the amounts of all statement lines where both the reconciled flag is set to FALSE, and the amount is positive.
    */
    'unreconciledAmountPos'?: number;
    /**
    * Sum of the amounts of all statement lines where both the reconciled flag is set to FALSE, and the amount is negative.
    */
    'unreconciledAmountNeg'?: number;
    /**
    * Count of all statement lines where the reconciled flag is set to FALSE.
    */
    'unreconciledLines'?: number;
    /**
    * Sum-product of age of statement line in days multiplied by transaction amount, divided by the sum of transaction amount - in for those statement lines in which the reconciled flag is set to FALSE, and the amount is positive. Provides an indication of the age of unreconciled transactions.
    */
    'avgDaysUnreconciledPos'?: number;
    /**
    * Sum-product of age of statement line in days multiplied by transaction amount, divided by the sum of transaction amount - in for those statement lines in which the reconciled flag is set to FALSE, and the amount is negative. Provides an indication of the age of unreconciled transactions.
    */
    'avgDaysUnreconciledNeg'?: number;
    /**
    * UTC Date which is the earliest transaction date of a statement line for which the reconciled flag is set to FALSE.  This date is represented in ISO 8601 format.
    */
    'earliestUnreconciledTransaction'?: string;
    /**
    * UTC Date which is the latest transaction date of a statement line for which the reconciled flag is set to FALSE.  This date is represented in ISO 8601 format.
    */
    'latestUnreconciledTransaction'?: string;
    /**
    * Sum of the amounts of all deleted statement lines.  Transactions may be deleted due to duplication or otherwise.
    */
    'deletedAmount'?: number;
    /**
    * Sum of the amounts of all statement lines.  This is used as a metric of comparison to the unreconciled figures above.
    */
    'totalAmount'?: number;
    'dataSource'?: DataSourceResponse;
    /**
    * UTC Date which is the earliest transaction date of a statement line for which the reconciled flag is set to TRUE.  This date is represented in ISO 8601 format.
    */
    'earliestReconciledTransaction'?: string;
    /**
    * UTC Date which is the latest transaction date of a statement line for which the reconciled flag is set to TRUE.  This date is represented in ISO 8601 format.
    */
    'latestReconciledTransaction'?: string;
    /**
    * Sum of the amounts of all statement lines where both the reconciled flag is set to TRUE, and the amount is positive.
    */
    'reconciledAmountPos'?: number;
    /**
    * Sum of the amounts of all statement lines where both the reconciled flag is set to TRUE, and the amount is negative.
    */
    'reconciledAmountNeg'?: number;
    /**
    * Count of all statement lines where the reconciled flag is set to TRUE
    */
    'reconciledLines'?: number;
    /**
    * Sum of the amounts of all statement lines where the amount is positive
    */
    'totalAmountPos'?: number;
    /**
    * Sum of the amounts of all statement lines where the amount is negative.
    */
    'totalAmountNeg'?: number;
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
