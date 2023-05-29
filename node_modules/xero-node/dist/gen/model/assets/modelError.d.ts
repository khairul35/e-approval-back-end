import { FieldValidationErrorsElement } from '././fieldValidationErrorsElement';
import { ResourceValidationErrorsElement } from '././resourceValidationErrorsElement';
export declare class ModelError {
    /**
    * Array of elements of resource validation errors
    */
    'resourceValidationErrors'?: Array<ResourceValidationErrorsElement>;
    /**
    * Array of elements of field validation errors
    */
    'fieldValidationErrors'?: Array<FieldValidationErrorsElement>;
    /**
    * The internal type of error, not accessible externally
    */
    'type'?: string;
    /**
    * Title of the error
    */
    'title'?: string;
    /**
    * Detail of the error
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
