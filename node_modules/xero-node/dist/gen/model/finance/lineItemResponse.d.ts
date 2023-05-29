export declare class LineItemResponse {
    /**
    * Xero Identifier of account
    */
    'accountId'?: string;
    /**
    * Shown if set
    */
    'reportingCode'?: string;
    /**
    * Amount of line item
    */
    'lineAmount'?: number;
    /**
    * Account type
    */
    'accountType'?: string;
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
