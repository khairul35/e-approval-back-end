export declare class ContactResponse {
    /**
    * Xero Identifier of contact
    */
    'contactId'?: string;
    /**
    * Full name of contact/organisation
    */
    'contactName'?: string;
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
