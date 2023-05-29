export declare class User {
    /**
    * Xero identifier
    */
    'userID'?: string;
    /**
    * Email address of user
    */
    'emailAddress'?: string;
    /**
    * First name of user
    */
    'firstName'?: string;
    /**
    * Last name of user
    */
    'lastName'?: string;
    /**
    * Timestamp of last change to user
    */
    'updatedDateUTC'?: Date;
    /**
    * Boolean to indicate if user is the subscriber
    */
    'isSubscriber'?: boolean;
    /**
    * User role that defines permissions in Xero and via API (READONLY, INVOICEONLY, STANDARD, FINANCIALADVISER, etc)
    */
    'organisationRole'?: User.OrganisationRoleEnum;
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
export declare namespace User {
    enum OrganisationRoleEnum {
        READONLY,
        INVOICEONLY,
        STANDARD,
        FINANCIALADVISER,
        MANAGEDCLIENT,
        CASHBOOKCLIENT,
        UNKNOWN
    }
}
