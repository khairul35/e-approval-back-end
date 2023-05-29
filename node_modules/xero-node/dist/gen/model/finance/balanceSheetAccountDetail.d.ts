export declare class BalanceSheetAccountDetail {
    /**
    * Accounting code
    */
    'code'?: string;
    /**
    * ID of the account
    */
    'accountID'?: string;
    /**
    * Account name
    */
    'name'?: string;
    /**
    * Reporting code
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
