export declare class Account {
    /**
    * The Xero identifier for Settings.
    */
    'accountID'?: string;
    /**
    * The assigned AccountType
    */
    'type'?: Account.TypeEnum;
    /**
    * A unique 3 digit number for each Account
    */
    'code'?: string;
    /**
    * Name of the Account.
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
export declare namespace Account {
    enum TypeEnum {
        PAYELIABILITY,
        WAGESPAYABLE,
        WAGESEXPENSE,
        BANK
    }
}
