export declare class SalesTrackingCategory {
    /**
    * The default sales tracking category name for contacts
    */
    'trackingCategoryName'?: string;
    /**
    * The default purchase tracking category name for contacts
    */
    'trackingOptionName'?: string;
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
