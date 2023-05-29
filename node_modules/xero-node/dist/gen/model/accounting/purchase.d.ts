export declare class Purchase {
    /**
    * Unit Price of the item. By default UnitPrice is rounded to two decimal places. You can use 4 decimal places by adding the unitdp=4 querystring parameter to your request.
    */
    'unitPrice'?: number;
    /**
    * Default account code to be used for purchased/sale. Not applicable to the purchase details of tracked items
    */
    'accountCode'?: string;
    /**
    * Cost of goods sold account. Only applicable to the purchase details of tracked items.
    */
    'cOGSAccountCode'?: string;
    /**
    * The tax type from TaxRates
    */
    'taxType'?: string;
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
