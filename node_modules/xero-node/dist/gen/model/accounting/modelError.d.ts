import { Element } from '././element';
export declare class ModelError {
    /**
    * Exception number
    */
    'errorNumber'?: number;
    /**
    * Exception type
    */
    'type'?: string;
    /**
    * Exception message
    */
    'message'?: string;
    /**
    * Array of Elements of validation Errors
    */
    'elements'?: Array<Element>;
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
