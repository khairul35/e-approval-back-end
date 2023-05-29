export declare class EmployeeStatutoryLeaveSummary {
    /**
    * The unique identifier (guid) of a statutory leave.
    */
    'statutoryLeaveID'?: string;
    /**
    * The unique identifier (guid) of the employee
    */
    'employeeID'?: string;
    /**
    * The category of statutory leave
    */
    'type'?: EmployeeStatutoryLeaveSummary.TypeEnum;
    /**
    * The date when the leave starts
    */
    'startDate'?: string;
    /**
    * The date when the leave ends
    */
    'endDate'?: string;
    /**
    * Whether the leave was entitled to receive payment
    */
    'isEntitled'?: boolean;
    /**
    * The status of the leave
    */
    'status'?: EmployeeStatutoryLeaveSummary.StatusEnum;
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
export declare namespace EmployeeStatutoryLeaveSummary {
    enum TypeEnum {
        Sick,
        Adoption,
        Maternity,
        Paternity,
        Sharedparental
    }
    enum StatusEnum {
        Pending,
        InProgress,
        Completed
    }
}
