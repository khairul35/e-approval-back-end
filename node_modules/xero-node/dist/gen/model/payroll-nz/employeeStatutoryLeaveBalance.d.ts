export declare class EmployeeStatutoryLeaveBalance {
    /**
    * The type of statutory leave
    */
    'leaveType'?: EmployeeStatutoryLeaveBalance.LeaveTypeEnum;
    /**
    * The balance remaining for the corresponding leave type as of specified date.
    */
    'balanceRemaining'?: number;
    /**
    * The units will be \"Hours\"
    */
    'units'?: EmployeeStatutoryLeaveBalance.UnitsEnum;
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
export declare namespace EmployeeStatutoryLeaveBalance {
    enum LeaveTypeEnum {
        Sick,
        Adoption,
        Maternity,
        Paternity,
        Sharedparental
    }
    enum UnitsEnum {
        Hours
    }
}
