/**
* Data transfer object for public update usage end point
*/
export declare class UpdateUsageRecord {
    /**
    * The new quantity for the usage record. Must be a whole number that is greater than or equal to 0
    */
    'quantity': number;
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
