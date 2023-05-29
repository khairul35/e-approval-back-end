export declare class LeaveBalance {
    /**
    * The name of the leave type
    */
    'leaveName'?: string;
    /**
    * Identifier of the leave type (see PayItems)
    */
    'leaveTypeID'?: string;
    /**
    * The balance of the leave available
    */
    'numberOfUnits'?: number;
    /**
    * The type of units as specified by the LeaveType (see PayItems)
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
