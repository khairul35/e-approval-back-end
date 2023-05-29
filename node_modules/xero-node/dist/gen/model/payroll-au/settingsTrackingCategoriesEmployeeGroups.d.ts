/**
* The tracking category used for employees
*/
export declare class SettingsTrackingCategoriesEmployeeGroups {
    /**
    * The identifier for the tracking category
    */
    'trackingCategoryID'?: string;
    /**
    * Name of the tracking category
    */
    'trackingCategoryName'?: string;
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
