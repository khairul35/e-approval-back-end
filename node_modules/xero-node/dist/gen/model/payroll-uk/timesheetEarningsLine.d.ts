export declare class TimesheetEarningsLine {
    /**
    * Xero identifier for payroll timesheet earnings rate
    */
    'earningsRateID'?: string;
    /**
    * Rate per unit for timesheet earnings line
    */
    'ratePerUnit'?: number;
    /**
    * Timesheet earnings number of units
    */
    'numberOfUnits'?: number;
    /**
    * Timesheet earnings fixed amount. Only applicable if the EarningsRate RateType is Fixed
    */
    'fixedAmount'?: number;
    /**
    * The amount of the timesheet earnings line.
    */
    'amount'?: number;
    /**
    * Identifies if the timesheet earnings is taken from the timesheet. False for leave earnings line
    */
    'isLinkedToTimesheet'?: boolean;
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
