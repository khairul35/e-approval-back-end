import { ContactResponse } from '././contactResponse';
import { LineItemResponse } from '././lineItemResponse';
export declare class BankTransactionResponse {
    /**
    * Xero Identifier of transaction
    */
    'bankTransactionId'?: string;
    /**
    * Xero Identifier of batch payment. Present if the transaction is part of a batch.
    */
    'batchPaymentId'?: string;
    'contact'?: ContactResponse;
    /**
    * Date of transaction - YYYY-MM-DD
    */
    'date'?: string;
    /**
    * Amount of transaction
    */
    'amount'?: number;
    /**
    * The LineItems element can contain any number of individual LineItem sub-elements. Not included in summary mode
    */
    'lineItems'?: Array<LineItemResponse>;
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
