export declare class ResourceValidationErrorsElement {
    /**
    * The field name of the erroneous field
    */
    'resourceName'?: string;
    /**
    * Explanation of the resource validation error
    */
    'localisedMessage'?: string;
    /**
    * Internal type of the resource error message
    */
    'type'?: string;
    /**
    * Title of the resource validation error
    */
    'title'?: string;
    /**
    * Detail of the resource validation error
    */
    'detail'?: string;
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
