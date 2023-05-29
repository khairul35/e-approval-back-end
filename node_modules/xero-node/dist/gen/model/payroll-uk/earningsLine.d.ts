export declare class EarningsLine {
    /**
    * Xero identifier for payroll earnings line
    */
    'earningsLineID'?: string;
    /**
    * Xero identifier for payroll earnings rate
    */
    'earningsRateID'?: string;
    /**
    * name of earnings rate for display in UI
    */
    'displayName'?: string;
    /**
    * Rate per unit for earnings line
    */
    'ratePerUnit'?: number;
    /**
    * Earnings number of units
    */
    'numberOfUnits'?: number;
    /**
    * Earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed
    */
    'fixedAmount'?: number;
    /**
    * The amount of the earnings line.
    */
    'amount'?: number;
    /**
    * Identifies if the earnings is taken from the timesheet. False for earnings line
    */
    'isLinkedToTimesheet'?: boolean;
    /**
    * Identifies if the earnings is using an average daily pay rate
    */
    'isAverageDailyPayRate'?: boolean;
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
