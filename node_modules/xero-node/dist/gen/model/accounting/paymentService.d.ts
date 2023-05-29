import { ValidationError } from '././validationError';
export declare class PaymentService {
    /**
    * Xero identifier
    */
    'paymentServiceID'?: string;
    /**
    * Name of payment service
    */
    'paymentServiceName'?: string;
    /**
    * The custom payment URL
    */
    'paymentServiceUrl'?: string;
    /**
    * The text displayed on the Pay Now button in Xero Online Invoicing. If this is not set it will default to Pay by credit card
    */
    'payNowText'?: string;
    /**
    * This will always be CUSTOM for payment services created via the API.
    */
    'paymentServiceType'?: string;
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
