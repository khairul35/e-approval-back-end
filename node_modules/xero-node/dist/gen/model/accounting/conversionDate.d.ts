/**
* The date when the organisation starts using Xero
*/
export declare class ConversionDate {
    /**
    * The month the organisation starts using Xero. Value is an integer between 1 and 12
    */
    'month'?: number;
    /**
    * The year the organisation starts using Xero. Value is an integer greater than 2006
    */
    'year'?: number;
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
