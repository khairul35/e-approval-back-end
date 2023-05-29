import { TrackingOption } from '././trackingOption';
export declare class TrackingCategory {
    /**
    * The Xero identifier for a tracking category e.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9
    */
    'trackingCategoryID'?: string;
    /**
    * The Xero identifier for a tracking option e.g. dc54c220-0140-495a-b925-3246adc0075f
    */
    'trackingOptionID'?: string;
    /**
    * The name of the tracking category e.g. Department, Region (max length = 100)
    */
    'name'?: string;
    /**
    * The option name of the tracking option e.g. East, West (max length = 100)
    */
    'option'?: string;
    /**
    * The status of a tracking category
    */
    'status'?: TrackingCategory.StatusEnum;
    /**
    * See Tracking Options
    */
    'options'?: Array<TrackingOption>;
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
export declare namespace TrackingCategory {
    enum StatusEnum {
        ACTIVE,
        ARCHIVED,
        DELETED
    }
}
