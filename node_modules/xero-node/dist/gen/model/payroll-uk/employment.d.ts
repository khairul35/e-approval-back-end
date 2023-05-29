export declare class Employment {
    /**
    * Xero unique identifier for the payroll calendar of the employee
    */
    'payrollCalendarID'?: string;
    /**
    * Start date of the employment (YYYY-MM-DD)
    */
    'startDate'?: string;
    /**
    * The employment number of the employee
    */
    'employeeNumber'?: string;
    /**
    * The NI Category of the employee
    */
    'niCategory'?: Employment.NiCategoryEnum;
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
export declare namespace Employment {
    enum NiCategoryEnum {
        A,
        B,
        C,
        F,
        H,
        I,
        J,
        L,
        M,
        S,
        V,
        X,
        Z
    }
}
