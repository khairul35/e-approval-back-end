export declare class SuperMembership {
    /**
    * Xero unique identifier for Super membership
    */
    'superMembershipID'?: string;
    /**
    * Xero identifier for super fund
    */
    'superFundID': string;
    /**
    * The membership number assigned to the employee by the super fund.
    */
    'employeeNumber': string;
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
