export declare class TimesheetLine {
    /**
    * The Xero identifier for a Timesheet Line
    */
    'timesheetLineID'?: string;
    /**
    * The Date that this Timesheet Line is for (YYYY-MM-DD)
    */
    'date': string;
    /**
    * The Xero identifier for the Earnings Rate that the Timesheet is for
    */
    'earningsRateID': string;
    /**
    * The Xero identifier for the Tracking Item that the Timesheet is for
    */
    'trackingItemID'?: string;
    /**
    * The Number of Units of the Timesheet Line
    */
    'numberOfUnits': number;
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
