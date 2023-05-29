import { ExternalLink } from '././externalLink';
import { ValidationError } from '././validationError';
export declare class Employee {
    /**
    * The Xero identifier for an employee e.g. 297c2dc5-cc47-4afd-8ec8-74990b8761e9
    */
    'employeeID'?: string;
    /**
    * Current status of an employee – see contact status types
    */
    'status'?: Employee.StatusEnum;
    /**
    * First name of an employee (max length = 255)
    */
    'firstName'?: string;
    /**
    * Last name of an employee (max length = 255)
    */
    'lastName'?: string;
    'externalLink'?: ExternalLink;
    'updatedDateUTC'?: Date;
    /**
    * A string to indicate if a invoice status
    */
    'statusAttributeString'?: string;
    /**
    * Displays array of validation error messages from the API
    */
    'validationErrors'?: Array<ValidationError>;
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
export declare namespace Employee {
    enum StatusEnum {
        ACTIVE,
        ARCHIVED,
        GDPRREQUEST,
        DELETED
    }
}
