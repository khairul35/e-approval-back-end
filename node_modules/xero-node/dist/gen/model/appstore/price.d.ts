export declare class Price {
    /**
    * The net (before tax) amount.
    */
    'amount': number;
    /**
    * The currency of the price.
    */
    'currency': string;
    /**
    * The unique identifier of the price.
    */
    'id': string;
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
