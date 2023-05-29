export declare class LineItemItem {
    /**
    * User defined item code (max length = 30)
    */
    'code'?: string;
    /**
    * The name of the item (max length = 50)
    */
    'name'?: string;
    /**
    * The Xero identifier for an Item
    */
    'itemID'?: string;
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
