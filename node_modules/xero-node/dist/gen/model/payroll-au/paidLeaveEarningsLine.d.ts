export declare class PaidLeaveEarningsLine {
    /**
    * Xero leave type identifier
    */
    'leaveTypeID': string;
    /**
    * Paid leave amount
    */
    'amount': number;
    /**
    * The amount of leave loading applied for the leave type that is subject to Superannuation Guarantee Contributions. *Only applicable for Leave Types with Annual Leave Categories
    */
    'sGCAppliedLeaveLoadingAmount'?: number;
    /**
    * The amount of leave loading applied for the leave type that is exempt from Superannuation Guarantee Contributions. *Only applicable for Leave Types with Annual Leave Categories
    */
    'sGCExemptedLeaveLoadingAmount'?: number;
    /**
    * Reset the STP categorisations for the leave type. *Only applicable for Leave Types with Annual Leave Categories
    */
    'resetSTPCategorisation'?: boolean;
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
