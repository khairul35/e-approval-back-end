export declare class TimesheetLine {
    /**
    * The Xero identifier for an Earnings Rate
    */
    'earningsRateID'?: string;
    /**
    * The Xero identifier for a Tracking Category. The TrackingOptionID must belong to the TrackingCategory selected as TimesheetCategories under Payroll Settings.
    */
    'trackingItemID'?: string;
    /**
    * The number of units on a timesheet line
    */
    'numberOfUnits'?: Array<number>;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
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
