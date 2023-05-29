export declare class PnlAccount {
    /**
    * ID of the account
    */
    'accountID'?: string;
    /**
    * The type of the account. See <a href=\'https://developer.xero.com/documentation/api/types#AccountTypes\'>Account Types</a>
    */
    'accountType'?: string;
    /**
    * Account code
    */
    'code'?: string;
    /**
    * Account name
    */
    'name'?: string;
    /**
    * Reporting code (Shown if set)
    */
    'reportingCode'?: string;
    /**
    * Total movement on this account
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
