export declare class ContactPerson {
    /**
    * First name of person
    */
    'firstName'?: string;
    /**
    * Last name of person
    */
    'lastName'?: string;
    /**
    * Email address of person
    */
    'emailAddress'?: string;
    /**
    * boolean to indicate whether contact should be included on emails with invoices etc.
    */
    'includeInEmails'?: boolean;
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
