/**
* A summary of the accounts changes
*/
export declare class ImportSummaryAccounts {
    /**
    * The total number of accounts in the org
    */
    'total'?: number;
    /**
    * The number of new accounts created
    */
    '_new'?: number;
    /**
    * The number of accounts updated
    */
    'updated'?: number;
    /**
    * The number of accounts deleted
    */
    'deleted'?: number;
    /**
    * The number of locked accounts
    */
    'locked'?: number;
    /**
    * The number of system accounts
    */
    'system'?: number;
    /**
    * The number of accounts that had an error
    */
    'errored'?: number;
    'present'?: boolean;
    /**
    * The number of new or updated accounts
    */
    'newOrUpdated'?: number;
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
