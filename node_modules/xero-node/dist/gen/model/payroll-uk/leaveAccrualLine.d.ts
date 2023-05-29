export declare class LeaveAccrualLine {
    /**
    * Xero identifier for the Leave type
    */
    'leaveTypeID'?: string;
    /**
    * Leave accrual number of units
    */
    'numberOfUnits'?: number;
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
