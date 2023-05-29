export declare class EmployeeOpeningBalance {
    /**
    * The opening balance period end date.
    */
    'periodEndDate'?: string;
    /**
    * The paid number of days.
    */
    'daysPaid'?: number;
    /**
    * The number of unpaid weeks.
    */
    'unpaidWeeks'?: number;
    /**
    * The gross earnings during the period.
    */
    'grossEarnings'?: number;
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
