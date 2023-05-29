export declare class ReimbursementType {
    /**
    * Name of the earnings rate (max length = 100)
    */
    'name'?: string;
    /**
    * See Accounts
    */
    'accountCode'?: string;
    /**
    * Xero identifier
    */
    'reimbursementTypeID'?: string;
    /**
    * Last modified timestamp
    */
    'updatedDateUTC'?: Date;
    /**
    * Is the current record
    */
    'currentRecord'?: boolean;
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
