export declare class LineItemTracking {
    /**
    * The Xero identifier for a tracking category
    */
    'trackingCategoryID'?: string;
    /**
    * The Xero identifier for a tracking category option
    */
    'trackingOptionID'?: string;
    /**
    * The name of the tracking category
    */
    'name'?: string;
    /**
    * See Tracking Options
    */
    'option'?: string;
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
