/**
* The object returned for a bad request
*/
export declare class APIException {
    /**
    * The error number
    */
    'errorNumber'?: number;
    /**
    * The type of error
    */
    'type'?: string;
    /**
    * The message describing the error
    */
    'message'?: string;
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
