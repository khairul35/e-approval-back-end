export declare class LeaveType {
    /**
    * Xero unique identifier for the leave type
    */
    'leaveTypeID'?: string;
    /**
    * Name of the leave type
    */
    'name': string;
    /**
    * Indicate that an employee will be paid when taking this type of leave
    */
    'isPaidLeave': boolean;
    /**
    * Indicate that a balance for this leave type to be shown on the employee’s payslips
    */
    'showOnPayslip': boolean;
    /**
    * UTC timestamp of last update to the leave type note
    */
    'updatedDateUTC'?: Date;
    /**
    * Shows whether the leave type is active or not
    */
    'isActive'?: boolean;
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
