export declare class LeaveAccrualLine {
    /**
    * Xero identifier for the Leave type.
    */
    'leaveTypeID'?: string;
    /**
    * Leave Accrual number of units
    */
    'numberOfUnits'?: number;
    /**
    * If you want to auto calculate leave.
    */
    'autoCalculate'?: boolean;
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
