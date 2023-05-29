import { AccountType } from '././accountType';
export declare class Account {
    /**
    * Xero identifier for accounts
    */
    'accountID'?: string;
    'type'?: AccountType;
    /**
    * Customer defined account code
    */
    'code'?: string;
    /**
    * Name of account
    */
    'name'?: string;
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
