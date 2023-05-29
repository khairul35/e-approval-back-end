export declare class Product {
    /**
    * The unique identifier for the product
    */
    'id'?: string;
    /**
    * The name of the product
    */
    'name'?: string;
    /**
    * The unit of the per seat product. e.g. \"user\", \"organisation\", \"SMS\", etc
    */
    'seatUnit'?: string;
    /**
    * The pricing model of the product: * FIXED: Customers are charged a fixed amount for each billing period * PER_SEAT: Customers are charged based on the number of units they purchase * METERED: Customers are charged per use of this product
    */
    'type'?: Product.TypeEnum;
    /**
    * The unit of the usage product. e.g. \"user\", \"minutes\", \"SMS\", etc
    */
    'usageUnit'?: string;
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
export declare namespace Product {
    enum TypeEnum {
        FIXED,
        PERSEAT,
        METERED
    }
}
