export declare class EmployeeLeaveBalance {
    /**
    * Name of the leave type.
    */
    'name'?: string;
    /**
    * The Xero identifier for leave type
    */
    'leaveTypeID'?: string;
    /**
    * The employees current balance for the corresponding leave type.
    */
    'balance'?: number;
    /**
    * The type of the units of the leave.
    */
    'typeOfUnits'?: string;
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
