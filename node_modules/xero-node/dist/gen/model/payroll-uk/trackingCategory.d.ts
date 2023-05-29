export declare class TrackingCategory {
    /**
    * The Xero identifier for Employee groups tracking category.
    */
    'employeeGroupsTrackingCategoryID'?: string;
    /**
    * The Xero identifier for Timesheet tracking category.
    */
    'timesheetTrackingCategoryID'?: string;
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
