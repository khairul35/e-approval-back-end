/**
* Data transfer object for public create usage end point
*/
export declare class CreateUsageRecord {
    /**
    * The initial quantity for the usage record. Must be a whole number that is greater than or equal to 0
    */
    'quantity': number;
    /**
    * DateTime in UTC of when the the product was consumed/used
    */
    'timestamp': Date;
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
