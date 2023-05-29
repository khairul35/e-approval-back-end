export declare class CashBalance {
    /**
    * Opening balance of cash and cash equivalents
    */
    'openingCashBalance'?: number;
    /**
    * Closing balance of cash and cash equivalents
    */
    'closingCashBalance'?: number;
    /**
    * Net movement of cash and cash equivalents for the period
    */
    'netCashMovement'?: number;
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
