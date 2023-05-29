export declare class CashflowAccount {
    /**
    * ID of the account
    */
    'accountId'?: string;
    /**
    * The type of the account. See <a href=\'https://developer.xero.com/documentation/api/types#AccountTypes\'>Account Types</a>
    */
    'accountType'?: string;
    /**
    * The class of the account. See <a href=\'https://developer.xero.com/documentation/api/types#AccountClassTypes\'>Account Class Types</a>
    */
    'accountClass'?: string;
    /**
    * Account code
    */
    'code'?: string;
    /**
    * Account name
    */
    'name'?: string;
    /**
    * Reporting code used for cash flow classification
    */
    'reportingCode'?: string;
    /**
    * Total amount for the account
    */
    'total'?: number;
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
