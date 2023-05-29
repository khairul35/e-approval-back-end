export declare class FieldValidationErrorsElement {
    /**
    * The field name of the erroneous field
    */
    'fieldName'?: string;
    /**
    * The provided value
    */
    'valueProvided'?: string;
    /**
    * Explanation of the field validation error
    */
    'localisedMessage'?: string;
    /**
    * Internal type of the field validation error message
    */
    'type'?: string;
    /**
    * Title of the field validation error
    */
    'title'?: string;
    /**
    * Detail of the field validation error
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
