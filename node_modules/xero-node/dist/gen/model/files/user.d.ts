export declare class User {
    /**
    * Xero identifier
    */
    'id': string;
    /**
    * Key is Name, but returns Email address of user who created the file
    */
    'name'?: string;
    /**
    * First name of user
    */
    'firstName'?: string;
    /**
    * Last name of user
    */
    'lastName'?: string;
    /**
    * Last name of user
    */
    'fullName'?: string;
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
