import { CreditNote } from '././creditNote';
import { Invoice } from '././invoice';
import { Overpayment } from '././overpayment';
import { Prepayment } from '././prepayment';
import { ValidationError } from '././validationError';
export declare class Allocation {
    'invoice': Invoice;
    'overpayment'?: Overpayment;
    'prepayment'?: Prepayment;
    'creditNote'?: CreditNote;
    /**
    * the amount being applied to the invoice
    */
    'amount': number;
    /**
    * the date the allocation is applied YYYY-MM-DD.
    */
    'date': string;
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
