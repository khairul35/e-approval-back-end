import { ValidationError } from '././validationError';
export declare class Element {
    /**
    * Array of Validation Error message
    */
    'validationErrors'?: Array<ValidationError>;
    /**
    * Unique ID for batch payment object with validation error
    */
    'batchPaymentID'?: string;
    'bankTransactionID'?: string;
    'creditNoteID'?: string;
    'contactID'?: string;
    'invoiceID'?: string;
    'itemID'?: string;
    'purchaseOrderID'?: string;
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
